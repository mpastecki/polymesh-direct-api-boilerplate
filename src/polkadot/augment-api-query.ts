// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeSet, Bytes, Null, Option, U8aFixed, Vec, WrapperOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletAssetAssetDetails, PalletAssetTickerRegistration, PalletAssetTickerRegistrationConfig, PalletBalancesBalanceLock, PalletBridgeBridgeTxDetail, PalletCommitteePolymeshVotes, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletCorporateActionsBallotBallotMeta, PalletCorporateActionsBallotBallotTimeRange, PalletCorporateActionsBallotBallotVote, PalletCorporateActionsCaId, PalletCorporateActionsCorporateAction, PalletCorporateActionsDistribution, PalletCorporateActionsTargetIdentities, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityClaim1stKey, PalletIdentityClaim2ndKey, PalletImOnlineBoundedOpaqueNetworkState, PalletImOnlineSr25519AppSr25519Public, PalletPipsDepositInfo, PalletPipsPip, PalletPipsPipsMetadata, PalletPipsProposalState, PalletPipsSnapshotMetadata, PalletPipsSnapshottedPip, PalletPipsVote, PalletPipsVotingResult, PalletPreimageRequestStatus, PalletRelayerSubsidy, PalletSchedulerScheduled, PalletStakingActiveEraInfo, PalletStakingEraRewardPoints, PalletStakingExposure, PalletStakingForcing, PalletStakingNominations, PalletStakingPermissionedIdentityPrefs, PalletStakingRewardDestination, PalletStakingSlashingSlashingSpans, PalletStakingSlashingSpanRecord, PalletStakingSlashingSwitch, PalletStakingStakingLedger, PalletStakingUnappliedSlash, PalletStakingValidatorPrefs, PalletStoFundraiser, PalletTransactionPaymentReleases, PolymeshCommonUtilitiesCheckpointNextCheckpoints, PolymeshCommonUtilitiesCheckpointScheduleCheckpoints, PolymeshCommonUtilitiesProtocolFeeProtocolOp, PolymeshContractsApi, PolymeshContractsApiCodeHash, PolymeshContractsChainExtensionExtrinsicId, PolymeshContractsNextUpgrade, PolymeshPrimitivesAgentAgentGroup, PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesAssetIdentifier, PolymeshPrimitivesAssetMetadataAssetMetadataKey, PolymeshPrimitivesAssetMetadataAssetMetadataSpec, PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail, PolymeshPrimitivesAuthorization, PolymeshPrimitivesComplianceManagerAssetCompliance, PolymeshPrimitivesConditionTrustedIssuer, PolymeshPrimitivesDocument, PolymeshPrimitivesGroupInactiveMember, PolymeshPrimitivesIdentityClaim, PolymeshPrimitivesIdentityDidRecord, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesMaybeBlock, PolymeshPrimitivesMemo, PolymeshPrimitivesMultisigProposalState, PolymeshPrimitivesMultisigProposalVoteCount, PolymeshPrimitivesNftNftCollection, PolymeshPrimitivesSecondaryKeyExtrinsicPermissions, PolymeshPrimitivesSecondaryKeyKeyRecord, PolymeshPrimitivesSecondaryKeySignatory, PolymeshPrimitivesSettlementAffirmationStatus, PolymeshPrimitivesSettlementInstruction, PolymeshPrimitivesSettlementInstructionStatus, PolymeshPrimitivesSettlementLeg, PolymeshPrimitivesSettlementLegStatus, PolymeshPrimitivesSettlementMediatorAffirmationStatus, PolymeshPrimitivesSettlementVenue, PolymeshPrimitivesStatisticsStat1stKey, PolymeshPrimitivesStatisticsStat2ndKey, PolymeshPrimitivesStatisticsStatType, PolymeshPrimitivesSubsetSubsetRestrictionAssetId, PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId, PolymeshPrimitivesTicker, PolymeshPrimitivesTransferComplianceAssetTransferCompliance, PolymeshPrimitivesTransferComplianceTransferConditionExemptKey, PolymeshRuntimeDevelopRuntimeSessionKeys, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusBabeDigestsPreDigest, SpCoreCryptoKeyTypeId, SpNposElectionsElectionScore, SpRuntimeDigest, SpStakingOffenceOffenceDetails } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    asset: {
      /**
       * All [`Document`] attached to an asset.
       **/
      assetDocuments: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesDocument>>, [PolymeshPrimitivesAssetAssetId, u32]>;
      /**
       * [`DocumentId`] counter per [`AssetId`].
       **/
      assetDocumentsIdSequence: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Maps each [`AssetId`] to its asset identifiers ([`AssetIdentifier`]).
       **/
      assetIdentifiers: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Vec<PolymeshPrimitivesAssetIdentifier>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Maps all [`AssetId`] that are mapped to a [`Ticker`].
       **/
      assetIdTicker: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<PolymeshPrimitivesTicker>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Asset Metadata Global Key -> Name.
       **/
      assetMetadataGlobalKeyToName: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u64]>;
      /**
       * Asset Metadata Global Name -> Key.
       **/
      assetMetadataGlobalNameToKey: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u64>>, [Bytes]>;
      /**
       * Asset Metadata Global Key specs.
       **/
      assetMetadataGlobalSpecs: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataSpec>>, [u64]>;
      /**
       * Asset Metadata Local Key -> Name.
       **/
      assetMetadataLocalKeyToName: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Asset Metadata Local Name -> Key.
       **/
      assetMetadataLocalNameToKey: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<u64>>, [PolymeshPrimitivesAssetAssetId, Bytes]>;
      /**
       * Asset Metadata Local Key specs.
       **/
      assetMetadataLocalSpecs: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataSpec>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Details for an asset's Metadata values.
       **/
      assetMetadataValueDetails: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesAssetMetadataAssetMetadataKey | { Global: any } | { Local: any } | string | Uint8Array) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesAssetMetadataAssetMetadataKey]>;
      /**
       * Metatdata values for an asset.
       **/
      assetMetadataValues: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesAssetMetadataAssetMetadataKey | { Global: any } | { Local: any } | string | Uint8Array) => Observable<Option<Bytes>>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesAssetMetadataAssetMetadataKey]>;
      /**
       * Maps each [`AssetId`] to its underling [`AssetName`].
       **/
      assetNames: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<Bytes>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * A per account nonce that is used for generating an [`AssetId`].
       **/
      assetNonce: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      /**
       * Maps each [`AssetId`] to its underling [`AssetDetails`].
       **/
      assets: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<PalletAssetAssetDetails>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * A list of assets that exempt all users from affirming its receivement.
       **/
      assetsExemptFromAffirmation: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Tracks the total [`Balance`] for each [`AssetId`] per [`IdentityId`].
       **/
      balanceOf: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u128>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]>;
      /**
       * The last [`AssetMetadataGlobalKey`] used for a global key.
       **/
      currentAssetMetadataGlobalKey: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * The last [`AssetMetadataLocalKey`] used for [`AssetId`].
       **/
      currentAssetMetadataLocalKey: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<u64>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * The next `AssetType::Custom` ID in the sequence.
       * 
       * Numbers in the sequence start from 1 rather than 0.
       **/
      customTypeIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Maps custom asset type ids to the registered string contents.
       **/
      customTypes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Inverse map of `CustomTypes`, from registered string contents to custom asset type ids.
       **/
      customTypesInverse: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>, [Bytes]>;
      /**
       * Returns `true` if transfers for the asset are frozen. Otherwise, returns `false`.
       **/
      frozen: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Maps each [`AssetId`] to the name of its founding round ([`FundingRoundName`]).
       **/
      fundingRound: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Bytes>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * The total [`Balance`] of tokens issued in all recorded funding rounds ([`FundingRoundName`]).
       **/
      issuedInFundingRound: AugmentedQuery<ApiType, (arg: ITuple<[PolymeshPrimitivesAssetAssetId, Bytes]> | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<u128>, [ITuple<[PolymeshPrimitivesAssetAssetId, Bytes]>]>;
      /**
       * The list of mandatory mediators for every ticker.
       **/
      mandatoryMediators: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<BTreeSet<PolymeshPrimitivesIdentityId>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * All assets that don't need an affirmation to be received by an identity.
       **/
      preApprovedAsset: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * All assets owned by a user.
       **/
      securityTokensOwnedByUser: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Maps all [`Ticker`] that are linked to an [`AssetId`].
       **/
      tickerAssetId: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesTicker | string | Uint8Array) => Observable<Option<PolymeshPrimitivesAssetAssetId>>, [PolymeshPrimitivesTicker]>;
      /**
       * Returns [`TickerRegistrationConfig`] for assessing if a ticker is valid.
       **/
      tickerConfig: AugmentedQuery<ApiType, () => Observable<PalletAssetTickerRegistrationConfig>, []>;
      /**
       * All tickers owned by a user.
       **/
      tickersOwnedByUser: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesTicker | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker]>;
      /**
       * Map each [`Ticker`] to its registration details ([`TickerRegistration`]).
       **/
      uniqueTickerRegistration: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesTicker | string | Uint8Array) => Observable<Option<PalletAssetTickerRegistration>>, [PolymeshPrimitivesTicker]>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []>;
      /**
       * This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       * 
       * It is set in `on_finalize`, before it will contain the value from the last block.
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The configuration for the current epoch. Should never be `None` as it is initialized in
       * genesis.
       **/
      epochConfig: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The block numbers when the last and current epoch have started, respectively `N-1` and
       * `N`.
       * NOTE: We track this is in order to annotate the block number when a given pool of
       * entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
       * slots, which may be skipped, the block numbers may not line up with the slot numbers.
       **/
      epochStart: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<Option<SpConsensusBabeDigestsPreDigest>>>, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []>;
      /**
       * The configuration for the next epoch, `None` if the config will not change
       * (you can fallback to `EpochConfig` instead in that case).
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []>;
      /**
       * Pending epoch configuration change that will be applied when the next epoch is enacted.
       **/
      pendingEpochConfigChange: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeDigestsNextConfigDescriptor>>, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []>;
      /**
       * Randomness under construction.
       * 
       * We make a trade-off between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * A list of the last 100 skipped epochs and the corresponding session index
       * when the epoch was skipped.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof
       * must contains a key-ownership proof for a given session, therefore we need a
       * way to tie together sessions and epoch indices, i.e. we need to validate that
       * a validator was the owner of a given key on a given session, and what the
       * active epoch index was during that session.
       **/
      skippedEpochs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u64, u32]>>>, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>, [u32]>;
    };
    balances: {
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    bridge: {
      /**
       * The admin key.
       **/
      admin: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * The maximum number of bridged POLYX per identity within a set interval of
       * blocks. Fields: POLYX amount and the block interval duration.
       **/
      bridgeLimit: AugmentedQuery<ApiType, () => Observable<ITuple<[u128, u32]>>, []>;
      /**
       * Identities not constrained by the bridge limit.
       **/
      bridgeLimitExempted: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId]>;
      /**
       * Details of bridge transactions identified with pairs of the recipient account and the
       * bridge transaction nonce.
       **/
      bridgeTxDetails: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletBridgeBridgeTxDetail>, [AccountId32, u32]>;
      /**
       * The multisig account of the bridge controller. The genesis signers accept their
       * authorizations and are able to get their proposals delivered. The bridge creator
       * transfers some POLY to their identity.
       **/
      controller: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Freeze bridge admins.  These accounts can only freeze the bridge.
       **/
      freezeAdmins: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]>;
      /**
       * Whether or not the bridge operation is frozen.
       **/
      frozen: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Amount of POLYX bridged by the identity in last block interval. Fields: the bridged
       * amount and the last interval number.
       **/
      polyxBridged: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<ITuple<[u128, u32]>>, [PolymeshPrimitivesIdentityId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * The bridge transaction timelock period, in blocks, since the acceptance of the
       * transaction proposal during which the admin key can freeze the transaction.
       **/
      timelock: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    capitalDistribution: {
      /**
       * All capital distributions, tied to their respective corporate actions (CAs).
       * 
       * (CAId) => Distribution
       **/
      distributions: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Option<PalletCorporateActionsDistribution>>, [PalletCorporateActionsCaId]>;
      /**
       * Has an asset holder been paid yet?
       * 
       * (CAId, DID) -> Was DID paid in the CAId?
       **/
      holderPaid: AugmentedQuery<ApiType, (arg: ITuple<[PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]> | [PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array, PolymeshPrimitivesIdentityId | string | Uint8Array]) => Observable<bool>, [ITuple<[PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]>]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    cddServiceProviders: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesGroupInactiveMember>>, []>;
    };
    checkpoint: {
      /**
       * Balance of a DID at a checkpoint.
       * 
       * ([`AssetId`], did, checkpoint ID) -> Balance of a DID at a checkpoint
       **/
      balance: AugmentedQuery<ApiType, (arg1: ITuple<[PolymeshPrimitivesAssetAssetId, u64]> | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array], arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u128>, [ITuple<[PolymeshPrimitivesAssetAssetId, u64]>, PolymeshPrimitivesIdentityId]>;
      /**
       * Checkpoints where a DID's balance was updated.
       * ([`AssetId`], did) -> [checkpoint ID where user balance changed]
       **/
      balanceUpdates: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Vec<u64>>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]>;
      /**
       * Cached next checkpoint for each schedule.
       * 
       * This is used to quickly find the next checkpoint from a asset's schedules.
       * 
       * ([`AssetId`]) -> next checkpoints
       **/
      cachedNextCheckpoints: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<PolymeshCommonUtilitiesCheckpointNextCheckpoints>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Checkpoints ID generator sequence.
       * ID of first checkpoint is 1 instead of 0.
       * 
       * ([`AssetId`]) -> no. of checkpoints
       **/
      checkpointIdSequence: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Scheduled checkpoints.
       * 
       * ([`AssetId`], schedule ID) -> schedule checkpoints
       **/
      scheduledCheckpoints: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshCommonUtilitiesCheckpointScheduleCheckpoints>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Checkpoint schedule ID sequence for assets.
       * 
       * ([`AssetId`]) -> schedule ID
       **/
      scheduleIdSequence: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * All the checkpoints a given schedule originated.
       * 
       * ([`AssetId`], schedule ID) -> [checkpoint ID]
       **/
      schedulePoints: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Vec<u64>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * How many "strong" references are there to a given `ScheduleId`?
       * 
       * The presence of a "strong" reference, in the sense of `Rc<T>`,
       * entails that the referenced schedule cannot be removed.
       * Thus, as long as `strong_ref_count(schedule_id) > 0`,
       * `remove_schedule(schedule_id)` will error.
       * 
       * ([`AssetId`], schedule ID) -> strong ref count
       **/
      scheduleRefCount: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<u32>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * The maximum complexity allowed for an asset's schedules.
       **/
      schedulesMaxComplexity: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Checkpoint timestamps.
       * 
       * Every schedule-originated checkpoint maps its ID to its due time.
       * Every checkpoint manually created maps its ID to the time of recording.
       * 
       * ([`AssetId`]) -> (checkpoint ID) -> checkpoint timestamp
       **/
      timestamps: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Total supply of the token at the checkpoint.
       * 
       * ([`AssetId`], checkpointId) -> total supply at given checkpoint
       **/
      totalSupply: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<u128>, [PolymeshPrimitivesAssetAssetId, u64]>;
    };
    committeeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesGroupInactiveMember>>, []>;
    };
    complianceManager: {
      /**
       * Compliance for an asset ([`AssetId`] -> [`AssetCompliance`])
       **/
      assetCompliances: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<PolymeshPrimitivesComplianceManagerAssetCompliance>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * List of trusted claim issuer [`AssetId`] -> Issuer Identity
       **/
      trustedClaimIssuer: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Vec<PolymeshPrimitivesConditionTrustedIssuer>>, [PolymeshPrimitivesAssetAssetId]>;
    };
    contracts: {
      /**
       * A mapping between an original code hash and instrumented wasm code, ready for execution.
       **/
      codeStorage: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmPrefabWasmModule>>, [H256]>;
      /**
       * The code associated with a given account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletContractsStorageContractInfo>>, [AccountId32]>;
      /**
       * Evicted contracts that await child trie deletion.
       * 
       * Child trie deletion is a heavy operation depending on the amount of storage items
       * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
       **/
      deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletContractsStorageDeletedContract>>, []>;
      /**
       * This is a **monotonic** counter incremented on contract instantiation.
       * 
       * This is used in order to generate unique trie ids for contracts.
       * The trie id of a new contract is calculated from hash(account_id, nonce).
       * The nonce is required because otherwise the following sequence would lead to
       * a possible collision of storage:
       * 
       * 1. Create a new contract.
       * 2. Terminate the contract.
       * 3. Immediately recreate the contract with the same account_id.
       * 
       * This is bad because the contents of a trie are deleted lazily and there might be
       * storage of the old instantiation still in it when the new contract is created. Please
       * note that we can't replace the counter by the block number because the sequence above
       * can happen in the same block. We also can't keep the account counter in memory only
       * because storage is the only way to communicate across different extrinsics in the
       * same block.
       * 
       * # Note
       * 
       * Do not use it to determine the number of contracts. It won't be decremented if
       * a contract is destroyed.
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * A mapping between an original code hash and its owner information.
       **/
      ownerInfoOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmOwnerInfo>>, [H256]>;
      /**
       * A mapping from an original code hash to the original code, untouched by instrumentation.
       **/
      pristineCode: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]>;
    };
    corporateAction: {
      /**
       * Associations from CAs to `Document`s via their IDs.
       * (CAId => [DocumentId])
       * 
       * The `CorporateActions` map stores `AssetId => LocalId => The CA`,
       * so we can infer `AssetId => CAId`. Therefore, we don't need a double map.
       **/
      caDocLink: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Vec<u32>>, [PalletCorporateActionsCaId]>;
      /**
       * The next per-`AssetId` CA ID in the sequence.
       * The full ID is defined as a combination of `AssetId` and a number in this sequence.
       **/
      caIdSequence: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * All recorded CAs thus far.
       * Only generic information is stored here.
       * Specific `CAKind`s, e.g., benefits and corporate ballots, may use additional on-chain storage.
       * 
       * (AssetId => local ID => the corporate action)
       **/
      corporateActions: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletCorporateActionsCorporateAction>>, [PolymeshPrimitivesAssetAssetId, u32]>;
      /**
       * The identities targeted by default for CAs for this asset,
       * either to be excluded or included.
       * 
       * (AssetId => target identities)
       **/
      defaultTargetIdentities: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<PalletCorporateActionsTargetIdentities>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * The default amount of tax to withhold ("withholding tax", WT) for this asset when distributing dividends.
       * 
       * To understand withholding tax, e.g., let's assume that you hold ACME shares.
       * ACME now decides to distribute 100 SEK to Alice.
       * Alice lives in Sweden, so Skatteverket (the Swedish tax authority) wants 30% of that.
       * Then those 100 * 30% are withheld from Alice, and ACME will send them to Skatteverket.
       * 
       * (AssetId => % to withhold)
       **/
      defaultWithholdingTax: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Permill>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Associates details in free-form text with a CA by its ID.
       * (CAId => CADetails)
       **/
      details: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Bytes>, [PalletCorporateActionsCaId]>;
      /**
       * The amount of tax to withhold ("withholding tax", WT) for a certain AssetId x DID.
       * If an entry exists for a certain DID, it overrides the default in `DefaultWithholdingTax`.
       * 
       * (AssetId => [(did, % to withhold)]
       **/
      didWithholdingTax: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Vec<ITuple<[PolymeshPrimitivesIdentityId, Permill]>>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Determines the maximum number of bytes that the free-form `details` of a CA can store.
       * 
       * Note that this is not the number of `char`s or the number of [graphemes].
       * While this may be unnatural in terms of human understanding of a text's length,
       * it more closely reflects actual storage costs (`'a'` is cheaper to store than an emoji).
       * 
       * [graphemes]: https://en.wikipedia.org/wiki/Grapheme
       **/
      maxDetailsLength: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    corporateBallot: {
      /**
       * Metadata of a corporate ballot.
       * 
       * (CAId) => BallotMeta
       **/
      metas: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Option<PalletCorporateActionsBallotBallotMeta>>, [PalletCorporateActionsCaId]>;
      /**
       * Stores how many choices there are in each motion.
       * 
       * At all times, the invariant holds that `motion_choices[idx]` is equal to
       * `metas.unwrap().motions[idx].choices.len()`. That is, this is just a cache,
       * used to avoid fetching all the motions with their associated texts.
       * 
       * `u16` choices should be more than enough to fit real use cases.
       * 
       * (CAId) => Number of choices in each motion.
       **/
      motionNumChoices: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Vec<u16>>, [PalletCorporateActionsCaId]>;
      /**
       * Is ranked choice voting (RCV) enabled for this ballot?
       * For an understanding of how RCV is handled, see note on `BallotVote`'s `fallback` field.
       * 
       * (CAId) => bool
       **/
      rcv: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<bool>, [PalletCorporateActionsCaId]>;
      /**
       * Stores the total vote tally on each choice.
       * 
       * RCV is not accounted for,
       * as there are too many wants to interpret the graph,
       * and because it would not be efficient.
       * 
       * (CAId) => [current vote weights]
       **/
      results: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Vec<u128>>, [PalletCorporateActionsCaId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Time details of a corporate ballot associated with a CA.
       * The timestamps denote when voting starts and stops.
       * 
       * (CAId) => BallotTimeRange
       **/
      timeRanges: AugmentedQuery<ApiType, (arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array) => Observable<Option<PalletCorporateActionsBallotBallotTimeRange>>, [PalletCorporateActionsCaId]>;
      /**
       * Stores each DID's votes in a given ballot.
       * See the documentation of `BallotVote` for notes on semantics.
       * 
       * (CAId) => (DID) => [vote weight]
       * 
       * User must enter 0 vote weight if they don't want to vote for a choice.
       **/
      votes: AugmentedQuery<ApiType, (arg1: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Vec<PalletCorporateActionsBallotBallotVote>>, [PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]>;
    };
    electionProviderMultiPhase: {
      /**
       * Current phase.
       **/
      currentPhase: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhasePhase>, []>;
      /**
       * Desired number of targets to elect for this round.
       * 
       * Only exists when [`Snapshot`] is present.
       **/
      desiredTargets: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The minimum score that each 'untrusted' solution must attain in order to be considered
       * feasible.
       * 
       * Can be set via `set_minimum_untrusted_score`.
       **/
      minimumUntrustedScore: AugmentedQuery<ApiType, () => Observable<Option<SpNposElectionsElectionScore>>, []>;
      /**
       * Current best solution, signed or unsigned, queued to be returned upon `elect`.
       **/
      queuedSolution: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseReadySolution>>, []>;
      /**
       * Internal counter for the number of rounds.
       * 
       * This is useful for de-duplication of transactions submitted to the pool, and general
       * diagnostics of the pallet.
       * 
       * This is merely incremented once per every time that an upstream `elect` is called.
       **/
      round: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
       * value in `SignedSubmissions`.
       * 
       * We never need to process more than a single signed submission at a time. Signed submissions
       * can be quite large, so we're willing to pay the cost of multiple database accesses to access
       * them one at a time instead of reading and decoding all of them at once.
       **/
      signedSubmissionIndices: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpNposElectionsElectionScore, u32, u32]>>>, []>;
      /**
       * The next index to be assigned to an incoming signed submission.
       * 
       * Every accepted submission is assigned a unique index; that index is bound to that particular
       * submission for the duration of the election. On election finalization, the next index is
       * reset to 0.
       * 
       * We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
       * capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
       * because iteration is slow. Instead, we store the value here.
       **/
      signedSubmissionNextIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Unchecked, signed solutions.
       * 
       * Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
       * allowing us to keep only a single one in memory at a time.
       * 
       * Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
       * affect; we shouldn't need a cryptographically secure hasher.
       **/
      signedSubmissionsMap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletElectionProviderMultiPhaseSignedSignedSubmission>>, [u32]>;
      /**
       * Snapshot data of the round.
       * 
       * This is created at the beginning of the signed phase and cleared upon calling `elect`.
       **/
      snapshot: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseRoundSnapshot>>, []>;
      /**
       * The metadata of the [`RoundSnapshot`]
       * 
       * Only exists when [`Snapshot`] is present.
       **/
      snapshotMetadata: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>>, []>;
    };
    externalAgents: {
      /**
       * Maps an agent (`IdentityId`) to all assets they belong to, if any.
       **/
      agentOf: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Null>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * The next per-asset AG ID in the sequence.
       * 
       * The full ID is defined as a combination of `AssetId` and a number in this sequence,
       * which starts from 1, rather than 0.
       **/
      agIdSequence: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Maps agents (`IdentityId`) for an `AssetId` to what AG they belong to, if any.
       **/
      groupOfAgent: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Option<PolymeshPrimitivesAgentAgentGroup>>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]>;
      /**
       * For custom AGs of an `AssetId`, maps to what permissions an agent in that AG would have.
       **/
      groupPermissions: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesSecondaryKeyExtrinsicPermissions>>, [PolymeshPrimitivesAssetAssetId, u32]>;
      /**
       * Maps an `AssetId` to the number of `Full` agents for it.
       **/
      numFullAgents: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []>;
    };
    identity: {
      /**
       * How many "strong" references to the account key.
       * 
       * Strong references will block a key from leaving it's identity.
       * 
       * Pallets using "strong" references to account keys:
       * * Relayer: For `user_key` and `paying_key`
       * 
       **/
      accountKeyRefCount: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      /**
       * All authorizations that an identity/key has
       **/
      authorizations: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesSecondaryKeySignatory | { Identity: any } | { Account: any } | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesAuthorization>>, [PolymeshPrimitivesSecondaryKeySignatory, u64]>;
      /**
       * All authorizations that an identity has given. (Authorizer, auth_id -> authorized)
       **/
      authorizationsGiven: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSecondaryKeySignatory>, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A config flag that, if set, instructs an authorization from a CDD provider in order to
       * change the primary key of an identity.
       **/
      cddAuthForPrimaryKeyRotation: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * All child identities of a parent (i.e ParentDID, ChildDID, true)
       **/
      childDid: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]>;
      /**
       * (Target ID, claim type) (issuer,scope) -> Associated claims
       **/
      claims: AugmentedQuery<ApiType, (arg1: PalletIdentityClaim1stKey | { target?: any; claimType?: any } | string | Uint8Array, arg2: PalletIdentityClaim2ndKey | { issuer?: any; scope?: any } | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityClaim>>, [PalletIdentityClaim1stKey, PalletIdentityClaim2ndKey]>;
      /**
       * Controls the authorization id.
       **/
      currentAuthId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * It stores the current gas fee payer for the current transaction.
       **/
      currentPayer: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * The next `CustomClaimTypeId`.
       **/
      customClaimIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * CusotmClaimTypeId -> String constant
       **/
      customClaims: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]>;
      /**
       * String constant -> CustomClaimTypeId
       **/
      customClaimsInverse: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>, [Bytes]>;
      /**
       * A reverse double map to allow finding all keys for an identity.
       **/
      didKeys: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, AccountId32]>;
      /**
       * DID -> identity info
       **/
      didRecords: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityDidRecord>>, [PolymeshPrimitivesIdentityId]>;
      /**
       * DID -> bool that indicates if secondary keys are frozen.
       **/
      isDidFrozen: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId]>;
      /**
       * A secondary key's asset permissions.
       **/
      keyAssetPermissions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesSubsetSubsetRestrictionAssetId>>, [AccountId32]>;
      /**
       * A secondary key's extrinsic permissions.
       **/
      keyExtrinsicPermissions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesSecondaryKeyExtrinsicPermissions>>, [AccountId32]>;
      /**
       * A secondary key's portfolio permissions.
       **/
      keyPortfolioPermissions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId>>, [AccountId32]>;
      /**
       * Map from AccountId to `KeyRecord` that holds the key's type and identity.
       **/
      keyRecords: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesSecondaryKeyKeyRecord>>, [AccountId32]>;
      /**
       * Nonce to ensure unique actions. starts from 1.
       **/
      multiPurposeNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Track the number of authorizations given by each identity.
       **/
      numberOfGivenAuths: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u32>, [PolymeshPrimitivesIdentityId]>;
      /**
       * Authorization nonce per Identity. Initially is 0.
       **/
      offChainAuthorizationNonce: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesIdentityId]>;
      /**
       * Tracks all authorizations that must be deleted
       **/
      outdatedAuthorizations: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesSecondaryKeySignatory | { Identity: any } | { Account: any } | string | Uint8Array) => Observable<Option<u64>>, [PolymeshPrimitivesSecondaryKeySignatory]>;
      /**
       * Parent identity if the DID is a child Identity.
       **/
      parentDid: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityId>>, [PolymeshPrimitivesIdentityId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u32>, [u32, AccountId32]>;
      /**
       * The block number after which it's ok to send heartbeats in the current
       * session.
       * 
       * At the beginning of each session we set this to a value that should fall
       * roughly in the middle of the session duration. The idea is to first wait for
       * the validators to produce a block in the current session, so that the
       * heartbeat later on will not be necessary.
       * 
       * This value will only be used as a fallback if we fail to get a proper session
       * progress estimate from `NextSessionRotation`, as those estimates should be
       * more accurate then the value we calculate for `HeartbeatAfter`.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<PalletImOnlineSr25519AppSr25519Public>>, []>;
      /**
       * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
       * `WrapperOpaque<BoundedOpaqueNetworkState>`.
       **/
      receivedHeartbeats: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>>, [u32, u32]>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>, [u32]>;
    };
    multiSig: {
      /**
       * The multisig's admin identity.  The primary key of this identity
       * has admin control over the multisig.
       * 
       * multisig -> Option<IdentityId>.
       **/
      adminDid: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityId>>, [AccountId32]>;
      /**
       * Pending join identity authorization proposals.
       * 
       * multisig -> auth id => Option<proposal id>.
       **/
      authToProposalId: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [AccountId32, u64]>;
      /**
       * Proposal execution reentry guard.
       **/
      executionReentry: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The last proposal id before the multisig changed signers or signatures required.
       * 
       * multisig => Option<proposal id>
       **/
      lastInvalidProposal: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u64>>, [AccountId32]>;
      /**
       * Nonce to ensure unique MultiSig addresses are generated; starts from 1.
       **/
      multiSigNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Signers of a multisig. (multisig, signer) => bool.
       **/
      multiSigSigners: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32, AccountId32]>;
      /**
       * Confirmations required before processing a multisig tx.
       **/
      multiSigSignsRequired: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      /**
       * Next proposal id for a multisig.  Starts from 0.
       * 
       * multisig => next proposal id
       **/
      nextProposalId: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      /**
       * Number of approved/accepted signers of a multisig.
       **/
      numberOfSigners: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      /**
       * The multisig's paying identity.  The primary key of this identity
       * pays the transaction/protocal fees of the multisig proposals.
       * 
       * multisig -> Option<IdentityId>.
       **/
      payingDid: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityId>>, [AccountId32]>;
      /**
       * Proposals presented for voting to a multisig.
       * 
       * multisig -> proposal id => Option<Proposal>.
       **/
      proposals: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<Call>>, [AccountId32, u64]>;
      /**
       * The state of a multisig proposal
       * 
       * multisig -> proposal id => Option<ProposalState>.
       **/
      proposalStates: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesMultisigProposalState>>, [AccountId32, u64]>;
      /**
       * The count of approvals/rejections of a multisig proposal.
       * 
       * multisig -> proposal id => Option<ProposalVoteCount>.
       **/
      proposalVoteCounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesMultisigProposalVoteCount>>, [AccountId32, u64]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * The last transaction version, used for `on_runtime_upgrade`.
       **/
      transactionVersion: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Individual multisig signer votes.
       * 
       * (multisig, proposal_id) -> signer => vote.
       **/
      votes: AugmentedQuery<ApiType, (arg1: ITuple<[AccountId32, u64]> | [AccountId32 | string | Uint8Array, u64 | AnyNumber | Uint8Array], arg2: AccountId32 | string | Uint8Array) => Observable<bool>, [ITuple<[AccountId32, u64]>, AccountId32]>;
    };
    nft: {
      /**
       * All collection details for a given collection id.
       **/
      collection: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesNftNftCollection>, [u64]>;
      /**
       * The collection id corresponding to each asset.
       **/
      collectionAsset: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * All mandatory metadata keys for a given collection.
       **/
      collectionKeys: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<BTreeSet<PolymeshPrimitivesAssetMetadataAssetMetadataKey>>, [u64]>;
      /**
       * The last `NFTCollectionId` used for a collection.
       **/
      currentCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * The last `NFTId` used for an NFT.
       **/
      currentNFTId: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [u64]>;
      /**
       * The metadata value of an nft given its collection id, token id and metadata key.
       **/
      metadataValue: AugmentedQuery<ApiType, (arg1: ITuple<[u64, u64]> | [u64 | AnyNumber | Uint8Array, u64 | AnyNumber | Uint8Array], arg2: PolymeshPrimitivesAssetMetadataAssetMetadataKey | { Global: any } | { Local: any } | string | Uint8Array) => Observable<Bytes>, [ITuple<[u64, u64]>, PolymeshPrimitivesAssetMetadataAssetMetadataKey]>;
      /**
       * Tracks the owner of an NFT
       **/
      nftOwner: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityIdPortfolioId>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * The total number of NFTs in a collection.
       **/
      nfTsInCollection: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * The total number of NFTs per identity.
       **/
      numberOfNFTs: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Vec<H256>>, [U8aFixed, Bytes]>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<SpStakingOffenceOffenceDetails>>, [H256]>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * 
       * All reports are sorted by the time of offence.
       * 
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Bytes>, [U8aFixed]>;
    };
    pips: {
      /**
       * Total count of pending or scheduled PIPs.
       **/
      activePipCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The maximum allowed number for active PIPs. Once reached, new PIPs cannot be proposed by community members.
       **/
      activePipLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * All existing PIPs where the proposer is a committee.
       * This list is a cache of all ids in `Proposals` with `Proposer::Committee(_)`.
       **/
      committeePips: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Default enactment period that will be use after a proposal is accepted by GC.
       **/
      defaultEnactmentPeriod: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * All locked [`DepositInfo`] per [`PipId`] for each account.
       **/
      deposits: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletPipsDepositInfo>>, [u32, AccountId32]>;
      /**
       * A live priority queue (lowest priority at index 0)
       * of pending PIPs up to the active limit.
       * Priority is defined by the `weight` in the `SnapshottedPip`.
       * 
       * Unlike `SnapshotQueue`, this queue is live, getting updated with each vote cast.
       * The snapshot is therefore essentially a point-in-time clone of this queue.
       **/
      liveQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletPipsSnapshottedPip>>, []>;
      /**
       * Maximum times a PIP can be skipped before triggering `CannotSkipPip` in `enact_snapshot_results`.
       **/
      maxPipSkipCount: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * The minimum amount to be used as a deposit for community PIP creation.
       **/
      minimumProposalDeposit: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * Number of blocks it will take, after a `Pending` PIP expires, assuming it has not transitioned to another `ProposalState`.
       **/
      pendingPipExpiry: AugmentedQuery<ApiType, () => Observable<PolymeshPrimitivesMaybeBlock>, []>;
      /**
       * All PIPs that still require refunds.
       **/
      pendingRefunds: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<bool>>, [u32]>;
      /**
       * Proposal's identifier.
       **/
      pipIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The number of times a certain PIP has been skipped.
       * Once a (configurable) threshhold is exceeded, a PIP cannot be skipped again.
       **/
      pipSkipCount: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u8>, [u32]>;
      /**
       * Maps PIPs to the block at which they will be executed.
       **/
      pipToSchedule: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]>;
      /**
       * The [`PipsMetadata`] for each proposal ([`PipId`]).
       **/
      proposalMetadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsPipsMetadata>>, [u32]>;
      /**
       * The [`VotingResult`] for each proposal ([`PipId`]).
       **/
      proposalResult: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletPipsVotingResult>, [u32]>;
      /**
       * The [`Pip`] for each proposal ([`PipId`]).
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsPip>>, [u32]>;
      /**
       * The ([`ProposalState`]) of a given PIP ([`PipId`]).
       **/
      proposalStates: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsProposalState>>, [u32]>;
      /**
       * The Votes ([`Vote`]) for each proposal ([`PipId`]) per account.
       **/
      proposalVotes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletPipsVote>>, [u32, AccountId32]>;
      /**
       * Set to `true` if historical PIPs data must be removed.
       **/
      pruneHistoricalPips: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Snaphot's identifier.
       **/
      snapshotIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The [`SnapshotMetadata`].
       **/
      snapshotMeta: AugmentedQuery<ApiType, () => Observable<Option<PalletPipsSnapshotMetadata>>, []>;
      /**
       * The priority queue (lowest priority at index 0) of PIPs at the point of snapshotting.
       * Priority is defined by the `weight` in the `SnapshottedPip`.
       * 
       * A queued PIP can be skipped. Doing so bumps the `pip_skip_count`.
       * Once a (configurable) threshhold is exceeded, a PIP cannot be skipped again.
       **/
      snapshotQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletPipsSnapshottedPip>>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * All PIPs that still require votes to be pruned.
       **/
      votesToBePruned: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<bool>>, [u32]>;
    };
    polymeshCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<ApiType, () => Observable<PolymeshPrimitivesMaybeBlock>, []>;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release cooridinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>, [H256]>;
    };
    polymeshContracts: {
      /**
       * Stores the chain version and code hash for the next chain upgrade.
       **/
      apiNextUpgrade: AugmentedQuery<ApiType, (arg: PolymeshContractsApi | { desc?: any; major?: any } | string | Uint8Array) => Observable<Option<PolymeshContractsNextUpgrade>>, [PolymeshContractsApi]>;
      /**
       * Whitelist of extrinsics allowed to be called from contracts.
       **/
      callRuntimeWhitelist: AugmentedQuery<ApiType, (arg: PolymeshContractsChainExtensionExtrinsicId) => Observable<bool>, [PolymeshContractsChainExtensionExtrinsicId]>;
      /**
       * Stores the code hash for the current api.
       **/
      currentApiHash: AugmentedQuery<ApiType, (arg: PolymeshContractsApi | { desc?: any; major?: any } | string | Uint8Array) => Observable<Option<PolymeshContractsApiCodeHash>>, [PolymeshContractsApi]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    portfolio: {
      /**
       * Custodians allowed to create and take custody of portfolios on an id's behalf.
       **/
      allowedCustodians: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]>;
      /**
       * Inverse map of `Portfolios` used to ensure bijectivitiy,
       * and uniqueness of names in `Portfolios`.
       **/
      nameToNumber: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<u64>>, [PolymeshPrimitivesIdentityId, Bytes]>;
      /**
       * The next portfolio sequence number of an identity.
       **/
      nextPortfolioNumber: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesIdentityId]>;
      /**
       * The asset balances of portfolios.
       **/
      portfolioAssetBalances: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u128>, [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * How many assets with non-zero balance this portfolio contains.
       **/
      portfolioAssetCount: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesIdentityIdPortfolioId]>;
      /**
       * The custodian of a particular portfolio. None implies that the identity owner is the custodian.
       **/
      portfolioCustodian: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityId>>, [PolymeshPrimitivesIdentityIdPortfolioId]>;
      /**
       * Amount of assets locked in a portfolio.
       * These assets show up in portfolio balance but can not be transferred away.
       **/
      portfolioLockedAssets: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u128>, [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * All locked nft for a given portfolio.
       **/
      portfolioLockedNFT: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: ITuple<[PolymeshPrimitivesAssetAssetId, u64]> | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<bool>, [PolymeshPrimitivesIdentityIdPortfolioId, ITuple<[PolymeshPrimitivesAssetAssetId, u64]>]>;
      /**
       * The nft associated to the portfolio.
       **/
      portfolioNFT: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: ITuple<[PolymeshPrimitivesAssetAssetId, u64]> | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<bool>, [PolymeshPrimitivesIdentityIdPortfolioId, ITuple<[PolymeshPrimitivesAssetAssetId, u64]>]>;
      /**
       * The set of existing portfolios with their names. If a certain pair of a DID and
       * portfolio number maps to `None` then such a portfolio doesn't exist. Conversely, if a
       * pair maps to `Some(name)` then such a portfolio exists and is called `name`.
       **/
      portfolios: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * Tracks all the portfolios in custody of a particular identity. Only used by the UIs.
       * When `true` is stored as the value for a given `(did, pid)`, it means that `pid` is in custody of `did`.
       * `false` values are never explicitly stored in the map, and are instead inferred by the absence of a key.
       **/
      portfoliosInCustody: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId]>;
      /**
       * All portfolios that don't need to affirm the receivement of a given [`AssetId`].
       **/
      preApprovedPortfolios: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    preimage: {
      preimageFor: AugmentedQuery<ApiType, (arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Bytes>>, [ITuple<[H256, u32]>]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]>;
    };
    protocolFee: {
      /**
       * The mapping of operation names to the base fees of those operations.
       **/
      baseFees: AugmentedQuery<ApiType, (arg: PolymeshCommonUtilitiesProtocolFeeProtocolOp | 'AssetRegisterTicker' | 'AssetIssue' | 'AssetAddDocuments' | 'AssetCreateAsset' | 'CheckpointCreateSchedule' | 'ComplianceManagerAddComplianceRequirement' | 'IdentityCddRegisterDid' | 'IdentityAddClaim' | 'IdentityAddSecondaryKeysWithAuthorization' | 'PipsPropose' | 'ContractsPutCode' | 'CorporateBallotAttachBallot' | 'CapitalDistributionDistribute' | 'NFTCreateCollection' | 'NFTMint' | 'IdentityCreateChildIdentity' | number | Uint8Array) => Observable<u128>, [PolymeshCommonUtilitiesProtocolFeeProtocolOp]>;
      /**
       * The fee coefficient as a positive rational (numerator, denominator).
       **/
      coefficient: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    relayer: {
      /**
       * The subsidy for a `user_key` if they are being subsidised,
       * as a map `user_key` => `Subsidy`.
       * 
       * A key can only have one subsidy at a time.  To change subsidisers
       * a key needs to call `remove_paying_key` to remove the current subsidy,
       * before they can accept a new subsidiser.
       **/
      subsidies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletRelayerSubsidy>>, [AccountId32]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>, [u32]>;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       * 
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [U8aFixed]>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PolymeshRuntimeDevelopRuntimeSessionKeys>>, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, PolymeshRuntimeDevelopRuntimeSessionKeys]>>>, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
    };
    settlement: {
      /**
       * Tracks affirmations received for an instruction. (instruction_id, counter_party) -> AffirmationStatus
       **/
      affirmsReceived: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>, [u64, PolymeshPrimitivesIdentityIdPortfolioId]>;
      /**
       * Free-form text about a venue. venue_id -> `VenueDetails`
       * Only needed for the UI.
       **/
      details: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Bytes>, [u64]>;
      /**
       * Number of affirmations pending before instruction is executed. instruction_id -> affirm_pending
       **/
      instructionAffirmsPending: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]>;
      /**
       * Number of instructions in the system (It's one more than the actual number)
       **/
      instructionCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Details about an instruction. instruction_id -> instruction_details
       **/
      instructionDetails: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementInstruction>, [u64]>;
      /**
       * Legs under an instruction. (instruction_id, leg_id) -> Leg
       **/
      instructionLegs: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesSettlementLeg>>, [u64, u64]>;
      /**
       * Status of a leg under an instruction. (instruction_id, leg_id) -> LegStatus
       **/
      instructionLegStatus: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementLegStatus>, [u64, u64]>;
      /**
       * The status for the mediators affirmation.
       **/
      instructionMediatorsAffirmations: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<PolymeshPrimitivesSettlementMediatorAffirmationStatus>, [u64, PolymeshPrimitivesIdentityId]>;
      /**
       * Instruction memo
       **/
      instructionMemos: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesMemo>>, [u64]>;
      /**
       * Instruction statuses. instruction_id -> InstructionStatus
       **/
      instructionStatuses: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementInstructionStatus>, [u64]>;
      /**
       * Tracks the number of signers each venue has.
       **/
      numberOfVenueSigners: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u32>, [u64]>;
      /**
       * Tracks the affirmation status for offchain legs in a instruction. [`(InstructionId, LegId)`] -> [`AffirmationStatus`]
       **/
      offChainAffirmations: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>, [u64, u64]>;
      /**
       * Tracks redemption of receipts. (signer, receipt_uid) -> receipt_used
       **/
      receiptsUsed: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<bool>, [AccountId32, u64]>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Helps a user track their pending instructions and affirmations (only needed for UI).
       * (counter_party, instruction_id) -> AffirmationStatus
       **/
      userAffirmations: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityIdPortfolioId | { did?: any; kind?: any } | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>, [PolymeshPrimitivesIdentityIdPortfolioId, u64]>;
      /**
       * Venues create by an identity.
       * Only needed for the UI.
       * 
       * identity -> venue_id -> ()
       **/
      userVenues: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesIdentityId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Null>, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * Venues that are allowed to create instructions involving a particular asset. Only used if filtering is enabled.
       * ([`AssetId`], venue_id) -> allowed
       **/
      venueAllowList: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<bool>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Number of venues in the system (It's one more than the actual number)
       **/
      venueCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Tracks if a token has enabled filtering venues that can create instructions involving their token. AssetId -> filtering_enabled
       **/
      venueFiltering: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Info about a venue. venue_id -> venue
       **/
      venueInfo: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesSettlementVenue>>, [u64]>;
      /**
       * Instructions under a venue.
       * Only needed for the UI.
       * 
       * venue_id -> instruction_id -> ()
       **/
      venueInstructions: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Null>, [u64, u64]>;
      /**
       * Signers allowed by the venue. (venue_id, signer) -> bool
       **/
      venueSigners: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<bool>, [u64, AccountId32]>;
    };
    staking: {
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era being currently rewarded. Validator set of this era must be
       * equal to [`SessionInterface::validators`].
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<PalletStakingActiveEraInfo>>, []>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [AccountId32]>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       * 
       * Must contains information for eras for the range:
       * `[active_era - bounding_duration; active_era]`
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * The threshold for when users can start calling `chill_other` for other validators /
       * nominators. The threshold is compared to the actual number of validators / nominators
       * (`CountFor*`) in the system compared to the configured max (`Max*Count`).
       **/
      chillThreshold: AugmentedQuery<ApiType, () => Observable<Option<Percent>>, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForNominators: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForValidators: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The last planned session scheduled by the session pallet.
       * 
       * This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
       **/
      currentPlannedSession: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Rewards for the last `HISTORY_DEPTH` eras.
       * If reward hasn't been set or has been removed then 0 reward is returned.
       **/
      erasRewardPoints: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletStakingEraRewardPoints>, [u32]>;
      /**
       * Exposure of validator at era.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingExposure>, [u32, AccountId32]>;
      /**
       * Clipped Exposure of validator at era.
       * 
       * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
       * `T::MaxNominatorRewardedPerValidator` biggest stakers.
       * (Note: the field `total` and `own` of the exposure remains unchanged).
       * This is used to limit the i/o cost for the nominator payout.
       * 
       * This is keyed fist by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakersClipped: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingExposure>, [u32, AccountId32]>;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       * 
       * Note: This tracks the starting session (i.e. session index when era start being active)
       * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]>;
      /**
       * The total amount staked for the last `HISTORY_DEPTH` eras.
       * If total hasn't been set or has been removed then 0 stake is returned.
       **/
      erasTotalStake: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]>;
      /**
       * Similar to `ErasStakers`, this holds the preferences of validators.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       **/
      erasValidatorPrefs: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [u32, AccountId32]>;
      /**
       * The total validator era payout for the last `HISTORY_DEPTH` eras.
       * 
       * Eras that haven't finished yet or has been removed doesn't have reward.
       **/
      erasValidatorReward: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u32]>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<PalletStakingForcing>, []>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingStakingLedger>>, [AccountId32]>;
      /**
       * The maximum nominator count before we stop allowing new validators to join.
       * 
       * When this value is not set, no limits are enforced.
       **/
      maxNominatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The maximum validator count before we stop allowing new validators to join.
       * 
       * When this value is not set, no limits are enforced.
       **/
      maxValidatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The minimum amount of commission that validators can set.
       * 
       * If set to `0`, no limit exists.
       **/
      minCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * The minimum active nominator stake of the last successful election.
       **/
      minimumActiveStake: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The minimum active bond to become and maintain the role of a nominator.
       **/
      minNominatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * The minimum active bond to become and maintain the role of a validator.
       **/
      minValidatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * The map from nominator stash key to their nomination preferences, namely the validators that
       * they wish to support.
       * 
       * Note that the keys of this storage map might become non-decodable in case the
       * [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
       * are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
       * indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
       * nominators will effectively not-exist, until they re-submit their preferences such that it
       * is within the bounds of the newly set `Config::MaxNominations`.
       * 
       * This implies that `::iter_keys().count()` and `::iter().count()` might return different
       * values for this map. Moreover, the main `::count()` is aligned with the former, namely the
       * number of keys that exist.
       * 
       * Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
       * [`Call::chill_other`] dispatchable by anyone.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingNominations>>, [AccountId32]>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [u32, AccountId32]>;
      /**
       * Indices of validators that have offended in the active era and whether they are currently
       * disabled.
       * 
       * This value should be a superset of disabled validators since not all offences lead to the
       * validator being disabled (if there was no slash). This is needed to track the percentage of
       * validators that have offended in the current era, ensuring a new era is forced if
       * `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
       * whether a given validator has previously offended using binary search. It gets cleared when
       * the era ends.
       **/
      offendingValidators: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, bool]>>>, []>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingRewardDestination>, [AccountId32]>;
      /**
       * Entities that are allowed to run operator/validator nodes.
       **/
      permissionedIdentity: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<Option<PalletStakingPermissionedIdentityPrefs>>, [PolymeshPrimitivesIdentityId]>;
      polymeshStorageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Slashing switch for validators & Nominators.
       **/
      slashingAllowedFor: AugmentedQuery<ApiType, () => Observable<PalletStakingSlashingSwitch>, []>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingSlashingSlashingSpans>>, [AccountId32]>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * 
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<PalletStakingSlashingSpanRecord>, [ITuple<[AccountId32, u32]>]>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletStakingUnappliedSlash>>, [u32]>;
      /**
       * Allows flexibility in commission. Every validator has commission that should be in the range [0, Cap].
       **/
      validatorCommissionCap: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * The ideal number of active validators.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [AccountId32]>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[Perbill, u128]>>>, [u32, AccountId32]>;
    };
    statistics: {
      /**
       * Maps a set of [`StatType`] for each [`AssetId`].
       **/
      activeAssetStats: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<BTreeSet<PolymeshPrimitivesStatisticsStatType>>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Asset stats.
       **/
      assetStats: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesStatisticsStat1stKey | { assetId?: any; statType?: any } | string | Uint8Array, arg2: PolymeshPrimitivesStatisticsStat2ndKey | { NoClaimStat: any } | { Claim: any } | string | Uint8Array) => Observable<u128>, [PolymeshPrimitivesStatisticsStat1stKey, PolymeshPrimitivesStatisticsStat2ndKey]>;
      /**
       * The [`AssetTransferCompliance`] for each [`AssetId`].
       **/
      assetTransferCompliances: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<PolymeshPrimitivesTransferComplianceAssetTransferCompliance>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Storage migration version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Entities exempt from a Transfer Compliance rule.
       **/
      transferConditionExemptEntities: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesTransferComplianceTransferConditionExemptKey | { assetId?: any; op?: any; claimType?: any } | string | Uint8Array, arg2: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>, [PolymeshPrimitivesTransferComplianceTransferConditionExemptKey, PolymeshPrimitivesIdentityId]>;
    };
    sto: {
      /**
       * Total fundraisers created for a token.
       **/
      fundraiserCount: AugmentedQuery<ApiType, (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Name for the Fundraiser. Only used offchain.
       * (AssetId, fundraiser_id) -> Fundraiser name
       **/
      fundraiserNames: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * All fundraisers that are currently running.
       * (AssetId, fundraiser_id) -> Fundraiser
       **/
      fundraisers: AugmentedQuery<ApiType, (arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletStoFundraiser>>, [PolymeshPrimitivesAssetAssetId, u64]>;
      /**
       * Storage migration version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<ApiType, () => Observable<PolymeshPrimitivesMaybeBlock>, []>;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release cooridinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>, [H256]>;
    };
    technicalCommitteeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesGroupInactiveMember>>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []>;
    };
    upgradeCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<ApiType, () => Observable<PolymeshPrimitivesMaybeBlock>, []>;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release cooridinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>, [H256]>;
    };
    upgradeCommitteeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesGroupInactiveMember>>, []>;
    };
    utility: {
      /**
       * Nonce for `relay_tx`.
       * POLYMESH: added.
       **/
      nonces: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
    };
  } // AugmentedQueries
} // declare module
