// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    asset: {
      /**
       * The token is already frozen.
       **/
      AlreadyFrozen: AugmentedError<ApiType>;
      /**
       * The token has already been created.
       **/
      AssetAlreadyCreated: AugmentedError<ApiType>;
      /**
       * The token is already divisible.
       **/
      AssetAlreadyDivisible: AugmentedError<ApiType>;
      /**
       * An unexpected error when generating a new asset ID.
       **/
      AssetIdGenerationError: AugmentedError<ApiType>;
      /**
       * The given asset is already linked to a ticker.
       **/
      AssetIsAlreadyLinkedToATicker: AugmentedError<ApiType>;
      /**
       * Asset Metadata Global type already exists.
       **/
      AssetMetadataGlobalKeyAlreadyExists: AugmentedError<ApiType>;
      /**
       * Attempt to delete a key that is needed for an NFT collection.
       **/
      AssetMetadataKeyBelongsToNFTCollection: AugmentedError<ApiType>;
      /**
       * Asset Metadata key is missing.
       **/
      AssetMetadataKeyIsMissing: AugmentedError<ApiType>;
      /**
       * Asset Metadata Local type already exists for asset.
       **/
      AssetMetadataLocalKeyAlreadyExists: AugmentedError<ApiType>;
      /**
       * Maximum length of the asset metadata type name has been exceeded.
       **/
      AssetMetadataNameMaxLengthExceeded: AugmentedError<ApiType>;
      /**
       * Maximum length of the asset metadata type definition has been exceeded.
       **/
      AssetMetadataTypeDefMaxLengthExceeded: AugmentedError<ApiType>;
      /**
       * Attempt to lock a metadata value that is empty.
       **/
      AssetMetadataValueIsEmpty: AugmentedError<ApiType>;
      /**
       * Asset Metadata value is locked.
       **/
      AssetMetadataValueIsLocked: AugmentedError<ApiType>;
      /**
       * Maximum length of the asset metadata value has been exceeded.
       **/
      AssetMetadataValueMaxLengthExceeded: AugmentedError<ApiType>;
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * An overflow while calculating the balance.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * Maximum length of the funding round name has been exceeded.
       **/
      FundingRoundNameMaxLengthExceeded: AugmentedError<ApiType>;
      /**
       * Attempt to update the type of a non fungible token to a fungible token or the other way around.
       **/
      IncompatibleAssetTypeUpdate: AugmentedError<ApiType>;
      /**
       * The sender balance is not sufficient.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Some `AssetIdentifier` was invalid.
       **/
      InvalidAssetIdentifier: AugmentedError<ApiType>;
      /**
       * Invalid `CustomAssetTypeId`.
       **/
      InvalidCustomAssetTypeId: AugmentedError<ApiType>;
      /**
       * An invalid Ethereum `EcdsaSignature`.
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * An invalid granularity.
       **/
      InvalidGranularity: AugmentedError<ApiType>;
      /**
       * Invalid ticker character - valid set: A`..`Z` `0`..`9` `_` `-` `.` `/`.
       **/
      InvalidTickerCharacter: AugmentedError<ApiType>;
      /**
       * Transfer validation check failed.
       **/
      InvalidTransfer: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - compliance failed.
       **/
      InvalidTransferComplianceFailure: AugmentedError<ApiType>;
      /**
       * Failed to transfer the asset - asset is frozen.
       **/
      InvalidTransferFrozenAsset: AugmentedError<ApiType>;
      /**
       * Failed to transfer the asset - receiver cdd is not valid.
       **/
      InvalidTransferInvalidReceiverCDD: AugmentedError<ApiType>;
      /**
       * Failed to transfer the asset - sender cdd is not valid.
       **/
      InvalidTransferInvalidSenderCDD: AugmentedError<ApiType>;
      /**
       * Investor Uniqueness claims are not allowed for this asset.
       **/
      InvestorUniquenessClaimNotAllowed: AugmentedError<ApiType>;
      /**
       * Maximum length of asset name has been exceeded.
       **/
      MaxLengthOfAssetNameExceeded: AugmentedError<ApiType>;
      /**
       * No token associated to the given asset ID.
       **/
      NoSuchAsset: AugmentedError<ApiType>;
      /**
       * The given Document does not exist.
       **/
      NoSuchDoc: AugmentedError<ApiType>;
      /**
       * Not an owner of the token on Ethereum.
       **/
      NotAnOwner: AugmentedError<ApiType>;
      /**
       * The asset must be frozen.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * Number of asset mediators would exceed the maximum allowed.
       **/
      NumberOfAssetMediatorsExceeded: AugmentedError<ApiType>;
      /**
       * Transfers to self are not allowed
       **/
      SenderSameAsReceiver: AugmentedError<ApiType>;
      /**
       * The ticker is already registered to someone else.
       **/
      TickerAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Tickers should start with at least one valid byte.
       **/
      TickerFirstByteNotValid: AugmentedError<ApiType>;
      /**
       * The given ticker is already linked to an asset.
       **/
      TickerIsAlreadyLinkedToAnAsset: AugmentedError<ApiType>;
      /**
       * The given ticker is not linked to the given asset.
       **/
      TickerIsNotLinkedToTheAsset: AugmentedError<ApiType>;
      /**
       * The ticker has non-alphanumeric parts.
       **/
      TickerNotAlphanumeric: AugmentedError<ApiType>;
      /**
       * The ticker doesn't belong to the caller.
       **/
      TickerNotRegisteredToCaller: AugmentedError<ApiType>;
      /**
       * Registration of ticker has expired.
       **/
      TickerRegistrationExpired: AugmentedError<ApiType>;
      /**
       * The ticker registration associated to the ticker was not found.
       **/
      TickerRegistrationNotFound: AugmentedError<ApiType>;
      /**
       * The ticker length is over the limit.
       **/
      TickerTooLong: AugmentedError<ApiType>;
      /**
       * The total supply is above the limit.
       **/
      TotalSupplyAboveLimit: AugmentedError<ApiType>;
      /**
       * An overflow while calculating the total supply.
       **/
      TotalSupplyOverflow: AugmentedError<ApiType>;
      /**
       * The user is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Attempt to call an extrinsic that is only permitted for fungible tokens.
       **/
      UnexpectedNonFungibleToken: AugmentedError<ApiType>;
    };
    babe: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * Submitted configuration is invalid.
       **/
      InvalidConfiguration: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Receiver does not have a valid CDD
       **/
      ReceiverCddMissing: AugmentedError<ApiType>;
    };
    base: {
      /**
       * The sequence counter for something overflowed.
       * 
       * When this happens depends on e.g., the capacity of the identifier type.
       * For example, we might have `pub struct PipId(u32);`, with `u32::MAX` capacity.
       * In practice, these errors will never happen but no code path should result in a panic,
       * so these corner cases need to be covered with an error variant.
       **/
      CounterOverflow: AugmentedError<ApiType>;
      /**
       * Exceeded a generic length limit.
       * The limit could be for any sort of lists of things, including a string.
       **/
      TooLong: AugmentedError<ApiType>;
    };
    capitalDistribution: {
      /**
       * A distribution already exists for this CA.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * DID who created the distribution already did reclaim.
       **/
      AlreadyReclaimed: AugmentedError<ApiType>;
      /**
       * Multiplication of the balance with the per share payout amount overflowed.
       **/
      BalancePerShareProductOverflowed: AugmentedError<ApiType>;
      /**
       * Distribution's expiry has passed. DID cannot claim anymore and has forfeited the benefits.
       **/
      CannotClaimAfterExpiry: AugmentedError<ApiType>;
      /**
       * Distribution allotment cannot be claimed as the current time is before start-of-payment.
       **/
      CannotClaimBeforeStart: AugmentedError<ApiType>;
      /**
       * A capital distribution was made for a non-benefit CA.
       **/
      CANotBenefit: AugmentedError<ApiType>;
      /**
       * Distribution `amount` cannot be zero.
       **/
      DistributionAmountIsZero: AugmentedError<ApiType>;
      /**
       * Distribution `per_share` cannot be zero.
       **/
      DistributionPerShareIsZero: AugmentedError<ApiType>;
      /**
       * A distribution has been activated, as `payment_at <= now` holds.
       **/
      DistributionStarted: AugmentedError<ApiType>;
      /**
       * A distributions provided expiry date was strictly before its payment date.
       * In other words, everything to distribute would immediately be forfeited.
       **/
      ExpiryBeforePayment: AugmentedError<ApiType>;
      /**
       * The token holder has already been paid their benefit.
       **/
      HolderAlreadyPaid: AugmentedError<ApiType>;
      /**
       * A distribution has insufficient remaining amount of currency to distribute.
       **/
      InsufficientRemainingAmount: AugmentedError<ApiType>;
      /**
       * A capital distribution doesn't exist for this CA.
       **/
      NoSuchDistribution: AugmentedError<ApiType>;
      /**
       * DID is not the one who created the distribution.
       **/
      NotDistributionCreator: AugmentedError<ApiType>;
      /**
       * Distribution had not expired yet, or there's no expiry date.
       **/
      NotExpired: AugmentedError<ApiType>;
    };
    cddServiceProviders: {
      /**
       * The limit for the number of concurrent active members for this group has been exceeded.
       **/
      ActiveMembersLimitExceeded: AugmentedError<ApiType>;
      /**
       * Active member limit was greater than maximum committee members limit.
       **/
      ActiveMembersLimitOverflow: AugmentedError<ApiType>;
      /**
       * Group member was added already.
       **/
      DuplicateMember: AugmentedError<ApiType>;
      /**
       * Last member of the committee can not quit.
       **/
      LastMemberCannotQuit: AugmentedError<ApiType>;
      /**
       * Can't remove a member that doesn't exist.
       **/
      NoSuchMember: AugmentedError<ApiType>;
      /**
       * Only primary key of the identity is allowed.
       **/
      OnlyPrimaryKeyAllowed: AugmentedError<ApiType>;
    };
    checkpoint: {
      /**
       * A checkpoint schedule does not exist for the asset.
       **/
      NoSuchSchedule: AugmentedError<ApiType>;
      /**
       * The schedule has no more checkpoints.
       **/
      ScheduleFinished: AugmentedError<ApiType>;
      /**
       * The schedule has expired checkpoints.
       **/
      ScheduleHasExpiredCheckpoints: AugmentedError<ApiType>;
      /**
       * Can't create an empty schedule.
       **/
      ScheduleIsEmpty: AugmentedError<ApiType>;
      /**
       * A checkpoint schedule is not removable as `ref_count(schedule_id) > 0`.
       **/
      ScheduleNotRemovable: AugmentedError<ApiType>;
      /**
       * The new schedule would put the asset over the maximum complexity allowed.
       **/
      SchedulesOverMaxComplexity: AugmentedError<ApiType>;
    };
    committeeMembership: {
      /**
       * The limit for the number of concurrent active members for this group has been exceeded.
       **/
      ActiveMembersLimitExceeded: AugmentedError<ApiType>;
      /**
       * Active member limit was greater than maximum committee members limit.
       **/
      ActiveMembersLimitOverflow: AugmentedError<ApiType>;
      /**
       * Group member was added already.
       **/
      DuplicateMember: AugmentedError<ApiType>;
      /**
       * Last member of the committee can not quit.
       **/
      LastMemberCannotQuit: AugmentedError<ApiType>;
      /**
       * Can't remove a member that doesn't exist.
       **/
      NoSuchMember: AugmentedError<ApiType>;
      /**
       * Only primary key of the identity is allowed.
       **/
      OnlyPrimaryKeyAllowed: AugmentedError<ApiType>;
    };
    complianceManager: {
      /**
       * The worst case scenario of the compliance requirement is too complex.
       **/
      ComplianceRequirementTooComplex: AugmentedError<ApiType>;
      /**
       * Did not exist.
       **/
      DidNotExist: AugmentedError<ApiType>;
      /**
       * There are duplicate compliance requirements.
       **/
      DuplicateComplianceRequirements: AugmentedError<ApiType>;
      /**
       * Issuer exist but trying to add it again.
       **/
      IncorrectOperationOnTrustedIssuer: AugmentedError<ApiType>;
      /**
       * Compliance requirement id doesn't exist.
       **/
      InvalidComplianceRequirementId: AugmentedError<ApiType>;
      /**
       * User is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The maximum weight limit for executing the function was exceeded.
       **/
      WeightLimitExceeded: AugmentedError<ApiType>;
    };
    contracts: {
      /**
       * Code removal was denied because the code is still in use by at least one contract.
       **/
      CodeInUse: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedError<ApiType>;
      /**
       * The contract's code was found to be invalid during validation or instrumentation.
       * 
       * The most likely cause of this is that an API was used which is not supported by the
       * node. This hapens if an older node is used with a new version of ink!. Try updating
       * your node to the newest available version.
       * 
       * A more detailed error can be found on the node console if debug messages are enabled
       * by supplying `-lruntime::contracts=debug`.
       **/
      CodeRejected: AugmentedError<ApiType>;
      /**
       * The code supplied to `instantiate_with_code` exceeds the limit specified in the
       * current schedule.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * No contract was found at the specified address.
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * The contract ran to completion but decided to revert its storage changes.
       * Please note that this error is only returned from extrinsics. When called directly
       * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
       * to determine whether a reversion has taken place.
       **/
      ContractReverted: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedError<ApiType>;
      /**
       * Removal of a contract failed because the deletion queue is full.
       * 
       * This can happen when calling `seal_terminate`.
       * The queue is filled by deleting contracts and emptied by a fixed amount each block.
       * Trying again during another block is the only way to resolve this issue.
       **/
      DeletionQueueFull: AugmentedError<ApiType>;
      /**
       * A contract with the same AccountId already exists.
       **/
      DuplicateContract: AugmentedError<ApiType>;
      /**
       * An indetermistic code was used in a context where this is not permitted.
       **/
      Indeterministic: AugmentedError<ApiType>;
      /**
       * `seal_call` forwarded this contracts input. It therefore is no longer available.
       **/
      InputForwarded: AugmentedError<ApiType>;
      /**
       * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
       **/
      InvalidCallFlags: AugmentedError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      InvalidScheduleVersion: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The chain does not provide a chain extension. Calling the chain extension results
       * in this error. Note that this usually  shouldn't happen as deploying such contracts
       * is rejected.
       **/
      NoChainExtension: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The subject passed to `seal_random` exceeds the limit.
       **/
      RandomSubjectTooLong: AugmentedError<ApiType>;
      /**
       * A call tried to invoke a contract that is flagged as non-reentrant.
       **/
      ReentranceDenied: AugmentedError<ApiType>;
      /**
       * More storage was created than allowed by the storage deposit limit.
       **/
      StorageDepositLimitExhausted: AugmentedError<ApiType>;
      /**
       * Origin doesn't have enough balance to pay the required storage deposits.
       **/
      StorageDepositNotEnoughFunds: AugmentedError<ApiType>;
      /**
       * A contract self destructed in its constructor.
       * 
       * This can be triggered by a call to `seal_terminate`.
       **/
      TerminatedInConstructor: AugmentedError<ApiType>;
      /**
       * Termination of a contract is not allowed while the contract is already
       * on the call stack. Can be triggered by `seal_terminate`.
       **/
      TerminatedWhileReentrant: AugmentedError<ApiType>;
      /**
       * The amount of topics passed to `seal_deposit_events` exceeds the limit.
       **/
      TooManyTopics: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed. Probably because there isn't enough
       * free balance in the sender's account.
       **/
      TransferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedError<ApiType>;
    };
    corporateAction: {
      /**
       * A CA's declaration date was strictly after its record date.
       **/
      DeclDateAfterRecordDate: AugmentedError<ApiType>;
      /**
       * A CA's declaration date occurs in the future.
       **/
      DeclDateInFuture: AugmentedError<ApiType>;
      /**
       * The `details` of a CA exceeded the max allowed length.
       **/
      DetailsTooLong: AugmentedError<ApiType>;
      /**
       * A withholding tax override for a given DID was specified more than once.
       * The chain refused to make a choice, and hence there was an error.
       **/
      DuplicateDidTax: AugmentedError<ApiType>;
      /**
       * The CA did not have a record date.
       **/
      NoRecordDate: AugmentedError<ApiType>;
      /**
       * A CA with the given `CAId` did not exist.
       **/
      NoSuchCA: AugmentedError<ApiType>;
      /**
       * On CA creation, a checkpoint ID was provided which doesn't exist.
       **/
      NoSuchCheckpointId: AugmentedError<ApiType>;
      /**
       * CA does not target the DID.
       **/
      NotTargetedByCA: AugmentedError<ApiType>;
      /**
       * A CA's record date was strictly after the "start" time,
       * where "start" is context dependent.
       * For example, it could be the start of a ballot, or the start-of-payment in capital distribution.
       **/
      RecordDateAfterStart: AugmentedError<ApiType>;
      /**
       * Too many withholding tax overrides were specified.
       **/
      TooManyDidTaxes: AugmentedError<ApiType>;
      /**
       * Too many identities in `TargetIdentities` were specified.
       **/
      TooManyTargetIds: AugmentedError<ApiType>;
    };
    corporateBallot: {
      /**
       * A corporate ballot already exists for this CA.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * A corporate ballot was made for a non `IssuerNotice` CA.
       **/
      CANotNotice: AugmentedError<ApiType>;
      /**
       * Voting power used by a DID on a motion exceeds that which is available to them.
       **/
      InsufficientVotes: AugmentedError<ApiType>;
      /**
       * A corporate ballot doesn't exist for this CA.
       **/
      NoSuchBallot: AugmentedError<ApiType>;
      /**
       * The RCV fallback of some choice does not exist.
       **/
      NoSuchRCVFallback: AugmentedError<ApiType>;
      /**
       * A corporate ballot's end time was strictly before the current time.
       **/
      NowAfterEnd: AugmentedError<ApiType>;
      /**
       * If some motion in a corporate ballot has more choices than would fit in `u16`.
       **/
      NumberOfChoicesOverflow: AugmentedError<ApiType>;
      /**
       * RCV is not allowed for this ballot.
       **/
      RCVNotAllowed: AugmentedError<ApiType>;
      /**
       * The RCV fallback points to the origin choice.
       **/
      RCVSelfCycle: AugmentedError<ApiType>;
      /**
       * A corporate ballot's start time was strictly after the ballot's end.
       **/
      StartAfterEnd: AugmentedError<ApiType>;
      /**
       * Voting ended already.
       **/
      VotingAlreadyEnded: AugmentedError<ApiType>;
      /**
       * Voting started already. Amending a ballot is no longer possible.
       **/
      VotingAlreadyStarted: AugmentedError<ApiType>;
      /**
       * Voting hasn't started yet.
       **/
      VotingNotStarted: AugmentedError<ApiType>;
      /**
       * Provided list of balances does not match the total number of choices.
       **/
      WrongVoteCount: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * Some bound not met
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The call is not allowed at this point.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * The fallback failed
       **/
      FallbackFailed: AugmentedError<ApiType>;
      /**
       * `Self::insert_submission` returned an invalid index.
       **/
      InvalidSubmissionIndex: AugmentedError<ApiType>;
      /**
       * Snapshot metadata should exist but didn't.
       **/
      MissingSnapshotMetadata: AugmentedError<ApiType>;
      /**
       * OCW submitted solution for wrong round
       **/
      OcwCallWrongEra: AugmentedError<ApiType>;
      /**
       * Submission was too early.
       **/
      PreDispatchEarlySubmission: AugmentedError<ApiType>;
      /**
       * Submission was too weak, score-wise.
       **/
      PreDispatchWeakSubmission: AugmentedError<ApiType>;
      /**
       * Wrong number of winners presented.
       **/
      PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
      /**
       * The origin failed to pay the deposit.
       **/
      SignedCannotPayDeposit: AugmentedError<ApiType>;
      /**
       * Witness data to dispatchable is invalid.
       **/
      SignedInvalidWitness: AugmentedError<ApiType>;
      /**
       * The queue was full, and the solution was not better than any of the existing ones.
       **/
      SignedQueueFull: AugmentedError<ApiType>;
      /**
       * The signed submission consumes too much weight
       **/
      SignedTooMuchWeight: AugmentedError<ApiType>;
      /**
       * Submitted solution has too many winners
       **/
      TooManyWinners: AugmentedError<ApiType>;
    };
    externalAgents: {
      /**
       * The provided `agent` is already an agent for the `AssetId`.
       **/
      AlreadyAnAgent: AugmentedError<ApiType>;
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * An AG with the given `AGId` did not exist for the `AssetId`.
       **/
      NoSuchAG: AugmentedError<ApiType>;
      /**
       * The provided `agent` is not an agent for the `AssetId`.
       **/
      NotAnAgent: AugmentedError<ApiType>;
      /**
       * This agent is the last full one, and it's being removed,
       * making the asset orphaned.
       **/
      RemovingLastFullAgent: AugmentedError<ApiType>;
      /**
       * The caller's secondary key does not have the required asset permission.
       **/
      SecondaryKeyNotAuthorizedForAsset: AugmentedError<ApiType>;
      /**
       * The agent is not authorized to call the current extrinsic.
       **/
      UnauthorizedAgent: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * The account key is being used, it can't be unlinked.
       **/
      AccountKeyIsBeingUsed: AugmentedError<ApiType>;
      /**
       * One secondary or primary key can only belong to one DID
       **/
      AlreadyLinked: AugmentedError<ApiType>;
      /**
       * The offchain authorization has expired.
       **/
      AuthorizationExpired: AugmentedError<ApiType>;
      /**
       * Authorization has been explicitly revoked.
       **/
      AuthorizationHasBeenRevoked: AugmentedError<ApiType>;
      /**
       * Authorizations are not for the same DID.
       **/
      AuthorizationsNotForSameDids: AugmentedError<ApiType>;
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * Cannot convert a `T::AccountId` to `AnySignature::Signer::AccountId`.
       **/
      CannotDecodeSignerAccountId: AugmentedError<ApiType>;
      /**
       * Claim does not exist.
       **/
      ClaimDoesNotExist: AugmentedError<ApiType>;
      /**
       * The custom claim type trying to be registered already exists.
       **/
      CustomClaimTypeAlreadyExists: AugmentedError<ApiType>;
      /**
       * The custom claim type does not exist.
       **/
      CustomClaimTypeDoesNotExist: AugmentedError<ApiType>;
      /**
       * A custom scope is too long.
       * It can at most be `32` characters long.
       **/
      CustomScopeTooLong: AugmentedError<ApiType>;
      /**
       * The DID already exists.
       **/
      DidAlreadyExists: AugmentedError<ApiType>;
      /**
       * The DID does not exist.
       **/
      DidDoesNotExist: AugmentedError<ApiType>;
      /**
       * The DID must already exist.
       **/
      DidMustAlreadyExist: AugmentedError<ApiType>;
      /**
       * The same key was included multiple times.
       **/
      DuplicateKey: AugmentedError<ApiType>;
      /**
       * Maximum number of given authorizations was exceeded.
       **/
      ExceededNumberOfGivenAuths: AugmentedError<ApiType>;
      /**
       * Cannot use Except when specifying extrinsic permissions.
       **/
      ExceptNotAllowedForExtrinsics: AugmentedError<ApiType>;
      /**
       * Couldn't charge fee for the transaction.
       **/
      FailedToChargeFee: AugmentedError<ApiType>;
      /**
       * Account Id cannot be extracted from signer
       **/
      InvalidAccountKey: AugmentedError<ApiType>;
      /**
       * Auth identified by an `auth_id` for a given `target` does not exist.
       * The `target` might be wrong or the `auth_id` was never created at all.
       **/
      InvalidAuthorization: AugmentedError<ApiType>;
      /**
       * An invalid authorization from the CDD provider.
       **/
      InvalidAuthorizationFromCddProvider: AugmentedError<ApiType>;
      /**
       * An invalid authorization from the owner.
       **/
      InvalidAuthorizationFromOwner: AugmentedError<ApiType>;
      /**
       * An invalid authorization signature.
       **/
      InvalidAuthorizationSignature: AugmentedError<ApiType>;
      /**
       * Identity is already a child of an other identity, can't create grand-child identity.
       **/
      IsChildIdentity: AugmentedError<ApiType>;
      /**
       * This key is not allowed to execute a given operation.
       **/
      KeyNotAllowed: AugmentedError<ApiType>;
      /**
       * Caller is missing an identity.
       **/
      MissingIdentity: AugmentedError<ApiType>;
      /**
       * The Identity doesn't have a parent identity.
       **/
      NoParentIdentity: AugmentedError<ApiType>;
      /**
       * Signer is not a secondary key of the provided identity
       **/
      NotASigner: AugmentedError<ApiType>;
      /**
       * Attestation was not by a CDD service provider.
       **/
      NotCddProviderAttestation: AugmentedError<ApiType>;
      /**
       * The caller is not the parent or child identity.
       **/
      NotParentOrChildIdentity: AugmentedError<ApiType>;
      /**
       * Only the primary key is allowed to revoke an Identity Signatory off-chain authorization.
       **/
      NotPrimaryKey: AugmentedError<ApiType>;
      /**
       * The secondary keys contain the primary key.
       **/
      SecondaryKeysContainPrimaryKey: AugmentedError<ApiType>;
      /**
       * The target DID has no valid CDD.
       **/
      TargetHasNoCdd: AugmentedError<ApiType>;
      /**
       * Signatory is not pre authorized by the identity
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Only CDD service providers are allowed.
       **/
      UnAuthorizedCddProvider: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
    };
    indices: {
      /**
       * The index was not available.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The index was not already assigned.
       **/
      NotAssigned: AugmentedError<ApiType>;
      /**
       * The index is assigned to another account.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The source and destination accounts are identical.
       **/
      NotTransfer: AugmentedError<ApiType>;
      /**
       * The index is permanent and may not be freed/changed.
       **/
      Permanent: AugmentedError<ApiType>;
    };
    multiSig: {
      /**
       * Multisig has no admin.
       **/
      AdminNotFound: AugmentedError<ApiType>;
      /**
       * Already a signer.
       **/
      AlreadyASigner: AugmentedError<ApiType>;
      /**
       * Already voted.
       **/
      AlreadyVoted: AugmentedError<ApiType>;
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * Changing multisig parameters not allowed since multisig is a primary key.
       **/
      ChangeNotAllowed: AugmentedError<ApiType>;
      /**
       * Multisig address.
       **/
      DecodingError: AugmentedError<ApiType>;
      /**
       * Identity provided is not the multisig's admin.
       **/
      IdentityNotAdmin: AugmentedError<ApiType>;
      /**
       * Identity provided is not the multisig's payer.
       **/
      IdentityNotPayer: AugmentedError<ApiType>;
      /**
       * The proposal has been invalidated after a multisg update.
       **/
      InvalidatedProposal: AugmentedError<ApiType>;
      /**
       * Expiry must be in the future.
       **/
      InvalidExpiryDate: AugmentedError<ApiType>;
      /**
       * Max weight not enough to execute proposal.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Multisig is not attached to an identity
       **/
      MultisigMissingIdentity: AugmentedError<ApiType>;
      /**
       * A multisig can't be a signer of another multisig.
       **/
      NestingNotAllowed: AugmentedError<ApiType>;
      /**
       * A nonce overflow.
       **/
      NonceOverflow: AugmentedError<ApiType>;
      /**
       * Multisig doesn't have a paying DID.
       **/
      NoPayingDid: AugmentedError<ApiType>;
      /**
       * No such multisig.
       **/
      NoSuchMultisig: AugmentedError<ApiType>;
      /**
       * Not a signer.
       **/
      NotASigner: AugmentedError<ApiType>;
      /**
       * Not enough signers.  The number of signers has to be greater then or equal to
       * the required number of signers to approve proposals.
       **/
      NotEnoughSigners: AugmentedError<ApiType>;
      /**
       * Proposal was executed earlier
       **/
      ProposalAlreadyExecuted: AugmentedError<ApiType>;
      /**
       * Proposal was rejected earlier
       **/
      ProposalAlreadyRejected: AugmentedError<ApiType>;
      /**
       * Proposal has expired
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * The proposal does not exist.
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Required number of signers must be greater then zero.
       **/
      RequiredSignersIsZero: AugmentedError<ApiType>;
      /**
       * Signer is an account key that is already associated with an identity.
       **/
      SignerAlreadyLinkedToIdentity: AugmentedError<ApiType>;
      /**
       * Signer is an account key that is already associated with a multisig.
       **/
      SignerAlreadyLinkedToMultisig: AugmentedError<ApiType>;
      /**
       * Tried to add/remove too many signers.
       **/
      TooManySigners: AugmentedError<ApiType>;
    };
    nft: {
      /**
       * An overflow while calculating the balance.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * An underflow while calculating the balance.
       **/
      BalanceUnderflow: AugmentedError<ApiType>;
      /**
       * The asset_id is already associated to an NFT collection.
       **/
      CollectionAlredyRegistered: AugmentedError<ApiType>;
      /**
       * The NFT collection does not exist.
       **/
      CollectionNotFound: AugmentedError<ApiType>;
      /**
       * Duplicate ids are not allowed.
       **/
      DuplicatedNFTId: AugmentedError<ApiType>;
      /**
       * A duplicate metadata key has been passed as parameter.
       **/
      DuplicateMetadataKey: AugmentedError<ApiType>;
      /**
       * There's no asset associated to the given asset_id.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * The asset must be of type non-fungible.
       **/
      InvalidAssetType: AugmentedError<ApiType>;
      /**
       * Either the number of keys or the key identifier does not match the keys defined for the collection.
       **/
      InvalidMetadataAttribute: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - NFT collection not found.
       **/
      InvalidNFTTransferCollectionNotFound: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - compliance failed.
       **/
      InvalidNFTTransferComplianceFailure: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - identity count would overflow.
       **/
      InvalidNFTTransferCountOverflow: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - asset is frozen.
       **/
      InvalidNFTTransferFrozenAsset: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - the number of nfts in the identity is insufficient.
       **/
      InvalidNFTTransferInsufficientCount: AugmentedError<ApiType>;
      /**
       * The receiver has an invalid CDD.
       **/
      InvalidNFTTransferInvalidReceiverCDD: AugmentedError<ApiType>;
      /**
       * The sender has an invalid CDD.
       **/
      InvalidNFTTransferInvalidSenderCDD: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - nft is locked.
       **/
      InvalidNFTTransferNFTIsLocked: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - NFT not found in portfolio.
       **/
      InvalidNFTTransferNFTNotOwned: AugmentedError<ApiType>;
      /**
       * Failed to transfer an NFT - attempt to move to the same portfolio.
       **/
      InvalidNFTTransferSamePortfolio: AugmentedError<ApiType>;
      /**
       * The sender identity can't be the same as the receiver identity.
       **/
      InvalidNFTTransferSenderIdMatchesReceiverId: AugmentedError<ApiType>;
      /**
       * The maximum number of metadata keys was exceeded.
       **/
      MaxNumberOfKeysExceeded: AugmentedError<ApiType>;
      /**
       * The maximum number of nfts being transferred in one leg was exceeded.
       **/
      MaxNumberOfNFTsPerLegExceeded: AugmentedError<ApiType>;
      /**
       * The NFT is locked.
       **/
      NFTIsLocked: AugmentedError<ApiType>;
      /**
       * The NFT does not exist.
       **/
      NFTNotFound: AugmentedError<ApiType>;
      /**
       * The number of keys in the collection is greater than the input.
       **/
      NumberOfKeysIsLessThanExpected: AugmentedError<ApiType>;
      /**
       * An overflow while calculating the updated supply.
       **/
      SupplyOverflow: AugmentedError<ApiType>;
      /**
       * An underflow while calculating the updated supply.
       **/
      SupplyUnderflow: AugmentedError<ApiType>;
      /**
       * At least one of the metadata keys has not been registered.
       **/
      UnregisteredMetadataKey: AugmentedError<ApiType>;
      /**
       * It is not possible to transferr zero nft.
       **/
      ZeroCount: AugmentedError<ApiType>;
    };
    permissions: {
      /**
       * The caller is not authorized to call the current extrinsic.
       **/
      UnauthorizedCaller: AugmentedError<ApiType>;
    };
    pips: {
      /**
       * When enacting snapshot results, an unskippable PIP was skipped.
       **/
      CannotSkipPip: AugmentedError<ApiType>;
      /**
       * Proposer specifies an incorrect deposit amount.
       **/
      IncorrectDeposit: AugmentedError<ApiType>;
      /**
       * The proposal is not in the correct state for the requested operation.
       **/
      IncorrectProposalState: AugmentedError<ApiType>;
      /**
       * Proposer cannot afford to lock the minimum deposit.
       **/
      InsufficientDeposit: AugmentedError<ApiType>;
      /**
       * The specified block number is less than the current block number.
       **/
      InvalidFutureBlockNumber: AugmentedError<ApiType>;
      /**
       * Invalid PIP ID. Pip id was not expected to be in the live queue.
       **/
      InvalidPipId: AugmentedError<ApiType>;
      /**
       * The current DID is missing.
       **/
      MissingCurrentIdentity: AugmentedError<ApiType>;
      /**
       * The proposal does not exist.
       **/
      NoSuchProposal: AugmentedError<ApiType>;
      /**
       * The caller is not a member of the governance committee.
       **/
      NotACommitteeMember: AugmentedError<ApiType>;
      /**
       * The given dispatchable call is not valid for this proposal.
       * The proposal must be from a committee, but isn't.
       **/
      NotByCommittee: AugmentedError<ApiType>;
      /**
       * The given dispatchable call is not valid for this proposal.
       * The proposal must be from the community, but isn't.
       **/
      NotFromCommunity: AugmentedError<ApiType>;
      /**
       * The number of votes exceeds the allowed limit.
       **/
      NumberOfVotesExceeded: AugmentedError<ApiType>;
      /**
       * A proposal that is not in a scheduled state cannot be executed.
       **/
      ProposalNotInScheduledState: AugmentedError<ApiType>;
      /**
       * Only the GC release coordinator is allowed to reschedule proposal execution.
       **/
      RescheduleNotByReleaseCoordinator: AugmentedError<ApiType>;
      /**
       * Execution of a scheduled proposal failed because it is missing.
       **/
      ScheduledProposalDoesntExist: AugmentedError<ApiType>;
      /**
       * Tried to enact result for PIP with an ID different from that at the position in the queue.
       **/
      SnapshotIdMismatch: AugmentedError<ApiType>;
      /**
       * Tried to enact results for the snapshot queue overflowing its length.
       **/
      SnapshotResultTooLarge: AugmentedError<ApiType>;
      /**
       * The stake amount of a vote exceeds the allowed limit.
       **/
      StakeAmountOfVotesExceeded: AugmentedError<ApiType>;
      /**
       * The current number of active (pending or scheduled) PIPs exceeds the maximum
       * and the proposal is not by a committee.
       **/
      TooManyActivePips: AugmentedError<ApiType>;
    };
    polymeshCommittee: {
      /**
       * Duplicate proposal.
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate votes are not allowed.
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * First vote on a proposal creates it, so it must be an approval.
       * All proposals are motions to execute something as "GC majority".
       * To reject e.g., a PIP, a motion to reject should be *approved*.
       **/
      FirstVoteReject: AugmentedError<ApiType>;
      /**
       * Proportion must be a rational number.
       **/
      InvalidProportion: AugmentedError<ApiType>;
      /**
       * Mismatched voting index.
       **/
      MismatchedVotingIndex: AugmentedError<ApiType>;
      /**
       * No such proposal.
       **/
      NoSuchProposal: AugmentedError<ApiType>;
      /**
       * A DID isn't part of the committee.
       * The DID may either be a caller or some other context.
       **/
      NotAMember: AugmentedError<ApiType>;
      /**
       * Proposal exists, but it has expired.
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals has been reached.
       **/
      ProposalsLimitReached: AugmentedError<ApiType>;
    };
    polymeshContracts: {
      /**
       * The caller is not a primary key.
       **/
      CallerNotAPrimaryKey: AugmentedError<ApiType>;
      /**
       * Data left in input when decoding arguments of a call.
       **/
      DataLeftAfterDecoding: AugmentedError<ApiType>;
      /**
       * Input data that a contract passed when using the ChainExtension was too large.
       **/
      InLenTooLarge: AugmentedError<ApiType>;
      /**
       * A contract was attempted to be instantiated,
       * but no identity was given to associate the new contract's key with.
       **/
      InstantiatorWithNoIdentity: AugmentedError<ApiType>;
      /**
       * Only future chain versions are allowed.
       **/
      InvalidChainVersion: AugmentedError<ApiType>;
      /**
       * Invalid `func_id` provided from contract.
       **/
      InvalidFuncId: AugmentedError<ApiType>;
      /**
       * Failed to decode a valid `RuntimeCall`.
       **/
      InvalidRuntimeCall: AugmentedError<ApiType>;
      /**
       * Secondary key permissions are missing.
       **/
      MissingKeyPermissions: AugmentedError<ApiType>;
      /**
       * There are no api upgrades supported for the contract.
       **/
      NoUpgradesSupported: AugmentedError<ApiType>;
      /**
       * Output data returned from the ChainExtension was too large.
       **/
      OutLenTooLarge: AugmentedError<ApiType>;
      /**
       * `ReadStorage` failed to write value into the contract's buffer.
       **/
      ReadStorageFailed: AugmentedError<ApiType>;
      /**
       * Extrinsic is not allowed to be called by contracts.
       **/
      RuntimeCallDenied: AugmentedError<ApiType>;
    };
    portfolio: {
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * The source and destination portfolios should be different.
       **/
      DestinationIsSamePortfolio: AugmentedError<ApiType>;
      /**
       * The portfolios belong to different identities
       **/
      DifferentIdentityPortfolios: AugmentedError<ApiType>;
      /**
       * Trying to move an amount of zero assets.
       **/
      EmptyTransfer: AugmentedError<ApiType>;
      /**
       * Insufficient balance for a transaction.
       **/
      InsufficientPortfolioBalance: AugmentedError<ApiType>;
      /**
       * Can not unlock more tokens than what are locked
       **/
      InsufficientTokensLocked: AugmentedError<ApiType>;
      /**
       * Locked NFTs can not be moved between portfolios.
       **/
      InvalidTransferNFTIsLocked: AugmentedError<ApiType>;
      /**
       * Only owned NFTs can be moved between portfolios.
       **/
      InvalidTransferNFTNotOwned: AugmentedError<ApiType>;
      /**
       * The sender identity can't be the same as the receiver identity.
       **/
      InvalidTransferSenderIdMatchesReceiverId: AugmentedError<ApiType>;
      /**
       * The caller doesn't have permission to create portfolios on the owner's behalf.
       **/
      MissingOwnersPermission: AugmentedError<ApiType>;
      /**
       * The NFT is already locked.
       **/
      NFTAlreadyLocked: AugmentedError<ApiType>;
      /**
       * The NFT does not exist in the portfolio.
       **/
      NFTNotFoundInPortfolio: AugmentedError<ApiType>;
      /**
       * The NFT has never been locked.
       **/
      NFTNotLocked: AugmentedError<ApiType>;
      /**
       * Duplicate asset among the items.
       **/
      NoDuplicateAssetsAllowed: AugmentedError<ApiType>;
      /**
       * The portfolio doesn't exist.
       **/
      PortfolioDoesNotExist: AugmentedError<ApiType>;
      /**
       * The portfolio couldn't be renamed because the chosen name is already in use.
       **/
      PortfolioNameAlreadyInUse: AugmentedError<ApiType>;
      /**
       * The portfolio still has some asset balance left
       **/
      PortfolioNotEmpty: AugmentedError<ApiType>;
      /**
       * The secondary key is not authorized to access the portfolio(s).
       **/
      SecondaryKeyNotAuthorizedForPortfolio: AugmentedError<ApiType>;
      /**
       * Adding itself as an AllowedCustodian is not permitted.
       **/
      SelfAdditionNotAllowed: AugmentedError<ApiType>;
      /**
       * The porfolio's custody is with someone other than the caller.
       **/
      UnauthorizedCustodian: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
    };
    protocolFee: {
      /**
       * Insufficient account balance to pay the fee.
       **/
      InsufficientAccountBalance: AugmentedError<ApiType>;
      /**
       * Insufficient subsidy balance to pay the fee.
       **/
      InsufficientSubsidyBalance: AugmentedError<ApiType>;
      /**
       * Not able to handled the imbalances
       **/
      UnHandledImbalances: AugmentedError<ApiType>;
    };
    relayer: {
      /**
       * The extrinsic expected a different `AuthorizationType` than what the `data.auth_type()` is.
       **/
      BadAuthorizationType: AugmentedError<ApiType>;
      /**
       * The `user_key` doesn't have a `paying_key`.
       **/
      NoPayingKey: AugmentedError<ApiType>;
      /**
       * The signer is not authorized for `paying_key`.
       **/
      NotAuthorizedForPayingKey: AugmentedError<ApiType>;
      /**
       * The signer is not authorized for `user_key`.
       **/
      NotAuthorizedForUserKey: AugmentedError<ApiType>;
      /**
       * The `user_key` has a different `paying_key`.
       **/
      NotPayingKey: AugmentedError<ApiType>;
      /**
       * The remaining POLYX for `user_key` overflowed.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * The `user_key` is not attached to a CDD'd identity.
       **/
      PayingKeyCddMissing: AugmentedError<ApiType>;
      /**
       * The `user_key` is not attached to a CDD'd identity.
       **/
      UserKeyCddMissing: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
    };
    settlement: {
      /**
       * The caller is not a mediator in the instruction.
       **/
      CallerIsNotAMediator: AugmentedError<ApiType>;
      /**
       * The caller is not a party of this instruction.
       **/
      CallerIsNotAParty: AugmentedError<ApiType>;
      /**
       * No duplicate uid are allowed for different receipts.
       **/
      DuplicateReceiptUid: AugmentedError<ApiType>;
      /**
       * The instruction failed to release asset locks or transfer the assets.
       **/
      FailedToReleaseLockOrTransferAssets: AugmentedError<ApiType>;
      /**
       * Scheduling of an instruction fails.
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * The input weight is less than the minimum required.
       **/
      InputWeightIsLessThanMinimum: AugmentedError<ApiType>;
      /**
       * Instruction has invalid dates
       **/
      InstructionDatesInvalid: AugmentedError<ApiType>;
      /**
       * Instruction has not been affirmed.
       **/
      InstructionNotAffirmed: AugmentedError<ApiType>;
      /**
       * Instruction settlement block has not yet been reached.
       **/
      InstructionSettleBlockNotReached: AugmentedError<ApiType>;
      /**
       * Instruction's target settle block reached.
       **/
      InstructionSettleBlockPassed: AugmentedError<ApiType>;
      /**
       * The mediator's expiry date must be in the future.
       **/
      InvalidExpiryDate: AugmentedError<ApiType>;
      /**
       * Only [`InstructionStatus::Pending`] or [`InstructionStatus::Failed`] instructions can be executed.
       **/
      InvalidInstructionStatusForExecution: AugmentedError<ApiType>;
      /**
       * Offchain signature is invalid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Venue does not exist.
       **/
      InvalidVenue: AugmentedError<ApiType>;
      /**
       * No leg with the given id was found
       **/
      LegNotFound: AugmentedError<ApiType>;
      /**
       * The maximum number of fungible assets was exceeded.
       **/
      MaxNumberOfFungibleAssetsExceeded: AugmentedError<ApiType>;
      /**
       * The number of nfts being transferred in the instruction was exceeded.
       **/
      MaxNumberOfNFTsExceeded: AugmentedError<ApiType>;
      /**
       * The maximum number of off-chain assets was exceeded.
       **/
      MaxNumberOfOffChainAssetsExceeded: AugmentedError<ApiType>;
      /**
       * The maximum number of receipts was exceeded.
       **/
      MaxNumberOfReceiptsExceeded: AugmentedError<ApiType>;
      /**
       * The expiry date for the mediator's affirmation has passed.
       **/
      MediatorAffirmationExpired: AugmentedError<ApiType>;
      /**
       * Multiple receipts for the same leg are not allowed.
       **/
      MultipleReceiptsForOneLeg: AugmentedError<ApiType>;
      /**
       * There are parties who have not affirmed the instruction.
       **/
      NotAllAffirmationsHaveBeenReceived: AugmentedError<ApiType>;
      /**
       * The given number of fungible transfers was underestimated.
       **/
      NumberOfFungibleTransfersUnderestimated: AugmentedError<ApiType>;
      /**
       * The given number of off-chain transfers was underestimated.
       **/
      NumberOfOffChainTransfersUnderestimated: AugmentedError<ApiType>;
      /**
       * The given number of nfts being transferred was underestimated.
       **/
      NumberOfTransferredNFTsUnderestimated: AugmentedError<ApiType>;
      /**
       * The maximum number of venue signers was exceeded.
       **/
      NumberOfVenueSignersExceeded: AugmentedError<ApiType>;
      /**
       * Off-Chain assets cannot be locked.
       **/
      OffChainAssetCantBeLocked: AugmentedError<ApiType>;
      /**
       * Offchain assets must have a venue.
       **/
      OffChainAssetsMustHaveAVenue: AugmentedError<ApiType>;
      /**
       * Receipt already used.
       **/
      ReceiptAlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Off-chain receipts can only be used for off-chain leg type.
       **/
      ReceiptForInvalidLegType: AugmentedError<ApiType>;
      /**
       * The instruction id in all receipts must match the extrinsic parameter.
       **/
      ReceiptInstructionIdMissmatch: AugmentedError<ApiType>;
      /**
       * Sender and receiver are the same.
       **/
      SameSenderReceiver: AugmentedError<ApiType>;
      /**
       * The provided settlement block number is in the past and cannot be used by the scheduler.
       **/
      SettleOnPastBlock: AugmentedError<ApiType>;
      /**
       * Signer is already added to venue.
       **/
      SignerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Signer is not added to venue.
       **/
      SignerDoesNotExist: AugmentedError<ApiType>;
      /**
       * Sender does not have required permissions.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Signer is not authorized by the venue.
       **/
      UnauthorizedSigner: AugmentedError<ApiType>;
      /**
       * Venue does not have required permissions.
       **/
      UnauthorizedVenue: AugmentedError<ApiType>;
      /**
       * The current instruction affirmation status does not support the requested action.
       **/
      UnexpectedAffirmationStatus: AugmentedError<ApiType>;
      /**
       * An invalid has been reached.
       **/
      UnexpectedLegStatus: AugmentedError<ApiType>;
      /**
       * AssetId could not be found on chain.
       **/
      UnexpectedOFFChainAsset: AugmentedError<ApiType>;
      /**
       * Instruction status is unknown
       **/
      UnknownInstruction: AugmentedError<ApiType>;
      /**
       * The maximum weight limit for executing the function was exceeded.
       **/
      WeightLimitExceeded: AugmentedError<ApiType>;
      /**
       * Instruction leg amount can't be zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * Some bound is not met.
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Validator commiission is above maximum.
       **/
      CommissionTooHigh: AugmentedError<ApiType>;
      /**
       * Commission is too low. Must be at least `MinCommission`.
       **/
      CommissionTooLow: AugmentedError<ApiType>;
      /**
       * New commission must be different from previous commission.
       **/
      CommissionUnchanged: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Permissioned validator already exists.
       **/
      IdentityIsAlreadyPermissioned: AugmentedError<ApiType>;
      /**
       * Identity has not gone throught CDD.
       **/
      IdentityIsMissingCDD: AugmentedError<ApiType>;
      /**
       * Identity was not found in the permissioned identity pool.
       **/
      IdentityNotFound: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Cannot have a validator or nominator role, with value less than the minimum defined by
       * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
       * intention, `chill` first to remove one's role as validator/nominator.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * When the intended number of validators to run is >= 2/3 of `validator_count`.
       **/
      IntendedCountIsExceedingConsensusLimit: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Validator or nominator stash identity does not exist.
       **/
      StashIdentityDoesNotExist: AugmentedError<ApiType>;
      /**
       * Nominator stash has not gone through CDD.
       **/
      StashIdentityNotCDDed: AugmentedError<ApiType>;
      /**
       * Validator's stash identity is not permissioned.
       **/
      StashIdentityNotPermissioned: AugmentedError<ApiType>;
      /**
       * There are too many nominators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyNominators: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
      /**
       * There are too many validator candidates in the system.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * No validator was found for the given key.
       **/
      ValidatorNotFound: AugmentedError<ApiType>;
    };
    statistics: {
      /**
       * A Stattype is in use and can't be removed.
       **/
      CannotRemoveStatTypeInUse: AugmentedError<ApiType>;
      /**
       * Invalid transfer [`TransferCondition`] not respected.
       **/
      InvalidTransferStatisticsFailure: AugmentedError<ApiType>;
      /**
       * The limit of StatTypes allowed for an asset has been reached.
       **/
      StatTypeLimitReached: AugmentedError<ApiType>;
      /**
       * StatType is not enabled.
       **/
      StatTypeMissing: AugmentedError<ApiType>;
      /**
       * StatType is needed by TransferCondition.
       **/
      StatTypeNeededByTransferCondition: AugmentedError<ApiType>;
      /**
       * The limit of TransferConditions allowed for an asset has been reached.
       **/
      TransferConditionLimitReached: AugmentedError<ApiType>;
      /**
       * The maximum weight limit for executing the function was exceeded.
       **/
      WeightLimitExceeded: AugmentedError<ApiType>;
    };
    sto: {
      /**
       * Fundraiser has been closed/stopped already.
       **/
      FundraiserClosed: AugmentedError<ApiType>;
      /**
       * Interacting with a fundraiser past the end `Moment`.
       **/
      FundraiserExpired: AugmentedError<ApiType>;
      /**
       * Fundraiser not found.
       **/
      FundraiserNotFound: AugmentedError<ApiType>;
      /**
       * Fundraiser is either frozen or stopped.
       **/
      FundraiserNotLive: AugmentedError<ApiType>;
      /**
       * Not enough tokens left for sale.
       **/
      InsufficientTokensRemaining: AugmentedError<ApiType>;
      /**
       * Window (start time, end time) has invalid parameters, e.g start time is after end time.
       **/
      InvalidOfferingWindow: AugmentedError<ApiType>;
      /**
       * An individual price tier was invalid or a set of price tiers was invalid.
       **/
      InvalidPriceTiers: AugmentedError<ApiType>;
      /**
       * An invalid venue provided.
       **/
      InvalidVenue: AugmentedError<ApiType>;
      /**
       * Investment amount is lower than minimum investment amount.
       **/
      InvestmentAmountTooLow: AugmentedError<ApiType>;
      /**
       * Price of the investment exceeded the max price.
       **/
      MaxPriceExceeded: AugmentedError<ApiType>;
      /**
       * An arithmetic operation overflowed.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Sender does not have required permissions.
       **/
      Unauthorized: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Duplicate proposal.
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate votes are not allowed.
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * First vote on a proposal creates it, so it must be an approval.
       * All proposals are motions to execute something as "GC majority".
       * To reject e.g., a PIP, a motion to reject should be *approved*.
       **/
      FirstVoteReject: AugmentedError<ApiType>;
      /**
       * Proportion must be a rational number.
       **/
      InvalidProportion: AugmentedError<ApiType>;
      /**
       * Mismatched voting index.
       **/
      MismatchedVotingIndex: AugmentedError<ApiType>;
      /**
       * No such proposal.
       **/
      NoSuchProposal: AugmentedError<ApiType>;
      /**
       * A DID isn't part of the committee.
       * The DID may either be a caller or some other context.
       **/
      NotAMember: AugmentedError<ApiType>;
      /**
       * Proposal exists, but it has expired.
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals has been reached.
       **/
      ProposalsLimitReached: AugmentedError<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * The limit for the number of concurrent active members for this group has been exceeded.
       **/
      ActiveMembersLimitExceeded: AugmentedError<ApiType>;
      /**
       * Active member limit was greater than maximum committee members limit.
       **/
      ActiveMembersLimitOverflow: AugmentedError<ApiType>;
      /**
       * Group member was added already.
       **/
      DuplicateMember: AugmentedError<ApiType>;
      /**
       * Last member of the committee can not quit.
       **/
      LastMemberCannotQuit: AugmentedError<ApiType>;
      /**
       * Can't remove a member that doesn't exist.
       **/
      NoSuchMember: AugmentedError<ApiType>;
      /**
       * Only primary key of the identity is allowed.
       **/
      OnlyPrimaryKeyAllowed: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Invalid identity for disbursement.
       **/
      InvalidIdentity: AugmentedError<ApiType>;
    };
    upgradeCommittee: {
      /**
       * Duplicate proposal.
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate votes are not allowed.
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * First vote on a proposal creates it, so it must be an approval.
       * All proposals are motions to execute something as "GC majority".
       * To reject e.g., a PIP, a motion to reject should be *approved*.
       **/
      FirstVoteReject: AugmentedError<ApiType>;
      /**
       * Proportion must be a rational number.
       **/
      InvalidProportion: AugmentedError<ApiType>;
      /**
       * Mismatched voting index.
       **/
      MismatchedVotingIndex: AugmentedError<ApiType>;
      /**
       * No such proposal.
       **/
      NoSuchProposal: AugmentedError<ApiType>;
      /**
       * A DID isn't part of the committee.
       * The DID may either be a caller or some other context.
       **/
      NotAMember: AugmentedError<ApiType>;
      /**
       * Proposal exists, but it has expired.
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals has been reached.
       **/
      ProposalsLimitReached: AugmentedError<ApiType>;
    };
    upgradeCommitteeMembership: {
      /**
       * The limit for the number of concurrent active members for this group has been exceeded.
       **/
      ActiveMembersLimitExceeded: AugmentedError<ApiType>;
      /**
       * Active member limit was greater than maximum committee members limit.
       **/
      ActiveMembersLimitOverflow: AugmentedError<ApiType>;
      /**
       * Group member was added already.
       **/
      DuplicateMember: AugmentedError<ApiType>;
      /**
       * Last member of the committee can not quit.
       **/
      LastMemberCannotQuit: AugmentedError<ApiType>;
      /**
       * Can't remove a member that doesn't exist.
       **/
      NoSuchMember: AugmentedError<ApiType>;
      /**
       * Only primary key of the identity is allowed.
       **/
      OnlyPrimaryKeyAllowed: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Provided nonce was invalid
       * If the provided nonce < current nonce, the call was already executed
       * If the provided nonce > current nonce, the call(s) before the current failed to execute
       * POLYMESH error
       **/
      InvalidNonce: AugmentedError<ApiType>;
      /**
       * Offchain signature is invalid
       * POLYMESH error
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Target does not have a valid CDD
       * POLYMESH error
       **/
      TargetCddMissing: AugmentedError<ApiType>;
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Decoding derivative account Id failed.
       **/
      UnableToDeriveAccountId: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
