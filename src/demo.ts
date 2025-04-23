import { ApiPromise, WsProvider } from '@polkadot/api';
import { Option } from '@polkadot/types';
// Import Polymesh-specific types from the generated types
import { PolymeshPrimitivesIdentityId } from '@polkadot/types/lookup';
import { PolymeshPrimitivesIdentityDidRecord } from '@polkadot/types/lookup';
import { PalletAssetAssetDetails } from '@polkadot/types/lookup';
// Import the typesBundle
import { typesBundle } from '@polymeshassociation/polymesh-types';
// Import dotenv for environment variables
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Environment variables with defaults
const NODE_URL = process.env.POLYMESH_NODE_URL || 'ws://127.0.0.1:9944';
const SAMPLE_DID = process.env.SAMPLE_DID || '0xcf80cc1d46815b3ad776d892920ba1de667f956f1d48725d27235fc302f32408';
const SAMPLE_TICKER = process.env.SAMPLE_TICKER || 'TESTT';

/**
 * Converts a ticker string (e.g., "TESTT") into the 12-byte hex format
 * required by Polymesh (0x...). Shorter tickers are padded with null bytes.
 * @param ticker The asset ticker string (max 12 characters).
 * @returns The 0x-prefixed hex representation of the 12-byte ticker.
 */
function tickerToHex(ticker: string): string {
  if (ticker.length > 12) {
    throw new Error("Ticker cannot be longer than 12 characters");
  }
  // Encode ticker string to bytes.
  const tickerBytes = Buffer.from(ticker, 'utf8');
  // Create a 12-byte buffer filled with zeros (null bytes).
  const paddedBytes = Buffer.alloc(12, 0);
  // Copy ticker bytes into the buffer, leaving the rest as null padding.
  tickerBytes.copy(paddedBytes, 0);
  // Convert the 12 bytes to a hex string and add the '0x' prefix.
  return '0x' + paddedBytes.toString('hex');
}

async function connect() {
  // Use the environment variable for the node URL
  const provider = new WsProvider(NODE_URL);
  console.log(`Attempting to connect to ${NODE_URL}`);

  try {
    // Create the API instance, specifying the provider and Polymesh types.
    const api = await ApiPromise.create({
      provider,
      // The typesBundle is crucial for the API to understand Polymesh-specific structures.
      typesBundle: typesBundle,
    });

    // Wait until the API is connected and ready (metadata loaded, types registered).
    await api.isReady;
    console.log(
      `Successfully connected to chain ${api.runtimeChain} using spec ${api.runtimeVersion.specName} v${api.runtimeVersion.specVersion}`
    );

    // --- Basic Chain Information ---
    const props = await api.rpc.system.properties();
    console.log(`Token Symbol: ${props.tokenSymbol.unwrapOrDefault().toString()}`);
    console.log(`Token Decimals: ${props.tokenDecimals.unwrapOrDefault().toString()}`);
    // Access constants defined in the runtime.
    const existentialDeposit = api.consts.balances.existentialDeposit;
    console.log(`Existential Deposit: ${existentialDeposit.toHuman()}`);

    // --- Querying Storage for Identity Records ---
    console.log(`\nFetching DID record for: ${SAMPLE_DID}`);

    // Use proper Polymesh type for the DID record
    const didRecordOption = await api.query.identity.didRecords(SAMPLE_DID) as Option<PolymeshPrimitivesIdentityDidRecord>;

    // Check if the Option contains data (.isSome) or is empty (.isNone).
    if (didRecordOption.isSome) {
      // If data exists, unwrap it to get the actual value.
      const didData = didRecordOption.unwrap();

      // Use .toHuman() for a readable representation of potentially complex types.
      console.log('DID Record (Human):', didData.toHuman());
      
      // Access properties directly from the strongly-typed object
      if (didData.primaryKey) {
        console.log('Primary Key:', didData.primaryKey.toHuman());
      } else {
        console.log('Primary Key not found in DID Record.');
      }
    } else {
      console.log(`No record found for DID ${SAMPLE_DID}`);
    }

    // --- Querying Storage for Asset Details by Ticker ---
    console.log(`\nFetching details for asset with ticker: ${SAMPLE_TICKER}`);

    // 1. Convert the human-readable ticker to the required hex format.
    const hexTicker = tickerToHex(SAMPLE_TICKER);
    console.log('Hex ticker for query:', hexTicker);

    // 2. Create the Ticker type object required by the storage query key.
    const rawTicker = api.createType('PolymeshPrimitivesTicker', hexTicker);

    // 3. Query the 'tickerAssetId' map with proper Polymesh types
    const assetIdOption = await api.query.asset.tickerAssetId(rawTicker) as Option<PolymeshPrimitivesIdentityId>;

    if (assetIdOption.isNone) {
      console.log(`No asset found with ticker: ${SAMPLE_TICKER}`);
    } else {
      // 4. Unwrap the AssetId if the ticker was found.
      const assetId = assetIdOption.unwrap();
      console.log(`Asset ID found: ${assetId.toString()}`);

      // 5. Query the 'assets' map using the AssetId to get the full AssetDetails.
      const assetDetailsOption = await api.query.asset.assets(assetId) as Option<PalletAssetAssetDetails>;

      if (assetDetailsOption.isSome) {
        const details = assetDetailsOption.unwrap();
        console.log('\nAsset Details:');

        // Display the full details using proper Polymesh types
        console.log('Decoded Details (Human):', details.toHuman());
        
        // Access specific fields in a type-safe way using the correct property names
        console.log('Asset Owner DID:', details.ownerDid.toHuman());
        console.log('Asset Type:', details.assetType.toHuman());
        console.log('Divisible:', details.divisible.toHuman());
        console.log('Total Supply:', details.totalSupply.toHuman());

        // --- Querying Asset Metadata ---
        // '.entries()' retrieves all key-value pairs from a storage map.
        const metadataEntries = await api.query.asset.assetMetadataGlobalKeyToName.entries();
        console.log('\nGlobal Metadata Keys associated with Assets:');
        metadataEntries.forEach(([key, value]) => {
          // key.args[0] usually contains the actual key component for map entries.
          const keyId = key.args[0].toString();
          // Metadata names are often stored as hex-encoded strings.
          const nameHex = value.toString();
          try {
            const nameDecoded = Buffer.from(nameHex.substring(2), 'hex').toString('utf8');
            console.log(`Key ID: ${keyId}, Name Hex: ${nameHex}, Name Decoded: ${nameDecoded}`);
          } catch (e) {
            if (e instanceof Error) {
              console.log(`Key ID: ${keyId}, Name Hex: ${nameHex} (Error decoding: ${e.message})`);
            } else {
              console.log(`Key ID: ${keyId}, Name Hex: ${nameHex} (Error decoding: An unknown error occurred)`);
            }
          }
        });
      } else {
        // This case would be unusual if assetIdOption was Some.
        console.log('No details found for asset ID:', assetId.toString());
      }
    }

    // Disconnect the API instance when done.
    await api.disconnect();
  } catch (error) {
    console.error('Connection failed or error during query:', error);
    process.exit(1);
  }
}

connect();