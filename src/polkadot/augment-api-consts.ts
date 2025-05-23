// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletContractsSchedule, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightToFeeCoefficient, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    asset: {
      /**
       * Max length for the Asset Metadata type name.
       **/
      assetMetadataNameMaxLength: u32 & AugmentedConst<ApiType>;
      /**
       * Max length for the Asset Metadata type definition.
       **/
      assetMetadataTypeDefMaxLength: u32 & AugmentedConst<ApiType>;
      /**
       * Max length for the Asset Metadata value.
       **/
      assetMetadataValueMaxLength: u32 & AugmentedConst<ApiType>;
      /**
       * Max length for the name of an asset.
       **/
      assetNameMaxLength: u32 & AugmentedConst<ApiType>;
      /**
       * Max length of the funding round name.
       **/
      fundingRoundNameMaxLength: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of mediators for an asset.
       **/
      maxAssetMediators: u32 & AugmentedConst<ApiType>;
    };
    babe: {
      /**
       * The amount of time, in slots, that each epoch should last.
       * NOTE: Currently it is not possible to change the epoch duration after
       * the chain has started. Attempting to do so will brick block production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: u64 & AugmentedConst<ApiType>;
      /**
       * Max number of authorities allowed
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
    };
    balances: {
      /**
       * This type is no longer needed but kept for compatibility reasons.
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
    };
    base: {
      /**
       * The maximum length governing `TooLong`.
       * 
       * How lengths are computed to compare against this value is situation based.
       * For example, you could halve it, double it, compute a sum for some tree of strings, etc.
       **/
      maxLen: u32 & AugmentedConst<ApiType>;
    };
    complianceManager: {
      /**
       * The maximum claim reads that are allowed to happen in worst case of a condition resolution
       **/
      maxConditionComplexity: u32 & AugmentedConst<ApiType>;
    };
    contracts: {
      /**
       * The maximum number of contracts that can be pending for deletion.
       * 
       * When a contract is deleted by calling `seal_terminate` it becomes inaccessible
       * immediately, but the deletion of the storage items it has accumulated is performed
       * later. The contract is put into the deletion queue. This defines how many
       * contracts can be queued up at the same time. If that limit is reached `seal_terminate`
       * will fail. The action must be retried in a later block in that case.
       * 
       * The reasons for limiting the queue depth are:
       * 
       * 1. The queue is in storage in order to be persistent between blocks. We want to limit
       * the amount of storage that can be consumed.
       * 2. The queue is stored in a vector and needs to be decoded as a whole when reading
       * it at the end of each block. Longer queues take more weight to decode and hence
       * limit the amount of items that can be deleted per block.
       **/
      deletionQueueDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight that can be consumed per block for lazy trie removal.
       * 
       * The amount of weight that is dedicated per block to work on the deletion queue. Larger
       * values allow more trie keys to be deleted in each block but reduce the amount of
       * weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
       * information about the deletion queue.
       **/
      deletionWeightLimit: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each byte of storage.
       * 
       * # Note
       * 
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each storage item.
       * 
       * # Note
       * 
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerItem: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a contract code in bytes. This limit applies to the instrumented
       * version of the code. Therefore `instantiate_with_code` can fail even when supplying
       * a wasm binary below this maximum size.
       * 
       * The value should be chosen carefully taking into the account the overall memory limit
       * your runtime has, as well as the [maximum allowed callstack
       * depth](#associatedtype.CallStack). Look into the `integrity_test()` for some insights.
       **/
      maxCodeLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of the debug buffer in bytes.
       **/
      maxDebugBufferLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum allowable length in bytes for storage keys.
       **/
      maxStorageKeyLen: u32 & AugmentedConst<ApiType>;
      /**
       * Cost schedule and limits.
       **/
      schedule: PalletContractsSchedule & AugmentedConst<ApiType>;
      /**
       * Make contract callable functions marked as `#[unstable]` available.
       * 
       * Contracts that use `#[unstable]` functions won't be able to be uploaded unless
       * this is set to `true`. This is only meant for testnets and dev nodes in order to
       * experiment with new features.
       * 
       * # Warning
       * 
       * Do **not** set to `true` on productions chains.
       **/
      unsafeUnstableInterface: bool & AugmentedConst<ApiType>;
    };
    corporateAction: {
      /**
       * Max number of per-DID withholding tax overrides.
       **/
      maxDidWhts: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of DID specified in `TargetIdentities`.
       **/
      maxTargetIds: u32 & AugmentedConst<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The minimum amount of improvement to the solution score that defines a solution as
       * "better" in the Signed phase.
       **/
      betterSignedThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * The minimum amount of improvement to the solution score that defines a solution as
       * "better" in the Unsigned phase.
       **/
      betterUnsignedThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * The maximum number of electable targets to put in the snapshot.
       **/
      maxElectableTargets: u16 & AugmentedConst<ApiType>;
      /**
       * The maximum number of electing voters to put in the snapshot. At the moment, snapshots
       * are only over a single block, but once multi-block elections are introduced they will
       * take place over multiple blocks.
       **/
      maxElectingVoters: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of winners that can be elected by this `ElectionProvider`
       * implementation.
       * 
       * Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
       **/
      maxWinners: u32 & AugmentedConst<ApiType>;
      minerMaxLength: u32 & AugmentedConst<ApiType>;
      minerMaxVotesPerVoter: u32 & AugmentedConst<ApiType>;
      minerMaxWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The priority of the unsigned transaction submitted in the unsigned-phase
       **/
      minerTxPriority: u64 & AugmentedConst<ApiType>;
      /**
       * The repeat threshold of the offchain worker.
       * 
       * For example, if it is 5, that means that at least 5 blocks will elapse between attempts
       * to submit the worker's solution.
       **/
      offchainRepeat: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit for a signed solution.
       **/
      signedDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Per-byte deposit for a signed solution.
       **/
      signedDepositByte: u128 & AugmentedConst<ApiType>;
      /**
       * Per-weight deposit for a signed solution.
       **/
      signedDepositWeight: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of unchecked solutions to refund the call fee for.
       **/
      signedMaxRefunds: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of signed submissions that can be queued.
       * 
       * It is best to avoid adjusting this during an election, as it impacts downstream data
       * structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
       * update this value during an election, you _must_ ensure that
       * `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
       * attempts to submit new solutions may cause a runtime panic.
       **/
      signedMaxSubmissions: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum weight of a signed solution.
       * 
       * If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
       * this pallet), then [`MinerConfig::solution_weight`] is used to compare against
       * this value.
       **/
      signedMaxWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Duration of the signed phase.
       **/
      signedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * Base reward for a signed solution
       **/
      signedRewardBase: u128 & AugmentedConst<ApiType>;
      /**
       * Duration of the unsigned phase.
       **/
      unsignedPhase: u32 & AugmentedConst<ApiType>;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to keep in the set id to session index mapping.
       * 
       * Since the `SetIdSession` map is only used for validating equivocations this
       * value should relate to the bonding duration of whatever staking system is
       * being used (if any). If equivocation handling is not enabled then this value
       * can be zero.
       **/
      maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
    };
    identity: {
      /**
       * POLYX given to primary keys of all new Identities
       **/
      initialPOLYX: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of authorizations an identity can give.
       **/
      maxGivenAuths: u32 & AugmentedConst<ApiType>;
    };
    imOnline: {
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple pallets send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
    };
    multiSig: {
      /**
       * Maximum number of signers that can be added/removed in one call.
       **/
      maxSigners: u32 & AugmentedConst<ApiType>;
    };
    nft: {
      maxNumberOfCollectionKeys: u8 & AugmentedConst<ApiType>;
      maxNumberOfNFTsCount: u32 & AugmentedConst<ApiType>;
    };
    pips: {
      /**
       * The maximum number of votes that can be pruned at once.
       **/
      maxRefundsAndVotesPruned: u32 & AugmentedConst<ApiType>;
    };
    portfolio: {
      /**
       * Maximum number of fungible assets that can be moved in a single transfer call.
       **/
      maxNumberOfFungibleMoves: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of NFTs that can be moved in a single transfer call.
       **/
      maxNumberOfNFTsMoves: u32 & AugmentedConst<ApiType>;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
    };
    settlement: {
      /**
       * Maximum number mediators in the instruction level (this does not include asset mediators).
       **/
      maxInstructionMediators: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of fungible assets that can be in a single instruction.
       **/
      maxNumberOfFungibleAssets: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of NFTs that can be transferred in a instruction.
       **/
      maxNumberOfNFTs: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of NFTs that can be transferred in a leg.
       **/
      maxNumberOfNFTsPerLeg: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of off-chain assets that can be transferred in a instruction.
       **/
      maxNumberOfOffChainAssets: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of portfolios.
       **/
      maxNumberOfPortfolios: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of venue signers.
       **/
      maxNumberOfVenueSigners: u32 & AugmentedConst<ApiType>;
    };
    staking: {
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Yearly total reward amount that gets distributed when fixed rewards kicks in.
       **/
      fixedYearlyReward: u128 & AugmentedConst<ApiType>;
      /**
       * Number of eras to keep in history.
       * 
       * Following information is kept for eras in `[current_era -
       * HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
       * `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
       * `ErasTotalStake`, `ErasStartSessionIndex`,
       * `StakingLedger.claimed_rewards`.
       * 
       * Must be more than the number of eras delayed by session.
       * I.e. active era must always be in history. I.e. `active_era >
       * current_era - history_depth` must be guaranteed.
       * 
       * If migrating an existing pallet from storage value to config value,
       * this should be set to same value or greater as in storage.
       * 
       * Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
       * item `StakingLedger.claimed_rewards`. Setting this value lower than
       * the existing value can lead to inconsistencies in the
       * `StakingLedger` and will need to be handled properly in a migration.
       * The test `reducing_history_depth_abrupt` shows this effect.
       **/
      historyDepth: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of nominations per nominator.
       **/
      maxNominations: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators rewarded for each validator.
       * 
       * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
       * claim their reward. This used to limit the i/o cost for the nominator payout.
       **/
      maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of `unlocking` chunks a [`StakingLedger`] can
       * have. Effectively determines how many unique eras a staker may be
       * unbonding in.
       * 
       * Note: `MaxUnlockingChunks` is used as the upper bound for the
       * `BoundedVec` item `StakingLedger.unlocking`. Setting this value
       * lower than the existing value can lead to inconsistencies in the
       * `StakingLedger` and will need to be handled properly in a runtime
       * migration. The test `reducing_max_unlocking_chunks_abrupt` shows
       * this effect.
       **/
      maxUnlockingChunks: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of validators that can run by an identity.
       * It will be MaxValidatorPerIdentity * Self::validator_count().
       **/
      maxValidatorPerIdentity: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of total issuance after which fixed rewards kicks in.
       **/
      maxVariableInflationTotalIssuance: u128 & AugmentedConst<ApiType>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: u32 & AugmentedConst<ApiType>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration. Set to 0 if slashes
       * should be applied immediately, without opportunity for intervention.
       **/
      slashDeferDuration: u32 & AugmentedConst<ApiType>;
    };
    statistics: {
      /**
       * Maximum stats that can be enabled for an Asset.
       **/
      maxStatsPerAsset: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum transfer conditions that can be enabled for an Asset.
       **/
      maxTransferConditionsPerAsset: u32 & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFeeConst: Vec<SpWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
    };
  } // AugmentedConsts
} // declare module
