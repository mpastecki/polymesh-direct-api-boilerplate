# Polymesh Direct API

A boilerplate project for interacting with the Polymesh blockchain using the Polkadot.js API directly, without the abstraction of the Polymesh SDK.

## Features

- Direct access to the entire Polymesh chain using Polkadot.js API
- Type generation for Polymesh-specific types for better type safety
- Environment variable support for configuration
- Working examples of common blockchain queries

## Why Use This?

While the [Polymesh SDK](https://github.com/PolymeshAssociation/polymesh-sdk) provides a higher-level abstraction for developers, there are scenarios where you might want to use the Polkadot.js API directly:

- You need deeper access to chain features not yet exposed in the SDK
- You want to minimize dependencies and bundle size
- You're building a low-level utility or advanced tool
- You're already familiar with Polkadot.js API and prefer using it

## Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager
- Access to a Polymesh node (local or remote)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/polymesh-direct-api.git
cd polymesh-direct-api

# Install dependencies
yarn install
```

## Configuration

Configuration is handled through environment variables. Copy the example environment file and modify as needed:

```bash
cp .env.example .env
```

Available environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| POLYMESH_NODE_URL | WebSocket URL for the Polymesh node | ws://127.0.0.1:9944 |
| SAMPLE_DID | A DID to use for example queries | 0xcf80cc1d... |
| SAMPLE_TICKER | An asset ticker to use for example queries | TESTT |

## Usage

### Running the Demo

```bash
yarn demo
```

This will connect to the Polymesh node and run some basic queries to demonstrate how to use the API.

### Generating Types

The project includes scripts to generate TypeScript definitions from the Polymesh chain metadata:

```bash
yarn generate:polkadot-types
```

This will:
1. Fetch the metadata from the configured Polymesh node
2. Generate type definitions for all pallets, storage items, and custom types
3. Create augmentation files for better IDE integration

## Examples

### Connecting to the Node

```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundle } from '@polymeshassociation/polymesh-types';

async function connect() {
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({
    provider,
    typesBundle,
  });
  await api.isReady;
  console.log(`Connected to chain ${api.runtimeChain}`);
  return api;
}
```

### Querying a DID Record

```typescript
import { PolymeshPrimitivesIdentityDidRecord } from '@polkadot/types/lookup';
import { Option } from '@polkadot/types';

// Assuming you have a connected API instance
const did = '0xcf80cc1d46815b3ad776d892920ba1de667f956f1d48725d27235fc302f32408';
const didRecordOption = await api.query.identity.didRecords(did) as Option<PolymeshPrimitivesIdentityDidRecord>;

if (didRecordOption.isSome) {
  const didData = didRecordOption.unwrap();
  console.log('DID Record:', didData.toHuman());
}
```

### Querying an Asset by Ticker

```typescript
import { PolymeshPrimitivesIdentityId } from '@polkadot/types/lookup';
import { PalletAssetAssetDetails } from '@polkadot/types/lookup';
import { Option } from '@polkadot/types';

// Convert a ticker to hex format
function tickerToHex(ticker) {
  const tickerBytes = Buffer.from(ticker, 'utf8');
  const paddedBytes = Buffer.alloc(12, 0);
  tickerBytes.copy(paddedBytes, 0);
  return '0x' + paddedBytes.toString('hex');
}

// Assuming you have a connected API instance
const ticker = 'TESTT';
const hexTicker = tickerToHex(ticker);
const rawTicker = api.createType('PolymeshPrimitivesTicker', hexTicker);

// Get the asset ID for the ticker
const assetIdOption = await api.query.asset.tickerAssetId(rawTicker) as Option<PolymeshPrimitivesIdentityId>;

if (assetIdOption.isSome) {
  const assetId = assetIdOption.unwrap();
  
  // Get the asset details
  const assetDetailsOption = await api.query.asset.assets(assetId) as Option<PalletAssetAssetDetails>;
  
  if (assetDetailsOption.isSome) {
    const details = assetDetailsOption.unwrap();
    console.log('Asset Details:', details.toHuman());
  }
}
```

## Project Structure

```
polymesh-direct-api/
├── src/
│   ├── polkadot/        # Generated types
│   ├── demo.ts          # Demo script
├── scripts/             # Type generation scripts
└── .env                 # Configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 