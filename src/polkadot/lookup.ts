// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup8: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup18: frame_system::EventRecord<polymesh_runtime_develop::runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup20: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup23: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup24: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup25: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: '(Option<PolymeshPrimitivesIdentityId>,AccountId32,u128)',
      Transfer: '(Option<PolymeshPrimitivesIdentityId>,AccountId32,Option<PolymeshPrimitivesIdentityId>,AccountId32,u128,Option<PolymeshPrimitivesMemo>)',
      BalanceSet: '(PolymeshPrimitivesIdentityId,AccountId32,u128,u128)',
      AccountBalanceBurned: '(PolymeshPrimitivesIdentityId,AccountId32,u128)',
      Reserved: '(AccountId32,u128)',
      Unreserved: '(AccountId32,u128)',
      ReserveRepatriated: '(AccountId32,AccountId32,u128,FrameSupportTokensMiscBalanceStatus)'
    }
  },
  /**
   * Lookup32: polymesh_primitives::identity_id::IdentityId
   **/
  PolymeshPrimitivesIdentityId: '[u8;32]',
  /**
   * Lookup34: polymesh_primitives::Memo
   **/
  PolymeshPrimitivesMemo: '[u8;32]',
  /**
   * Lookup35: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup36: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup37: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      DidCreated: '(PolymeshPrimitivesIdentityId,AccountId32,Vec<PolymeshPrimitivesSecondaryKey>)',
      SecondaryKeysAdded: '(PolymeshPrimitivesIdentityId,Vec<PolymeshPrimitivesSecondaryKey>)',
      SecondaryKeysRemoved: '(PolymeshPrimitivesIdentityId,Vec<AccountId32>)',
      SecondaryKeyLeftIdentity: '(PolymeshPrimitivesIdentityId,AccountId32)',
      SecondaryKeyPermissionsUpdated: '(PolymeshPrimitivesIdentityId,AccountId32,PolymeshPrimitivesSecondaryKeyPermissions,PolymeshPrimitivesSecondaryKeyPermissions)',
      PrimaryKeyUpdated: '(PolymeshPrimitivesIdentityId,AccountId32,AccountId32)',
      ClaimAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityClaim)',
      ClaimRevoked: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityClaim)',
      AssetDidRegistered: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTicker)',
      AuthorizationAdded: '(PolymeshPrimitivesIdentityId,Option<PolymeshPrimitivesIdentityId>,Option<AccountId32>,u64,PolymeshPrimitivesAuthorizationAuthorizationData,Option<u64>)',
      AuthorizationRevoked: '(Option<PolymeshPrimitivesIdentityId>,Option<AccountId32>,u64)',
      AuthorizationRejected: '(Option<PolymeshPrimitivesIdentityId>,Option<AccountId32>,u64)',
      AuthorizationConsumed: '(Option<PolymeshPrimitivesIdentityId>,Option<AccountId32>,u64)',
      AuthorizationRetryLimitReached: '(Option<PolymeshPrimitivesIdentityId>,Option<AccountId32>,u64)',
      CddRequirementForPrimaryKeyUpdated: 'bool',
      CddClaimsInvalidated: '(PolymeshPrimitivesIdentityId,u64)',
      SecondaryKeysFrozen: 'PolymeshPrimitivesIdentityId',
      SecondaryKeysUnfrozen: 'PolymeshPrimitivesIdentityId',
      CustomClaimTypeAdded: '(PolymeshPrimitivesIdentityId,u32,Bytes)',
      ChildDidCreated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId,AccountId32)',
      ChildDidUnlinked: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)'
    }
  },
  /**
   * Lookup39: polymesh_primitives::secondary_key::SecondaryKey<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesSecondaryKey: {
    key: 'AccountId32',
    permissions: 'PolymeshPrimitivesSecondaryKeyPermissions'
  },
  /**
   * Lookup40: polymesh_primitives::secondary_key::Permissions
   **/
  PolymeshPrimitivesSecondaryKeyPermissions: {
    asset: 'PolymeshPrimitivesSubsetSubsetRestrictionAssetId',
    extrinsic: 'PolymeshPrimitivesSecondaryKeyExtrinsicPermissions',
    portfolio: 'PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId'
  },
  /**
   * Lookup41: polymesh_primitives::subset::SubsetRestriction<polymesh_primitives::asset::AssetId>
   **/
  PolymeshPrimitivesSubsetSubsetRestrictionAssetId: {
    _enum: {
      Whole: 'Null',
      These: 'BTreeSet<PolymeshPrimitivesAssetAssetId>',
      Except: 'BTreeSet<PolymeshPrimitivesAssetAssetId>'
    }
  },
  /**
   * Lookup42: polymesh_primitives::asset::AssetId
   **/
  PolymeshPrimitivesAssetAssetId: '[u8;16]',
  /**
   * Lookup46: polymesh_primitives::secondary_key::ExtrinsicPermissions
   **/
  PolymeshPrimitivesSecondaryKeyExtrinsicPermissions: {
    _enum: {
      Whole: 'Null',
      These: 'BTreeMap<Text, PolymeshPrimitivesSecondaryKeyPalletPermissions>',
      Except: 'BTreeMap<Text, PolymeshPrimitivesSecondaryKeyPalletPermissions>'
    }
  },
  /**
   * Lookup50: polymesh_primitives::secondary_key::PalletPermissions
   **/
  PolymeshPrimitivesSecondaryKeyPalletPermissions: {
    extrinsics: 'PolymeshPrimitivesSubsetSubsetRestrictionExtrinsicName'
  },
  /**
   * Lookup51: polymesh_primitives::subset::SubsetRestriction<polymesh_primitives::ExtrinsicName>
   **/
  PolymeshPrimitivesSubsetSubsetRestrictionExtrinsicName: {
    _enum: {
      Whole: 'Null',
      These: 'BTreeSet<Text>',
      Except: 'BTreeSet<Text>'
    }
  },
  /**
   * Lookup57: polymesh_primitives::subset::SubsetRestriction<polymesh_primitives::identity_id::PortfolioId>
   **/
  PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId: {
    _enum: {
      Whole: 'Null',
      These: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
      Except: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>'
    }
  },
  /**
   * Lookup58: polymesh_primitives::identity_id::PortfolioId
   **/
  PolymeshPrimitivesIdentityIdPortfolioId: {
    did: 'PolymeshPrimitivesIdentityId',
    kind: 'PolymeshPrimitivesIdentityIdPortfolioKind'
  },
  /**
   * Lookup59: polymesh_primitives::identity_id::PortfolioKind
   **/
  PolymeshPrimitivesIdentityIdPortfolioKind: {
    _enum: {
      Default: 'Null',
      User: 'u64'
    }
  },
  /**
   * Lookup64: polymesh_primitives::identity_claim::IdentityClaim
   **/
  PolymeshPrimitivesIdentityClaim: {
    claimIssuer: 'PolymeshPrimitivesIdentityId',
    issuanceDate: 'u64',
    lastUpdateDate: 'u64',
    expiry: 'Option<u64>',
    claim: 'PolymeshPrimitivesIdentityClaimClaim'
  },
  /**
   * Lookup66: polymesh_primitives::identity_claim::Claim
   **/
  PolymeshPrimitivesIdentityClaimClaim: {
    _enum: {
      Accredited: 'PolymeshPrimitivesIdentityClaimScope',
      Affiliate: 'PolymeshPrimitivesIdentityClaimScope',
      BuyLockup: 'PolymeshPrimitivesIdentityClaimScope',
      SellLockup: 'PolymeshPrimitivesIdentityClaimScope',
      CustomerDueDiligence: 'PolymeshPrimitivesCddId',
      KnowYourCustomer: 'PolymeshPrimitivesIdentityClaimScope',
      Jurisdiction: '(PolymeshPrimitivesJurisdictionCountryCode,PolymeshPrimitivesIdentityClaimScope)',
      Exempted: 'PolymeshPrimitivesIdentityClaimScope',
      Blocked: 'PolymeshPrimitivesIdentityClaimScope',
      Custom: '(u32,Option<PolymeshPrimitivesIdentityClaimScope>)'
    }
  },
  /**
   * Lookup67: polymesh_primitives::identity_claim::Scope
   **/
  PolymeshPrimitivesIdentityClaimScope: {
    _enum: {
      Identity: 'PolymeshPrimitivesIdentityId',
      Asset: 'PolymeshPrimitivesAssetAssetId',
      Custom: 'Bytes'
    }
  },
  /**
   * Lookup68: polymesh_primitives::cdd_id::CddId
   **/
  PolymeshPrimitivesCddId: '[u8;32]',
  /**
   * Lookup69: polymesh_primitives::jurisdiction::CountryCode
   **/
  PolymeshPrimitivesJurisdictionCountryCode: {
    _enum: ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'VG', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'HK', 'MO', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW', 'BQ', 'CW', 'SX']
  },
  /**
   * Lookup72: polymesh_primitives::ticker::Ticker
   **/
  PolymeshPrimitivesTicker: '[u8;12]',
  /**
   * Lookup75: polymesh_primitives::authorization::AuthorizationData<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesAuthorizationAuthorizationData: {
    _enum: {
      AttestPrimaryKeyRotation: 'PolymeshPrimitivesIdentityId',
      RotatePrimaryKey: 'Null',
      TransferTicker: 'PolymeshPrimitivesTicker',
      AddMultiSigSigner: 'AccountId32',
      TransferAssetOwnership: 'PolymeshPrimitivesAssetAssetId',
      JoinIdentity: 'PolymeshPrimitivesSecondaryKeyPermissions',
      PortfolioCustody: 'PolymeshPrimitivesIdentityIdPortfolioId',
      BecomeAgent: '(PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAgentAgentGroup)',
      AddRelayerPayingKey: '(AccountId32,AccountId32,u128)',
      RotatePrimaryKeyToSecondary: 'PolymeshPrimitivesSecondaryKeyPermissions'
    }
  },
  /**
   * Lookup76: polymesh_primitives::agent::AgentGroup
   **/
  PolymeshPrimitivesAgentAgentGroup: {
    _enum: {
      Full: 'Null',
      Custom: 'u32',
      ExceptMeta: 'Null',
      PolymeshV1CAA: 'Null',
      PolymeshV1PIA: 'Null'
    }
  },
  /**
   * Lookup79: pallet_group::pallet::Event<T, I>
   **/
  PalletGroupEvent: {
    _enum: {
      MemberAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)',
      MemberRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)',
      MemberRevoked: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)',
      MembersSwapped: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)',
      MembersReset: '(PolymeshPrimitivesIdentityId,Vec<PolymeshPrimitivesIdentityId>)',
      ActiveLimitChanged: '(PolymeshPrimitivesIdentityId,u32,u32)',
      Dummy: 'Null'
    }
  },
  /**
   * Lookup81: pallet_committee::pallet::Event<T, I>
   **/
  PalletCommitteeEvent: {
    _enum: {
      Proposed: '(PolymeshPrimitivesIdentityId,u32,H256)',
      Voted: '(PolymeshPrimitivesIdentityId,u32,H256,bool,u32,u32,u32)',
      VoteRetracted: '(PolymeshPrimitivesIdentityId,u32,H256,bool)',
      FinalVotes: '(Option<PolymeshPrimitivesIdentityId>,u32,H256,Vec<PolymeshPrimitivesIdentityId>,Vec<PolymeshPrimitivesIdentityId>)',
      Approved: '(Option<PolymeshPrimitivesIdentityId>,H256,u32,u32,u32)',
      Rejected: '(Option<PolymeshPrimitivesIdentityId>,H256,u32,u32,u32)',
      Executed: '(Option<PolymeshPrimitivesIdentityId>,H256,Result<Null, SpRuntimeDispatchError>)',
      ReleaseCoordinatorUpdated: 'Option<PolymeshPrimitivesIdentityId>',
      ExpiresAfterUpdated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesMaybeBlock)',
      VoteThresholdUpdated: '(PolymeshPrimitivesIdentityId,u32,u32)'
    }
  },
  /**
   * Lookup84: polymesh_primitives::MaybeBlock<BlockNumber>
   **/
  PolymeshPrimitivesMaybeBlock: {
    _enum: {
      Some: 'u32',
      None: 'Null'
    }
  },
  /**
   * Lookup90: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      MultiSigCreated: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        caller: 'AccountId32',
        signers: 'Vec<AccountId32>',
        sigsRequired: 'u64',
      },
      ProposalAdded: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        proposalId: 'u64',
      },
      ProposalExecuted: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        proposalId: 'u64',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultiSigSignerAdded: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        signer: 'AccountId32',
      },
      MultiSigSignersAuthorized: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        signers: 'Vec<AccountId32>',
      },
      MultiSigSignersRemoved: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        signers: 'Vec<AccountId32>',
      },
      MultiSigSignersRequiredChanged: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        sigsRequired: 'u64',
      },
      ProposalApprovalVote: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        signer: 'AccountId32',
        proposalId: 'u64',
      },
      ProposalRejectionVote: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        signer: 'AccountId32',
        proposalId: 'u64',
      },
      ProposalApproved: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        proposalId: 'u64',
      },
      ProposalRejected: {
        callerDid: 'Option<PolymeshPrimitivesIdentityId>',
        multisig: 'AccountId32',
        proposalId: 'u64',
      },
      MultiSigAddedAdmin: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        adminDid: 'PolymeshPrimitivesIdentityId',
      },
      MultiSigRemovedAdmin: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        adminDid: 'PolymeshPrimitivesIdentityId',
      },
      MultiSigRemovedPayingDid: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        multisig: 'AccountId32',
        payingDid: 'PolymeshPrimitivesIdentityId'
      }
    }
  },
  /**
   * Lookup92: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        identity: 'PolymeshPrimitivesIdentityId',
        stash: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        identity: 'PolymeshPrimitivesIdentityId',
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        identity: 'PolymeshPrimitivesIdentityId',
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      ForceEra: {
        mode: 'PalletStakingForcing',
      },
      Nominated: {
        nominatorIdentity: 'PolymeshPrimitivesIdentityId',
        stash: 'AccountId32',
        targets: 'Vec<AccountId32>',
      },
      PermissionedIdentityAdded: {
        governanceCouncillDid: 'PolymeshPrimitivesIdentityId',
        validatorsIdentity: 'PolymeshPrimitivesIdentityId',
      },
      PermissionedIdentityRemoved: {
        governanceCouncillDid: 'PolymeshPrimitivesIdentityId',
        validatorsIdentity: 'PolymeshPrimitivesIdentityId',
      },
      InvalidatedNominators: {
        governanceCouncillDid: 'PolymeshPrimitivesIdentityId',
        governanceCouncillAccount: 'PolymeshPrimitivesIdentityId',
        expiredNominators: 'Vec<AccountId32>',
      },
      SlashingAllowedForChanged: {
        slashingSwitch: 'PalletStakingSlashingSwitch',
      },
      RewardPaymentSchedulingInterrupted: {
        accountId: 'AccountId32',
        era: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      CommissionCapUpdated: {
        governanceCouncillDid: 'PolymeshPrimitivesIdentityId',
        oldCommissionCap: 'Perbill',
        newCommissionCap: 'Perbill'
      }
    }
  },
  /**
   * Lookup94: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup96: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup97: pallet_staking::types::SlashingSwitch
   **/
  PalletStakingSlashingSwitch: {
    _enum: ['Validator', 'ValidatorAndNominator', 'None']
  },
  /**
   * Lookup98: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup99: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup100: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup103: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup104: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup105: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,PalletStakingExposure)>'
      }
    }
  },
  /**
   * Lookup106: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup107: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup110: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup113: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup114: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup115: pallet_asset::pallet::Event<T>
   **/
  PalletAssetEvent: {
    _enum: {
      AssetCreated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,bool,PolymeshPrimitivesAssetAssetType,PolymeshPrimitivesIdentityId,Bytes,Vec<PolymeshPrimitivesAssetIdentifier>,Option<Bytes>)',
      IdentifiersUpdated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<PolymeshPrimitivesAssetIdentifier>)',
      DivisibilityChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,bool)',
      TickerRegistered: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTicker,Option<u64>)',
      TickerTransferred: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTicker,PolymeshPrimitivesIdentityId)',
      AssetOwnershipTransferred: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityId)',
      AssetFrozen: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      AssetUnfrozen: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      AssetRenamed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Bytes)',
      FundingRoundSet: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Bytes)',
      DocumentAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u32,PolymeshPrimitivesDocument)',
      DocumentRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u32)',
      ControllerTransfer: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityIdPortfolioId,u128)',
      CustomAssetTypeExists: '(PolymeshPrimitivesIdentityId,u32,Bytes)',
      CustomAssetTypeRegistered: '(PolymeshPrimitivesIdentityId,u32,Bytes)',
      SetAssetMetadataValue: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Bytes,Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>)',
      SetAssetMetadataValueDetails: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail)',
      RegisterAssetMetadataLocalType: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Bytes,u64,PolymeshPrimitivesAssetMetadataAssetMetadataSpec)',
      RegisterAssetMetadataGlobalType: '(Bytes,u64,PolymeshPrimitivesAssetMetadataAssetMetadataSpec)',
      AssetTypeChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAssetAssetType)',
      LocalMetadataKeyDeleted: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u64)',
      MetadataValueDeleted: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAssetMetadataAssetMetadataKey)',
      AssetBalanceUpdated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u128,Option<PolymeshPrimitivesIdentityIdPortfolioId>,Option<PolymeshPrimitivesIdentityIdPortfolioId>,PolymeshPrimitivesPortfolioPortfolioUpdateReason)',
      AssetAffirmationExemption: 'PolymeshPrimitivesAssetAssetId',
      RemoveAssetAffirmationExemption: 'PolymeshPrimitivesAssetAssetId',
      PreApprovedAsset: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      RemovePreApprovedAsset: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      AssetMediatorsAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,BTreeSet<PolymeshPrimitivesIdentityId>)',
      AssetMediatorsRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,BTreeSet<PolymeshPrimitivesIdentityId>)',
      TickerLinkedToAsset: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTicker,PolymeshPrimitivesAssetAssetId)',
      TickerUnlinkedFromAsset: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTicker,PolymeshPrimitivesAssetAssetId)',
      GlobalMetadataSpecUpdated: '(Bytes,PolymeshPrimitivesAssetMetadataAssetMetadataSpec)'
    }
  },
  /**
   * Lookup116: polymesh_primitives::asset::AssetType
   **/
  PolymeshPrimitivesAssetAssetType: {
    _enum: {
      EquityCommon: 'Null',
      EquityPreferred: 'Null',
      Commodity: 'Null',
      FixedIncome: 'Null',
      REIT: 'Null',
      Fund: 'Null',
      RevenueShareAgreement: 'Null',
      StructuredProduct: 'Null',
      Derivative: 'Null',
      Custom: 'u32',
      StableCoin: 'Null',
      NonFungible: 'PolymeshPrimitivesAssetNonFungibleType'
    }
  },
  /**
   * Lookup118: polymesh_primitives::asset::NonFungibleType
   **/
  PolymeshPrimitivesAssetNonFungibleType: {
    _enum: {
      Derivative: 'Null',
      FixedIncome: 'Null',
      Invoice: 'Null',
      Custom: 'u32'
    }
  },
  /**
   * Lookup121: polymesh_primitives::asset_identifier::AssetIdentifier
   **/
  PolymeshPrimitivesAssetIdentifier: {
    _enum: {
      CUSIP: '[u8;9]',
      CINS: '[u8;9]',
      ISIN: '[u8;12]',
      LEI: '[u8;20]',
      FIGI: '[u8;12]'
    }
  },
  /**
   * Lookup127: polymesh_primitives::document::Document
   **/
  PolymeshPrimitivesDocument: {
    uri: 'Bytes',
    contentHash: 'PolymeshPrimitivesDocumentHash',
    name: 'Bytes',
    docType: 'Option<Bytes>',
    filingDate: 'Option<u64>'
  },
  /**
   * Lookup129: polymesh_primitives::document_hash::DocumentHash
   **/
  PolymeshPrimitivesDocumentHash: {
    _enum: {
      None: 'Null',
      H512: '[u8;64]',
      H384: '[u8;48]',
      H320: '[u8;40]',
      H256: '[u8;32]',
      H224: '[u8;28]',
      H192: '[u8;24]',
      H160: '[u8;20]',
      H128: '[u8;16]'
    }
  },
  /**
   * Lookup140: polymesh_primitives::asset_metadata::AssetMetadataValueDetail<Moment>
   **/
  PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail: {
    expire: 'Option<u64>',
    lockStatus: 'PolymeshPrimitivesAssetMetadataAssetMetadataLockStatus'
  },
  /**
   * Lookup141: polymesh_primitives::asset_metadata::AssetMetadataLockStatus<Moment>
   **/
  PolymeshPrimitivesAssetMetadataAssetMetadataLockStatus: {
    _enum: {
      Unlocked: 'Null',
      Locked: 'Null',
      LockedUntil: 'u64'
    }
  },
  /**
   * Lookup144: polymesh_primitives::asset_metadata::AssetMetadataSpec
   **/
  PolymeshPrimitivesAssetMetadataAssetMetadataSpec: {
    url: 'Option<Bytes>',
    description: 'Option<Bytes>',
    typeDef: 'Option<Bytes>'
  },
  /**
   * Lookup151: polymesh_primitives::asset_metadata::AssetMetadataKey
   **/
  PolymeshPrimitivesAssetMetadataAssetMetadataKey: {
    _enum: {
      Global: 'u64',
      Local: 'u64'
    }
  },
  /**
   * Lookup153: polymesh_primitives::portfolio::PortfolioUpdateReason
   **/
  PolymeshPrimitivesPortfolioPortfolioUpdateReason: {
    _enum: {
      Issued: {
        fundingRoundName: 'Option<Bytes>',
      },
      Redeemed: 'Null',
      Transferred: {
        instructionId: 'Option<u64>',
        instructionMemo: 'Option<PolymeshPrimitivesMemo>',
      },
      ControllerTransfer: 'Null'
    }
  },
  /**
   * Lookup157: pallet_corporate_actions::distribution::pallet::Event<T>
   **/
  PalletCorporateActionsDistributionPalletEvent: {
    _enum: {
      Created: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId,PalletCorporateActionsDistribution)',
      BenefitClaimed: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId,PalletCorporateActionsDistribution,u128,Permill)',
      Reclaimed: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId,u128)',
      Removed: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId)'
    }
  },
  /**
   * Lookup158: polymesh_primitives::event_only::EventOnly<polymesh_primitives::identity_id::IdentityId>
   **/
  PolymeshPrimitivesEventOnly: 'PolymeshPrimitivesIdentityId',
  /**
   * Lookup159: pallet_corporate_actions::CAId
   **/
  PalletCorporateActionsCaId: {
    assetId: 'PolymeshPrimitivesAssetAssetId',
    localId: 'u32'
  },
  /**
   * Lookup161: pallet_corporate_actions::distribution::Distribution
   **/
  PalletCorporateActionsDistribution: {
    from: 'PolymeshPrimitivesIdentityIdPortfolioId',
    currency: 'PolymeshPrimitivesAssetAssetId',
    perShare: 'u128',
    amount: 'u128',
    remaining: 'u128',
    reclaimed: 'bool',
    paymentAt: 'u64',
    expiresAt: 'Option<u64>'
  },
  /**
   * Lookup163: pallet_asset::checkpoint::pallet::Event<T>
   **/
  PalletAssetCheckpointPalletEvent: {
    _enum: {
      CheckpointCreated: '(Option<PolymeshPrimitivesIdentityId>,PolymeshPrimitivesAssetAssetId,u64,u128,u64)',
      MaximumSchedulesComplexityChanged: '(PolymeshPrimitivesIdentityId,u64)',
      ScheduleCreated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u64,PolymeshCommonUtilitiesCheckpointScheduleCheckpoints)',
      ScheduleRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u64,PolymeshCommonUtilitiesCheckpointScheduleCheckpoints)'
    }
  },
  /**
   * Lookup166: polymesh_common_utilities::traits::checkpoint::ScheduleCheckpoints
   **/
  PolymeshCommonUtilitiesCheckpointScheduleCheckpoints: {
    pending: 'BTreeSet<u64>'
  },
  /**
   * Lookup169: pallet_compliance_manager::pallet::Event<T>
   **/
  PalletComplianceManagerEvent: {
    _enum: {
      ComplianceRequirementCreated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesComplianceManagerComplianceRequirement)',
      ComplianceRequirementRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u32)',
      AssetComplianceReplaced: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<PolymeshPrimitivesComplianceManagerComplianceRequirement>)',
      AssetComplianceReset: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      AssetComplianceResumed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      AssetCompliancePaused: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId)',
      ComplianceRequirementChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesComplianceManagerComplianceRequirement)',
      TrustedDefaultClaimIssuerAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesConditionTrustedIssuer)',
      TrustedDefaultClaimIssuerRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityId)'
    }
  },
  /**
   * Lookup170: polymesh_primitives::compliance_manager::ComplianceRequirement
   **/
  PolymeshPrimitivesComplianceManagerComplianceRequirement: {
    senderConditions: 'Vec<PolymeshPrimitivesCondition>',
    receiverConditions: 'Vec<PolymeshPrimitivesCondition>',
    id: 'u32'
  },
  /**
   * Lookup172: polymesh_primitives::condition::Condition
   **/
  PolymeshPrimitivesCondition: {
    conditionType: 'PolymeshPrimitivesConditionConditionType',
    issuers: 'Vec<PolymeshPrimitivesConditionTrustedIssuer>'
  },
  /**
   * Lookup173: polymesh_primitives::condition::ConditionType
   **/
  PolymeshPrimitivesConditionConditionType: {
    _enum: {
      IsPresent: 'PolymeshPrimitivesIdentityClaimClaim',
      IsAbsent: 'PolymeshPrimitivesIdentityClaimClaim',
      IsAnyOf: 'Vec<PolymeshPrimitivesIdentityClaimClaim>',
      IsNoneOf: 'Vec<PolymeshPrimitivesIdentityClaimClaim>',
      IsIdentity: 'PolymeshPrimitivesConditionTargetIdentity'
    }
  },
  /**
   * Lookup175: polymesh_primitives::condition::TargetIdentity
   **/
  PolymeshPrimitivesConditionTargetIdentity: {
    _enum: {
      ExternalAgent: 'Null',
      Specific: 'PolymeshPrimitivesIdentityId'
    }
  },
  /**
   * Lookup177: polymesh_primitives::condition::TrustedIssuer
   **/
  PolymeshPrimitivesConditionTrustedIssuer: {
    issuer: 'PolymeshPrimitivesIdentityId',
    trustedFor: 'PolymeshPrimitivesConditionTrustedFor'
  },
  /**
   * Lookup178: polymesh_primitives::condition::TrustedFor
   **/
  PolymeshPrimitivesConditionTrustedFor: {
    _enum: {
      Any: 'Null',
      Specific: 'Vec<PolymeshPrimitivesIdentityClaimClaimType>'
    }
  },
  /**
   * Lookup180: polymesh_primitives::identity_claim::ClaimType
   **/
  PolymeshPrimitivesIdentityClaimClaimType: {
    _enum: {
      Accredited: 'Null',
      Affiliate: 'Null',
      BuyLockup: 'Null',
      SellLockup: 'Null',
      CustomerDueDiligence: 'Null',
      KnowYourCustomer: 'Null',
      Jurisdiction: 'Null',
      Exempted: 'Null',
      Blocked: 'Null',
      Custom: 'u32'
    }
  },
  /**
   * Lookup182: pallet_corporate_actions::pallet::Event<T>
   **/
  PalletCorporateActionsEvent: {
    _enum: {
      MaxDetailsLengthChanged: '(PolymeshPrimitivesIdentityId,u32)',
      DefaultTargetIdentitiesChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PalletCorporateActionsTargetIdentities)',
      DefaultWithholdingTaxChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Permill)',
      DidWithholdingTaxChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityId,Option<Permill>)',
      CAInitiated: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId,PalletCorporateActionsCorporateAction,Bytes)',
      CALinkedToDoc: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,Vec<u32>)',
      CARemoved: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId)',
      RecordDateChanged: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId,PalletCorporateActionsCorporateAction)'
    }
  },
  /**
   * Lookup183: pallet_corporate_actions::TargetIdentities
   **/
  PalletCorporateActionsTargetIdentities: {
    identities: 'Vec<PolymeshPrimitivesIdentityId>',
    treatment: 'PalletCorporateActionsTargetTreatment'
  },
  /**
   * Lookup184: pallet_corporate_actions::TargetTreatment
   **/
  PalletCorporateActionsTargetTreatment: {
    _enum: ['Include', 'Exclude']
  },
  /**
   * Lookup186: pallet_corporate_actions::CorporateAction
   **/
  PalletCorporateActionsCorporateAction: {
    kind: 'PalletCorporateActionsCaKind',
    declDate: 'u64',
    recordDate: 'Option<PalletCorporateActionsRecordDate>',
    targets: 'PalletCorporateActionsTargetIdentities',
    defaultWithholdingTax: 'Permill',
    withholdingTax: 'Vec<(PolymeshPrimitivesIdentityId,Permill)>'
  },
  /**
   * Lookup187: pallet_corporate_actions::CAKind
   **/
  PalletCorporateActionsCaKind: {
    _enum: ['PredictableBenefit', 'UnpredictableBenefit', 'IssuerNotice', 'Reorganization', 'Other']
  },
  /**
   * Lookup189: pallet_corporate_actions::RecordDate
   **/
  PalletCorporateActionsRecordDate: {
    date: 'u64',
    checkpoint: 'PalletCorporateActionsCaCheckpoint'
  },
  /**
   * Lookup190: pallet_corporate_actions::CACheckpoint
   **/
  PalletCorporateActionsCaCheckpoint: {
    _enum: {
      Scheduled: '(u64,u64)',
      Existing: 'u64'
    }
  },
  /**
   * Lookup195: pallet_corporate_actions::ballot::pallet::Event<T>
   **/
  PalletCorporateActionsBallotPalletEvent: {
    _enum: {
      Created: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,PalletCorporateActionsBallotBallotTimeRange,PalletCorporateActionsBallotBallotMeta,bool)',
      VoteCast: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,Vec<PalletCorporateActionsBallotBallotVote>)',
      RangeChanged: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,PalletCorporateActionsBallotBallotTimeRange)',
      MetaChanged: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,PalletCorporateActionsBallotBallotMeta)',
      RCVChanged: '(PolymeshPrimitivesIdentityId,PalletCorporateActionsCaId,bool)',
      Removed: '(PolymeshPrimitivesEventOnly,PalletCorporateActionsCaId)'
    }
  },
  /**
   * Lookup196: pallet_corporate_actions::ballot::BallotTimeRange
   **/
  PalletCorporateActionsBallotBallotTimeRange: {
    start: 'u64',
    end: 'u64'
  },
  /**
   * Lookup197: pallet_corporate_actions::ballot::BallotMeta
   **/
  PalletCorporateActionsBallotBallotMeta: {
    title: 'Bytes',
    motions: 'Vec<PalletCorporateActionsBallotMotion>'
  },
  /**
   * Lookup200: pallet_corporate_actions::ballot::Motion
   **/
  PalletCorporateActionsBallotMotion: {
    title: 'Bytes',
    infoLink: 'Bytes',
    choices: 'Vec<Bytes>'
  },
  /**
   * Lookup206: pallet_corporate_actions::ballot::BallotVote
   **/
  PalletCorporateActionsBallotBallotVote: {
    power: 'u128',
    fallback: 'Option<u16>'
  },
  /**
   * Lookup209: pallet_pips::pallet::Event<T>
   **/
  PalletPipsEvent: {
    _enum: {
      HistoricalPipsPruned: '(PolymeshPrimitivesIdentityId,bool,bool)',
      ProposalCreated: '(PolymeshPrimitivesIdentityId,PalletPipsProposer,u32,u128,Option<Bytes>,Option<Bytes>,PolymeshPrimitivesMaybeBlock,PalletPipsProposalData)',
      ProposalStateUpdated: '(PolymeshPrimitivesIdentityId,u32,PalletPipsProposalState)',
      Voted: '(PolymeshPrimitivesIdentityId,AccountId32,u32,bool,u128)',
      PipClosed: '(PolymeshPrimitivesIdentityId,u32,bool)',
      ExecutionScheduled: '(PolymeshPrimitivesIdentityId,u32,u32)',
      DefaultEnactmentPeriodChanged: '(PolymeshPrimitivesIdentityId,u32,u32)',
      MinimumProposalDepositChanged: '(PolymeshPrimitivesIdentityId,u128,u128)',
      PendingPipExpiryChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesMaybeBlock,PolymeshPrimitivesMaybeBlock)',
      MaxPipSkipCountChanged: '(PolymeshPrimitivesIdentityId,u8,u8)',
      ActivePipLimitChanged: '(PolymeshPrimitivesIdentityId,u32,u32)',
      ProposalRefund: '(PolymeshPrimitivesIdentityId,u32,u128)',
      SnapshotCleared: '(PolymeshPrimitivesIdentityId,u32)',
      SnapshotTaken: '(PolymeshPrimitivesIdentityId,u32,Vec<PalletPipsSnapshottedPip>)',
      PipSkipped: '(PolymeshPrimitivesIdentityId,u32,u8)',
      SnapshotResultsEnacted: '(PolymeshPrimitivesIdentityId,Option<u32>,Vec<(u32,u8)>,Vec<u32>,Vec<u32>)',
      ExecutionSchedulingFailed: '(PolymeshPrimitivesIdentityId,u32,u32)',
      ExpiryScheduled: '(PolymeshPrimitivesIdentityId,u32,u32)',
      ExpirySchedulingFailed: '(PolymeshPrimitivesIdentityId,u32,u32)',
      ExecutionCancellingFailed: 'u32'
    }
  },
  /**
   * Lookup210: pallet_pips::types::Proposer<sp_core::crypto::AccountId32>
   **/
  PalletPipsProposer: {
    _enum: {
      Community: 'AccountId32',
      Committee: 'PalletPipsCommittee'
    }
  },
  /**
   * Lookup211: pallet_pips::types::Committee
   **/
  PalletPipsCommittee: {
    _enum: ['Technical', 'Upgrade']
  },
  /**
   * Lookup215: pallet_pips::types::ProposalData
   **/
  PalletPipsProposalData: {
    _enum: {
      Hash: 'H256',
      Proposal: 'Bytes'
    }
  },
  /**
   * Lookup216: pallet_pips::types::ProposalState
   **/
  PalletPipsProposalState: {
    _enum: ['Pending', 'Rejected', 'Scheduled', 'Failed', 'Executed', 'Expired']
  },
  /**
   * Lookup219: pallet_pips::types::SnapshottedPip
   **/
  PalletPipsSnapshottedPip: {
    id: 'u32',
    weight: '(bool,u128)'
  },
  /**
   * Lookup225: pallet_portfolio::pallet::Event<T>
   **/
  PalletPortfolioEvent: {
    _enum: {
      PortfolioCreated: '(PolymeshPrimitivesIdentityId,u64,Bytes)',
      PortfolioDeleted: '(PolymeshPrimitivesIdentityId,u64)',
      PortfolioRenamed: '(PolymeshPrimitivesIdentityId,u64,Bytes)',
      UserPortfolios: '(PolymeshPrimitivesIdentityId,Vec<(u64,Bytes)>)',
      PortfolioCustodianChanged: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,PolymeshPrimitivesIdentityId)',
      FundsMovedBetweenPortfolios: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,PolymeshPrimitivesIdentityIdPortfolioId,PolymeshPrimitivesPortfolioFundDescription,Option<PolymeshPrimitivesMemo>)',
      PreApprovedPortfolio: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,PolymeshPrimitivesAssetAssetId)',
      RevokePreApprovedPortfolio: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,PolymeshPrimitivesAssetAssetId)',
      AllowIdentityToCreatePortfolios: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)',
      RevokeCreatePortfoliosPermission: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId)'
    }
  },
  /**
   * Lookup229: polymesh_primitives::portfolio::FundDescription
   **/
  PolymeshPrimitivesPortfolioFundDescription: {
    _enum: {
      Fungible: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        amount: 'u128',
      },
      NonFungible: 'PolymeshPrimitivesNftNfTs'
    }
  },
  /**
   * Lookup230: polymesh_primitives::nft::NFTs
   **/
  PolymeshPrimitivesNftNfTs: {
    assetId: 'PolymeshPrimitivesAssetAssetId',
    ids: 'Vec<u64>'
  },
  /**
   * Lookup233: pallet_protocol_fee::pallet::Event<T>
   **/
  PalletProtocolFeeEvent: {
    _enum: {
      FeeSet: '(PolymeshPrimitivesIdentityId,u128)',
      CoefficientSet: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesPosRatio)',
      FeeCharged: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup234: polymesh_primitives::PosRatio
   **/
  PolymeshPrimitivesPosRatio: '(u32,u32)',
  /**
   * Lookup235: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup238: pallet_settlement::pallet::Event<T>
   **/
  PalletSettlementEvent: {
    _enum: {
      VenueCreated: '(PolymeshPrimitivesIdentityId,u64,Bytes,PolymeshPrimitivesSettlementVenueType)',
      VenueDetailsUpdated: '(PolymeshPrimitivesIdentityId,u64,Bytes)',
      VenueTypeUpdated: '(PolymeshPrimitivesIdentityId,u64,PolymeshPrimitivesSettlementVenueType)',
      InstructionAffirmed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,u64)',
      AffirmationWithdrawn: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,u64)',
      InstructionRejected: '(PolymeshPrimitivesIdentityId,u64)',
      ReceiptClaimed: '(PolymeshPrimitivesIdentityId,u64,u64,u64,AccountId32,Option<PolymeshPrimitivesSettlementReceiptMetadata>)',
      VenueFiltering: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,bool)',
      VenuesAllowed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<u64>)',
      VenuesBlocked: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<u64>)',
      LegFailedExecution: '(PolymeshPrimitivesIdentityId,u64,u64)',
      InstructionExecuted: '(PolymeshPrimitivesIdentityId,u64)',
      VenueUnauthorized: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u64)',
      SchedulingFailed: '(u64,SpRuntimeDispatchError)',
      InstructionRescheduled: '(PolymeshPrimitivesIdentityId,u64)',
      VenueSignersUpdated: '(PolymeshPrimitivesIdentityId,u64,Vec<AccountId32>,bool)',
      SettlementManuallyExecuted: '(PolymeshPrimitivesIdentityId,u64)',
      InstructionCreated: '(PolymeshPrimitivesIdentityId,Option<u64>,u64,PolymeshPrimitivesSettlementSettlementType,Option<u64>,Option<u64>,Vec<PolymeshPrimitivesSettlementLeg>,Option<PolymeshPrimitivesMemo>)',
      FailedToExecuteInstruction: '(u64,SpRuntimeDispatchError)',
      InstructionAutomaticallyAffirmed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityIdPortfolioId,u64)',
      MediatorAffirmationReceived: '(PolymeshPrimitivesIdentityId,u64,Option<u64>)',
      MediatorAffirmationWithdrawn: '(PolymeshPrimitivesIdentityId,u64)',
      InstructionMediators: '(u64,BTreeSet<PolymeshPrimitivesIdentityId>)'
    }
  },
  /**
   * Lookup241: polymesh_primitives::settlement::VenueType
   **/
  PolymeshPrimitivesSettlementVenueType: {
    _enum: ['Other', 'Distribution', 'Sto', 'Exchange']
  },
  /**
   * Lookup244: polymesh_primitives::settlement::ReceiptMetadata
   **/
  PolymeshPrimitivesSettlementReceiptMetadata: '[u8;32]',
  /**
   * Lookup247: polymesh_primitives::settlement::SettlementType<BlockNumber>
   **/
  PolymeshPrimitivesSettlementSettlementType: {
    _enum: {
      SettleOnAffirmation: 'Null',
      SettleOnBlock: 'u32',
      SettleManual: 'u32'
    }
  },
  /**
   * Lookup249: polymesh_primitives::settlement::Leg
   **/
  PolymeshPrimitivesSettlementLeg: {
    _enum: {
      Fungible: {
        sender: 'PolymeshPrimitivesIdentityIdPortfolioId',
        receiver: 'PolymeshPrimitivesIdentityIdPortfolioId',
        assetId: 'PolymeshPrimitivesAssetAssetId',
        amount: 'u128',
      },
      NonFungible: {
        sender: 'PolymeshPrimitivesIdentityIdPortfolioId',
        receiver: 'PolymeshPrimitivesIdentityIdPortfolioId',
        nfts: 'PolymeshPrimitivesNftNfTs',
      },
      OffChain: {
        senderIdentity: 'PolymeshPrimitivesIdentityId',
        receiverIdentity: 'PolymeshPrimitivesIdentityId',
        ticker: 'PolymeshPrimitivesTicker',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup250: pallet_statistics::pallet::Event<T>
   **/
  PalletStatisticsEvent: {
    _enum: {
      StatTypesAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<PolymeshPrimitivesStatisticsStatType>)',
      StatTypesRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<PolymeshPrimitivesStatisticsStatType>)',
      AssetStatsUpdated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesStatisticsStatType,Vec<PolymeshPrimitivesStatisticsStatUpdate>)',
      SetAssetTransferCompliance: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,Vec<PolymeshPrimitivesTransferComplianceTransferCondition>)',
      TransferConditionExemptionsAdded: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,Vec<PolymeshPrimitivesIdentityId>)',
      TransferConditionExemptionsRemoved: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,Vec<PolymeshPrimitivesIdentityId>)'
    }
  },
  /**
   * Lookup252: polymesh_primitives::statistics::StatType
   **/
  PolymeshPrimitivesStatisticsStatType: {
    operationType: 'PolymeshPrimitivesStatisticsStatOpType',
    claimIssuer: 'Option<(PolymeshPrimitivesIdentityClaimClaimType,PolymeshPrimitivesIdentityId)>'
  },
  /**
   * Lookup253: polymesh_primitives::statistics::StatOpType
   **/
  PolymeshPrimitivesStatisticsStatOpType: {
    _enum: ['Count', 'Balance']
  },
  /**
   * Lookup257: polymesh_primitives::statistics::StatUpdate
   **/
  PolymeshPrimitivesStatisticsStatUpdate: {
    key2: 'PolymeshPrimitivesStatisticsStat2ndKey',
    value: 'Option<u128>'
  },
  /**
   * Lookup258: polymesh_primitives::statistics::Stat2ndKey
   **/
  PolymeshPrimitivesStatisticsStat2ndKey: {
    _enum: {
      NoClaimStat: 'Null',
      Claim: 'PolymeshPrimitivesStatisticsStatClaim'
    }
  },
  /**
   * Lookup259: polymesh_primitives::statistics::StatClaim
   **/
  PolymeshPrimitivesStatisticsStatClaim: {
    _enum: {
      Accredited: 'bool',
      Affiliate: 'bool',
      Jurisdiction: 'Option<PolymeshPrimitivesJurisdictionCountryCode>'
    }
  },
  /**
   * Lookup263: polymesh_primitives::transfer_compliance::TransferCondition
   **/
  PolymeshPrimitivesTransferComplianceTransferCondition: {
    _enum: {
      MaxInvestorCount: 'u64',
      MaxInvestorOwnership: 'Permill',
      ClaimCount: '(PolymeshPrimitivesStatisticsStatClaim,PolymeshPrimitivesIdentityId,u64,Option<u64>)',
      ClaimOwnership: '(PolymeshPrimitivesStatisticsStatClaim,PolymeshPrimitivesIdentityId,Permill,Permill)'
    }
  },
  /**
   * Lookup264: polymesh_primitives::transfer_compliance::TransferConditionExemptKey
   **/
  PolymeshPrimitivesTransferComplianceTransferConditionExemptKey: {
    assetId: 'PolymeshPrimitivesAssetAssetId',
    op: 'PolymeshPrimitivesStatisticsStatOpType',
    claimType: 'Option<PolymeshPrimitivesIdentityClaimClaimType>'
  },
  /**
   * Lookup266: pallet_sto::pallet::Event<T>
   **/
  PalletStoEvent: {
    _enum: {
      FundraiserCreated: '(PolymeshPrimitivesIdentityId,u64,Bytes,PalletStoFundraiser)',
      Invested: '(PolymeshPrimitivesIdentityId,u64,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAssetAssetId,u128,u128)',
      FundraiserFrozen: '(PolymeshPrimitivesIdentityId,u64)',
      FundraiserUnfrozen: '(PolymeshPrimitivesIdentityId,u64)',
      FundraiserWindowModified: '(PolymeshPrimitivesEventOnly,u64,u64,Option<u64>,u64,Option<u64>)',
      FundraiserClosed: '(PolymeshPrimitivesIdentityId,u64)'
    }
  },
  /**
   * Lookup269: pallet_sto::Fundraiser<Moment>
   **/
  PalletStoFundraiser: {
    creator: 'PolymeshPrimitivesIdentityId',
    offeringPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
    offeringAsset: 'PolymeshPrimitivesAssetAssetId',
    raisingPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
    raisingAsset: 'PolymeshPrimitivesAssetAssetId',
    tiers: 'Vec<PalletStoFundraiserTier>',
    venueId: 'u64',
    start: 'u64',
    end: 'Option<u64>',
    status: 'PalletStoFundraiserStatus',
    minimumInvestment: 'u128'
  },
  /**
   * Lookup271: pallet_sto::FundraiserTier
   **/
  PalletStoFundraiserTier: {
    total: 'u128',
    price: 'u128',
    remaining: 'u128'
  },
  /**
   * Lookup272: pallet_sto::FundraiserStatus
   **/
  PalletStoFundraiserStatus: {
    _enum: ['Live', 'Frozen', 'Closed', 'ClosedEarly']
  },
  /**
   * Lookup273: pallet_treasury::pallet::Event<T>
   **/
  PalletTreasuryEvent: {
    _enum: {
      TreasuryDisbursement: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId,AccountId32,u128)',
      TreasuryDisbursementFailed: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesIdentityId,AccountId32,u128)',
      TreasuryReimbursement: '(PolymeshPrimitivesIdentityId,u128)'
    }
  },
  /**
   * Lookup274: pallet_utility::pallet::Event<T>
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      RelayedTx: {
        callerDid: 'PolymeshPrimitivesIdentityId',
        target: 'AccountId32',
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup275: pallet_base::pallet::Event
   **/
  PalletBaseEvent: {
    _enum: {
      UnexpectedError: 'Option<SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup277: pallet_external_agents::pallet::Event<T>
   **/
  PalletExternalAgentsEvent: {
    _enum: {
      GroupCreated: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesAssetAssetId,u32,PolymeshPrimitivesSecondaryKeyExtrinsicPermissions)',
      GroupPermissionsUpdated: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesAssetAssetId,u32,PolymeshPrimitivesSecondaryKeyExtrinsicPermissions)',
      AgentAdded: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesAgentAgentGroup)',
      AgentRemoved: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityId)',
      GroupChanged: '(PolymeshPrimitivesEventOnly,PolymeshPrimitivesAssetAssetId,PolymeshPrimitivesIdentityId,PolymeshPrimitivesAgentAgentGroup)'
    }
  },
  /**
   * Lookup278: pallet_relayer::pallet::Event<T>
   **/
  PalletRelayerEvent: {
    _enum: {
      AuthorizedPayingKey: '(PolymeshPrimitivesEventOnly,AccountId32,AccountId32,u128,u64)',
      AcceptedPayingKey: '(PolymeshPrimitivesEventOnly,AccountId32,AccountId32)',
      RemovedPayingKey: '(PolymeshPrimitivesEventOnly,AccountId32,AccountId32)',
      UpdatedPolyxLimit: '(PolymeshPrimitivesEventOnly,AccountId32,AccountId32,u128,u128)'
    }
  },
  /**
   * Lookup279: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'AccountId32',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup280: polymesh_contracts::pallet::Event<T>
   **/
  PolymeshContractsEvent: {
    _enum: {
      ApiHashUpdated: '(PolymeshContractsApi,PolymeshContractsChainVersion,H256)',
      SCRuntimeCall: '(AccountId32,PolymeshContractsChainExtensionExtrinsicId)'
    }
  },
  /**
   * Lookup281: polymesh_contracts::Api
   **/
  PolymeshContractsApi: {
    desc: '[u8;4]',
    major: 'u32'
  },
  /**
   * Lookup282: polymesh_contracts::ChainVersion
   **/
  PolymeshContractsChainVersion: {
    specVersion: 'u32',
    txVersion: 'u32'
  },
  /**
   * Lookup283: polymesh_contracts::chain_extension::ExtrinsicId
   **/
  PolymeshContractsChainExtensionExtrinsicId: '(u8,u8)',
  /**
   * Lookup284: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup285: pallet_nft::pallet::Event<T>
   **/
  PalletNftEvent: {
    _enum: {
      NftCollectionCreated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesAssetAssetId,u64)',
      NFTPortfolioUpdated: '(PolymeshPrimitivesIdentityId,PolymeshPrimitivesNftNfTs,Option<PolymeshPrimitivesIdentityIdPortfolioId>,Option<PolymeshPrimitivesIdentityIdPortfolioId>,PolymeshPrimitivesPortfolioPortfolioUpdateReason)'
    }
  },
  /**
   * Lookup287: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<AccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        score: 'SpNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiPhasePhase',
        to: 'PalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup288: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup289: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup290: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup292: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup295: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup297: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup301: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup302: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup303: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup305: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup306: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup307: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup308: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup313: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup316: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup319: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup321: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup325: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup326: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfOutput: '[u8;32]',
    vrfProof: '[u8;64]'
  },
  /**
   * Lookup327: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup328: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfOutput: '[u8;32]',
    vrfProof: '[u8;64]'
  },
  /**
   * Lookup329: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup333: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup334: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup335: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup336: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup337: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup338: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup339: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup341: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup343: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup345: pallet_balances::pallet::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup346: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup347: pallet_balances::pallet::Call<T>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_with_memo: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        memo: 'Option<PolymeshPrimitivesMemo>',
      },
      deposit_block_reward_reserve_balance: {
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      burn_account_balance: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup348: pallet_balances::pallet::Error<T>
   **/
  PalletBalancesError: {
    _enum: ['LiquidityRestrictions', 'Overflow', 'InsufficientBalance', 'ExistentialDeposit', 'ReceiverCddMissing']
  },
  /**
   * Lookup350: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup351: pallet_transaction_payment::pallet::Call<T>
   **/
  PalletTransactionPaymentCall: {
    _enum: {
      set_disable_fees: {
        value: 'bool'
      }
    }
  },
  /**
   * Lookup353: sp_weights::WeightToFeeCoefficient<Balance>
   **/
  SpWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup354: polymesh_primitives::identity::DidRecord<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesIdentityDidRecord: {
    primaryKey: 'Option<AccountId32>'
  },
  /**
   * Lookup356: pallet_identity::types::Claim1stKey
   **/
  PalletIdentityClaim1stKey: {
    target: 'PolymeshPrimitivesIdentityId',
    claimType: 'PolymeshPrimitivesIdentityClaimClaimType'
  },
  /**
   * Lookup357: pallet_identity::types::Claim2ndKey
   **/
  PalletIdentityClaim2ndKey: {
    issuer: 'PolymeshPrimitivesIdentityId',
    scope: 'Option<PolymeshPrimitivesIdentityClaimScope>'
  },
  /**
   * Lookup358: polymesh_primitives::secondary_key::KeyRecord<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesSecondaryKeyKeyRecord: {
    _enum: {
      PrimaryKey: 'PolymeshPrimitivesIdentityId',
      SecondaryKey: 'PolymeshPrimitivesIdentityId',
      MultiSigSignerKey: 'AccountId32'
    }
  },
  /**
   * Lookup361: polymesh_primitives::secondary_key::Signatory<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesSecondaryKeySignatory: {
    _enum: {
      Identity: 'PolymeshPrimitivesIdentityId',
      Account: 'AccountId32'
    }
  },
  /**
   * Lookup362: polymesh_primitives::authorization::Authorization<sp_core::crypto::AccountId32, Moment>
   **/
  PolymeshPrimitivesAuthorization: {
    authorizationData: 'PolymeshPrimitivesAuthorizationAuthorizationData',
    authorizedBy: 'PolymeshPrimitivesIdentityId',
    expiry: 'Option<u64>',
    authId: 'u64',
    count: 'u32'
  },
  /**
   * Lookup366: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      cdd_register_did: {
        targetAccount: 'AccountId32',
        secondaryKeys: 'Vec<PolymeshPrimitivesSecondaryKey>',
      },
      invalidate_cdd_claims: {
        cdd: 'PolymeshPrimitivesIdentityId',
        disableFrom: 'u64',
        expiry: 'Option<u64>',
      },
      accept_primary_key: {
        rotationAuthId: 'u64',
        optionalCddAuthId: 'Option<u64>',
      },
      change_cdd_requirement_for_mk_rotation: {
        authRequired: 'bool',
      },
      join_identity_as_key: {
        authId: 'u64',
      },
      leave_identity_as_key: 'Null',
      add_claim: {
        target: 'PolymeshPrimitivesIdentityId',
        claim: 'PolymeshPrimitivesIdentityClaimClaim',
        expiry: 'Option<u64>',
      },
      revoke_claim: {
        target: 'PolymeshPrimitivesIdentityId',
        claim: 'PolymeshPrimitivesIdentityClaimClaim',
      },
      freeze_secondary_keys: 'Null',
      unfreeze_secondary_keys: 'Null',
      add_authorization: {
        target: 'PolymeshPrimitivesSecondaryKeySignatory',
        data: 'PolymeshPrimitivesAuthorizationAuthorizationData',
        expiry: 'Option<u64>',
      },
      remove_authorization: {
        target: 'PolymeshPrimitivesSecondaryKeySignatory',
        authId: 'u64',
        authIssuerPays: 'bool',
      },
      gc_add_cdd_claim: {
        target: 'PolymeshPrimitivesIdentityId',
      },
      gc_revoke_cdd_claim: {
        target: 'PolymeshPrimitivesIdentityId',
      },
      revoke_claim_by_index: {
        target: 'PolymeshPrimitivesIdentityId',
        claimType: 'PolymeshPrimitivesIdentityClaimClaimType',
        scope: 'Option<PolymeshPrimitivesIdentityClaimScope>',
      },
      rotate_primary_key_to_secondary: {
        authId: 'u64',
        optionalCddAuthId: 'Option<u64>',
      },
      add_secondary_keys_with_authorization: {
        additionalKeys: 'Vec<PolymeshCommonUtilitiesIdentitySecondaryKeyWithAuth>',
        expiresAt: 'u64',
      },
      set_secondary_key_permissions: {
        key: 'AccountId32',
        perms: 'PolymeshPrimitivesSecondaryKeyPermissions',
      },
      remove_secondary_keys: {
        keysToRemove: 'Vec<AccountId32>',
      },
      register_custom_claim_type: {
        ty: 'Bytes',
      },
      cdd_register_did_with_cdd: {
        targetAccount: 'AccountId32',
        secondaryKeys: 'Vec<PolymeshPrimitivesSecondaryKey>',
        expiry: 'Option<u64>',
      },
      create_child_identity: {
        secondaryKey: 'AccountId32',
      },
      create_child_identities: {
        childKeys: 'Vec<PolymeshCommonUtilitiesIdentityCreateChildIdentityWithAuth>',
        expiresAt: 'u64',
      },
      unlink_child_identity: {
        childDid: 'PolymeshPrimitivesIdentityId'
      }
    }
  },
  /**
   * Lookup368: polymesh_common_utilities::traits::identity::SecondaryKeyWithAuth<sp_core::crypto::AccountId32>
   **/
  PolymeshCommonUtilitiesIdentitySecondaryKeyWithAuth: {
    secondaryKey: 'PolymeshPrimitivesSecondaryKey',
    authSignature: 'H512'
  },
  /**
   * Lookup371: polymesh_common_utilities::traits::identity::CreateChildIdentityWithAuth<sp_core::crypto::AccountId32>
   **/
  PolymeshCommonUtilitiesIdentityCreateChildIdentityWithAuth: {
    key: 'AccountId32',
    authSignature: 'H512'
  },
  /**
   * Lookup372: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['AlreadyLinked', 'MissingIdentity', 'Unauthorized', 'InvalidAccountKey', 'UnAuthorizedCddProvider', 'InvalidAuthorizationFromOwner', 'InvalidAuthorizationFromCddProvider', 'NotCddProviderAttestation', 'AuthorizationsNotForSameDids', 'DidMustAlreadyExist', 'AuthorizationExpired', 'TargetHasNoCdd', 'AuthorizationHasBeenRevoked', 'InvalidAuthorizationSignature', 'KeyNotAllowed', 'NotPrimaryKey', 'DidDoesNotExist', 'DidAlreadyExists', 'SecondaryKeysContainPrimaryKey', 'FailedToChargeFee', 'NotASigner', 'CannotDecodeSignerAccountId', 'AccountKeyIsBeingUsed', 'CustomScopeTooLong', 'CustomClaimTypeAlreadyExists', 'CustomClaimTypeDoesNotExist', 'ClaimDoesNotExist', 'IsChildIdentity', 'NoParentIdentity', 'NotParentOrChildIdentity', 'DuplicateKey', 'ExceptNotAllowedForExtrinsics', 'ExceededNumberOfGivenAuths', 'BadAuthorizationType', 'InvalidAuthorization']
  },
  /**
   * Lookup374: polymesh_primitives::traits::group::InactiveMember<Moment>
   **/
  PolymeshPrimitivesGroupInactiveMember: {
    id: 'PolymeshPrimitivesIdentityId',
    deactivatedAt: 'u64',
    expiry: 'Option<u64>'
  },
  /**
   * Lookup375: pallet_group::pallet::Call<T, I>
   **/
  PalletGroupCall: {
    _enum: {
      set_active_members_limit: {
        limit: 'u32',
      },
      disable_member: {
        who: 'PolymeshPrimitivesIdentityId',
        expiry: 'Option<u64>',
        at: 'Option<u64>',
      },
      add_member: {
        who: 'PolymeshPrimitivesIdentityId',
      },
      remove_member: {
        who: 'PolymeshPrimitivesIdentityId',
      },
      swap_member: {
        remove: 'PolymeshPrimitivesIdentityId',
        add: 'PolymeshPrimitivesIdentityId',
      },
      reset_members: {
        members: 'Vec<PolymeshPrimitivesIdentityId>',
      },
      abdicate_membership: 'Null'
    }
  },
  /**
   * Lookup376: pallet_group::pallet::Error<T, I>
   **/
  PalletGroupError: {
    _enum: ['OnlyPrimaryKeyAllowed', 'DuplicateMember', 'NoSuchMember', 'LastMemberCannotQuit', 'ActiveMembersLimitExceeded', 'ActiveMembersLimitOverflow']
  },
  /**
   * Lookup378: pallet_committee::pallet::Call<T, I>
   **/
  PalletCommitteeCall: {
    _enum: {
      set_vote_threshold: {
        n: 'u32',
        d: 'u32',
      },
      set_release_coordinator: {
        id: 'PolymeshPrimitivesIdentityId',
      },
      set_expires_after: {
        expiry: 'PolymeshPrimitivesMaybeBlock',
      },
      vote_or_propose: {
        approve: 'bool',
        call: 'Call',
      },
      vote: {
        proposal: 'H256',
        index: 'u32',
        approve: 'bool'
      }
    }
  },
  /**
   * Lookup384: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      create_multisig: {
        signers: 'Vec<AccountId32>',
        sigsRequired: 'u64',
        permissions: 'Option<PolymeshPrimitivesSecondaryKeyPermissions>',
      },
      create_proposal: {
        multisig: 'AccountId32',
        proposal: 'Call',
        expiry: 'Option<u64>',
      },
      approve: {
        multisig: 'AccountId32',
        proposalId: 'u64',
        maxWeight: 'Option<SpWeightsWeightV2Weight>',
      },
      reject: {
        multisig: 'AccountId32',
        proposalId: 'u64',
      },
      accept_multisig_signer: {
        authId: 'u64',
      },
      add_multisig_signers: {
        signers: 'Vec<AccountId32>',
      },
      remove_multisig_signers: {
        signers: 'Vec<AccountId32>',
      },
      add_multisig_signers_via_admin: {
        multisig: 'AccountId32',
        signers: 'Vec<AccountId32>',
      },
      remove_multisig_signers_via_admin: {
        multisig: 'AccountId32',
        signers: 'Vec<AccountId32>',
      },
      change_sigs_required: {
        sigsRequired: 'u64',
      },
      change_sigs_required_via_admin: {
        multisig: 'AccountId32',
        signaturesRequired: 'u64',
      },
      add_admin: {
        adminDid: 'PolymeshPrimitivesIdentityId',
      },
      remove_admin_via_admin: {
        multisig: 'AccountId32',
      },
      remove_payer: 'Null',
      remove_payer_via_payer: {
        multisig: 'AccountId32',
      },
      approve_join_identity: {
        multisig: 'AccountId32',
        authId: 'u64',
      },
      join_identity: {
        authId: 'u64',
      },
      remove_admin: 'Null'
    }
  },
  /**
   * Lookup386: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      add_permissioned_validator: {
        identity: 'PolymeshPrimitivesIdentityId',
        intendedCount: 'Option<u32>',
      },
      remove_permissioned_validator: {
        identity: 'PolymeshPrimitivesIdentityId',
      },
      validate_cdd_expiry_nominators: {
        targets: 'Vec<AccountId32>',
      },
      payout_stakers_by_system: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      change_slashing_allowed_for: {
        slashingSwitch: 'PalletStakingSlashingSwitch',
      },
      update_permissioned_validator_intended_count: {
        identity: 'PolymeshPrimitivesIdentityId',
        newIntendedCount: 'u32',
      },
      chill_from_governance: {
        identity: 'PolymeshPrimitivesIdentityId',
        stashKeys: 'Vec<AccountId32>',
      },
      set_commission_cap: {
        newCap: 'Perbill'
      }
    }
  },
  /**
   * Lookup387: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup391: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup392: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup393: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup394: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup396: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'PolymeshRuntimeDevelopRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup397: polymesh_runtime_develop::runtime::SessionKeys
   **/
  PolymeshRuntimeDevelopRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup398: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup399: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup400: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup401: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup402: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup403: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup404: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup405: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup407: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup408: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup410: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup411: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup412: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'OpaquePeerId',
    externalAddresses: 'Vec<OpaqueMultiaddr>'
  },
  /**
   * Lookup416: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup417: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup418: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup419: pallet_asset::pallet::Call<T>
   **/
  PalletAssetCall: {
    _enum: {
      register_unique_ticker: {
        ticker: 'PolymeshPrimitivesTicker',
      },
      accept_ticker_transfer: {
        authId: 'u64',
      },
      accept_asset_ownership_transfer: {
        authId: 'u64',
      },
      create_asset: {
        assetName: 'Bytes',
        divisible: 'bool',
        assetType: 'PolymeshPrimitivesAssetAssetType',
        assetIdentifiers: 'Vec<PolymeshPrimitivesAssetIdentifier>',
        fundingRoundName: 'Option<Bytes>',
      },
      freeze: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      unfreeze: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      rename_asset: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        assetName: 'Bytes',
      },
      issue: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        amount: 'u128',
        portfolioKind: 'PolymeshPrimitivesIdentityIdPortfolioKind',
      },
      redeem: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        value: 'u128',
        portfolioKind: 'PolymeshPrimitivesIdentityIdPortfolioKind',
      },
      make_divisible: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      add_documents: {
        docs: 'Vec<PolymeshPrimitivesDocument>',
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      remove_documents: {
        docsId: 'Vec<u32>',
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      set_funding_round: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        fundingRoundName: 'Bytes',
      },
      update_identifiers: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        assetIdentifiers: 'Vec<PolymeshPrimitivesAssetIdentifier>',
      },
      controller_transfer: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        value: 'u128',
        fromPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
      },
      register_custom_asset_type: {
        ty: 'Bytes',
      },
      create_asset_with_custom_type: {
        assetName: 'Bytes',
        divisible: 'bool',
        customAssetType: 'Bytes',
        assetIdentifiers: 'Vec<PolymeshPrimitivesAssetIdentifier>',
        fundingRoundName: 'Option<Bytes>',
      },
      set_asset_metadata: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        key: 'PolymeshPrimitivesAssetMetadataAssetMetadataKey',
        value: 'Bytes',
        detail: 'Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>',
      },
      set_asset_metadata_details: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        key: 'PolymeshPrimitivesAssetMetadataAssetMetadataKey',
        detail: 'PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail',
      },
      register_and_set_local_asset_metadata: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        name: 'Bytes',
        spec: 'PolymeshPrimitivesAssetMetadataAssetMetadataSpec',
        value: 'Bytes',
        detail: 'Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>',
      },
      register_asset_metadata_local_type: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        name: 'Bytes',
        spec: 'PolymeshPrimitivesAssetMetadataAssetMetadataSpec',
      },
      register_asset_metadata_global_type: {
        name: 'Bytes',
        spec: 'PolymeshPrimitivesAssetMetadataAssetMetadataSpec',
      },
      update_asset_type: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        assetType: 'PolymeshPrimitivesAssetAssetType',
      },
      remove_local_metadata_key: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        localKey: 'u64',
      },
      remove_metadata_value: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        metadataKey: 'PolymeshPrimitivesAssetMetadataAssetMetadataKey',
      },
      exempt_asset_affirmation: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      remove_asset_affirmation_exemption: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      pre_approve_asset: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      remove_asset_pre_approval: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      add_mandatory_mediators: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        mediators: 'BTreeSet<PolymeshPrimitivesIdentityId>',
      },
      remove_mandatory_mediators: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        mediators: 'BTreeSet<PolymeshPrimitivesIdentityId>',
      },
      link_ticker_to_asset_id: {
        ticker: 'PolymeshPrimitivesTicker',
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      unlink_ticker_from_asset_id: {
        ticker: 'PolymeshPrimitivesTicker',
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      update_global_metadata_spec: {
        assetMetadataName: 'Bytes',
        assetMetadataSpec: 'PolymeshPrimitivesAssetMetadataAssetMetadataSpec'
      }
    }
  },
  /**
   * Lookup422: pallet_corporate_actions::distribution::pallet::Call<T>
   **/
  PalletCorporateActionsDistributionPalletCall: {
    _enum: {
      distribute: {
        caId: 'PalletCorporateActionsCaId',
        portfolio: 'Option<u64>',
        currency: 'PolymeshPrimitivesAssetAssetId',
        perShare: 'u128',
        amount: 'u128',
        paymentAt: 'u64',
        expiresAt: 'Option<u64>',
      },
      claim: {
        caId: 'PalletCorporateActionsCaId',
      },
      push_benefit: {
        caId: 'PalletCorporateActionsCaId',
        holder: 'PolymeshPrimitivesIdentityId',
      },
      reclaim: {
        caId: 'PalletCorporateActionsCaId',
      },
      remove_distribution: {
        caId: 'PalletCorporateActionsCaId'
      }
    }
  },
  /**
   * Lookup424: pallet_asset::checkpoint::pallet::Call<T>
   **/
  PalletAssetCheckpointPalletCall: {
    _enum: {
      create_checkpoint: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      set_schedules_max_complexity: {
        maxComplexity: 'u64',
      },
      create_schedule: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        schedule: 'PolymeshCommonUtilitiesCheckpointScheduleCheckpoints',
      },
      remove_schedule: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64'
      }
    }
  },
  /**
   * Lookup425: pallet_compliance_manager::pallet::Call<T>
   **/
  PalletComplianceManagerCall: {
    _enum: {
      add_compliance_requirement: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        senderConditions: 'Vec<PolymeshPrimitivesCondition>',
        receiverConditions: 'Vec<PolymeshPrimitivesCondition>',
      },
      remove_compliance_requirement: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        id: 'u32',
      },
      replace_asset_compliance: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        assetCompliance: 'Vec<PolymeshPrimitivesComplianceManagerComplianceRequirement>',
      },
      reset_asset_compliance: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      pause_asset_compliance: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      resume_asset_compliance: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      add_default_trusted_claim_issuer: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        issuer: 'PolymeshPrimitivesConditionTrustedIssuer',
      },
      remove_default_trusted_claim_issuer: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        issuer: 'PolymeshPrimitivesIdentityId',
      },
      change_compliance_requirement: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        newReq: 'PolymeshPrimitivesComplianceManagerComplianceRequirement'
      }
    }
  },
  /**
   * Lookup426: pallet_corporate_actions::pallet::Call<T>
   **/
  PalletCorporateActionsCall: {
    _enum: {
      set_max_details_length: {
        length: 'u32',
      },
      set_default_targets: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        targets: 'PalletCorporateActionsTargetIdentities',
      },
      set_default_withholding_tax: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        tax: 'Permill',
      },
      set_did_withholding_tax: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        taxedDid: 'PolymeshPrimitivesIdentityId',
        tax: 'Option<Permill>',
      },
      initiate_corporate_action: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        kind: 'PalletCorporateActionsCaKind',
        declDate: 'u64',
        recordDate: 'Option<PalletCorporateActionsRecordDateSpec>',
        details: 'Bytes',
        targets: 'Option<PalletCorporateActionsTargetIdentities>',
        defaultWithholdingTax: 'Option<Permill>',
        withholdingTax: 'Option<Vec<(PolymeshPrimitivesIdentityId,Permill)>>',
      },
      link_ca_doc: {
        id: 'PalletCorporateActionsCaId',
        docs: 'Vec<u32>',
      },
      remove_ca: {
        caId: 'PalletCorporateActionsCaId',
      },
      change_record_date: {
        caId: 'PalletCorporateActionsCaId',
        recordDate: 'Option<PalletCorporateActionsRecordDateSpec>',
      },
      initiate_corporate_action_and_distribute: {
        caArgs: 'PalletCorporateActionsInitiateCorporateActionArgs',
        portfolio: 'Option<u64>',
        currency: 'PolymeshPrimitivesAssetAssetId',
        perShare: 'u128',
        amount: 'u128',
        paymentAt: 'u64',
        expiresAt: 'Option<u64>',
      },
      initiate_corporate_action_and_ballot: {
        caArgs: 'PalletCorporateActionsInitiateCorporateActionArgs',
        ballotTimeRange: 'PalletCorporateActionsBallotBallotTimeRange',
        ballotMeta: 'PalletCorporateActionsBallotBallotMeta',
        rcv: 'bool'
      }
    }
  },
  /**
   * Lookup428: pallet_corporate_actions::RecordDateSpec
   **/
  PalletCorporateActionsRecordDateSpec: {
    _enum: {
      Scheduled: 'u64',
      ExistingSchedule: 'u64',
      Existing: 'u64'
    }
  },
  /**
   * Lookup431: pallet_corporate_actions::InitiateCorporateActionArgs
   **/
  PalletCorporateActionsInitiateCorporateActionArgs: {
    assetId: 'PolymeshPrimitivesAssetAssetId',
    kind: 'PalletCorporateActionsCaKind',
    declDate: 'u64',
    recordDate: 'Option<PalletCorporateActionsRecordDateSpec>',
    details: 'Bytes',
    targets: 'Option<PalletCorporateActionsTargetIdentities>',
    defaultWithholdingTax: 'Option<Permill>',
    withholdingTax: 'Option<Vec<(PolymeshPrimitivesIdentityId,Permill)>>'
  },
  /**
   * Lookup432: pallet_corporate_actions::ballot::pallet::Call<T>
   **/
  PalletCorporateActionsBallotPalletCall: {
    _enum: {
      attach_ballot: {
        caId: 'PalletCorporateActionsCaId',
        range: 'PalletCorporateActionsBallotBallotTimeRange',
        meta: 'PalletCorporateActionsBallotBallotMeta',
        rcv: 'bool',
      },
      vote: {
        caId: 'PalletCorporateActionsCaId',
        votes: 'Vec<PalletCorporateActionsBallotBallotVote>',
      },
      change_end: {
        caId: 'PalletCorporateActionsCaId',
        end: 'u64',
      },
      change_meta: {
        caId: 'PalletCorporateActionsCaId',
        meta: 'PalletCorporateActionsBallotBallotMeta',
      },
      change_rcv: {
        caId: 'PalletCorporateActionsCaId',
        rcv: 'bool',
      },
      remove_ballot: {
        caId: 'PalletCorporateActionsCaId'
      }
    }
  },
  /**
   * Lookup433: pallet_pips::pallet::Call<T>
   **/
  PalletPipsCall: {
    _enum: {
      set_prune_historical_pips: {
        prune: 'bool',
      },
      set_min_proposal_deposit: {
        deposit: 'u128',
      },
      set_default_enactment_period: {
        duration: 'u32',
      },
      set_pending_pip_expiry: {
        expiry: 'PolymeshPrimitivesMaybeBlock',
      },
      set_max_pip_skip_count: {
        max: 'u8',
      },
      set_active_pip_limit: {
        limit: 'u32',
      },
      propose: {
        proposal: 'Call',
        deposit: 'u128',
        url: 'Option<Bytes>',
        description: 'Option<Bytes>',
      },
      vote: {
        id: 'u32',
        ayeOrNay: 'bool',
        deposit: 'u128',
      },
      approve_committee_proposal: {
        id: 'u32',
      },
      reject_proposal: {
        id: 'u32',
      },
      prune_proposal: {
        id: 'u32',
      },
      reschedule_execution: {
        id: 'u32',
        until: 'Option<u32>',
      },
      clear_snapshot: 'Null',
      snapshot: 'Null',
      enact_snapshot_results: {
        results: 'Vec<(u32,PalletPipsSnapshotResult)>',
      },
      execute_scheduled_pip: {
        id: 'u32',
      },
      expire_scheduled_pip: {
        did: 'PolymeshPrimitivesIdentityId',
        id: 'u32'
      }
    }
  },
  /**
   * Lookup436: pallet_pips::types::SnapshotResult
   **/
  PalletPipsSnapshotResult: {
    _enum: ['Approve', 'Reject', 'Skip']
  },
  /**
   * Lookup437: pallet_portfolio::pallet::Call<T>
   **/
  PalletPortfolioCall: {
    _enum: {
      create_portfolio: {
        name: 'Bytes',
      },
      delete_portfolio: {
        num: 'u64',
      },
      rename_portfolio: {
        num: 'u64',
        toName: 'Bytes',
      },
      quit_portfolio_custody: {
        pid: 'PolymeshPrimitivesIdentityIdPortfolioId',
      },
      accept_portfolio_custody: {
        authId: 'u64',
      },
      move_portfolio_funds: {
        from: 'PolymeshPrimitivesIdentityIdPortfolioId',
        to: 'PolymeshPrimitivesIdentityIdPortfolioId',
        funds: 'Vec<PolymeshPrimitivesPortfolioFund>',
      },
      pre_approve_portfolio: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        portfolioId: 'PolymeshPrimitivesIdentityIdPortfolioId',
      },
      remove_portfolio_pre_approval: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        portfolioId: 'PolymeshPrimitivesIdentityIdPortfolioId',
      },
      allow_identity_to_create_portfolios: {
        trustedIdentity: 'PolymeshPrimitivesIdentityId',
      },
      revoke_create_portfolios_permission: {
        identity: 'PolymeshPrimitivesIdentityId',
      },
      create_custody_portfolio: {
        portfolioOwnerId: 'PolymeshPrimitivesIdentityId',
        portfolioName: 'Bytes'
      }
    }
  },
  /**
   * Lookup439: polymesh_primitives::portfolio::Fund
   **/
  PolymeshPrimitivesPortfolioFund: {
    description: 'PolymeshPrimitivesPortfolioFundDescription',
    memo: 'Option<PolymeshPrimitivesMemo>'
  },
  /**
   * Lookup440: pallet_protocol_fee::pallet::Call<T>
   **/
  PalletProtocolFeeCall: {
    _enum: {
      change_coefficient: {
        coefficient: 'PolymeshPrimitivesPosRatio',
      },
      change_base_fee: {
        op: 'PolymeshCommonUtilitiesProtocolFeeProtocolOp',
        baseFee: 'u128'
      }
    }
  },
  /**
   * Lookup441: polymesh_common_utilities::protocol_fee::ProtocolOp
   **/
  PolymeshCommonUtilitiesProtocolFeeProtocolOp: {
    _enum: ['AssetRegisterTicker', 'AssetIssue', 'AssetAddDocuments', 'AssetCreateAsset', 'CheckpointCreateSchedule', 'ComplianceManagerAddComplianceRequirement', 'IdentityCddRegisterDid', 'IdentityAddClaim', 'IdentityAddSecondaryKeysWithAuthorization', 'PipsPropose', 'ContractsPutCode', 'CorporateBallotAttachBallot', 'CapitalDistributionDistribute', 'NFTCreateCollection', 'NFTMint', 'IdentityCreateChildIdentity']
  },
  /**
   * Lookup442: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup444: pallet_settlement::pallet::Call<T>
   **/
  PalletSettlementCall: {
    _enum: {
      create_venue: {
        details: 'Bytes',
        signers: 'Vec<AccountId32>',
        typ: 'PolymeshPrimitivesSettlementVenueType',
      },
      update_venue_details: {
        id: 'u64',
        details: 'Bytes',
      },
      update_venue_type: {
        id: 'u64',
        typ: 'PolymeshPrimitivesSettlementVenueType',
      },
      affirm_with_receipts: {
        id: 'u64',
        receiptDetails: 'Vec<PolymeshPrimitivesSettlementReceiptDetails>',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
      },
      set_venue_filtering: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        enabled: 'bool',
      },
      allow_venues: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        venues: 'Vec<u64>',
      },
      disallow_venues: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        venues: 'Vec<u64>',
      },
      update_venue_signers: {
        id: 'u64',
        signers: 'Vec<AccountId32>',
        addSigners: 'bool',
      },
      execute_manual_instruction: {
        id: 'u64',
        portfolio: 'Option<PolymeshPrimitivesIdentityIdPortfolioId>',
        fungibleTransfers: 'u32',
        nftsTransfers: 'u32',
        offchainTransfers: 'u32',
        weightLimit: 'Option<SpWeightsWeightV2Weight>',
      },
      add_instruction: {
        venueId: 'Option<u64>',
        settlementType: 'PolymeshPrimitivesSettlementSettlementType',
        tradeDate: 'Option<u64>',
        valueDate: 'Option<u64>',
        legs: 'Vec<PolymeshPrimitivesSettlementLeg>',
        instructionMemo: 'Option<PolymeshPrimitivesMemo>',
      },
      add_and_affirm_instruction: {
        venueId: 'Option<u64>',
        settlementType: 'PolymeshPrimitivesSettlementSettlementType',
        tradeDate: 'Option<u64>',
        valueDate: 'Option<u64>',
        legs: 'Vec<PolymeshPrimitivesSettlementLeg>',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
        instructionMemo: 'Option<PolymeshPrimitivesMemo>',
      },
      affirm_instruction: {
        id: 'u64',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
      },
      withdraw_affirmation: {
        id: 'u64',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
      },
      reject_instruction: {
        id: 'u64',
        portfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
      },
      execute_scheduled_instruction: {
        id: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight',
      },
      affirm_with_receipts_with_count: {
        id: 'u64',
        receiptDetails: 'Vec<PolymeshPrimitivesSettlementReceiptDetails>',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
        numberOfAssets: 'Option<PolymeshPrimitivesSettlementAffirmationCount>',
      },
      affirm_instruction_with_count: {
        id: 'u64',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
        numberOfAssets: 'Option<PolymeshPrimitivesSettlementAffirmationCount>',
      },
      reject_instruction_with_count: {
        id: 'u64',
        portfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        numberOfAssets: 'Option<PolymeshPrimitivesSettlementAssetCount>',
      },
      withdraw_affirmation_with_count: {
        id: 'u64',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
        numberOfAssets: 'Option<PolymeshPrimitivesSettlementAffirmationCount>',
      },
      add_instruction_with_mediators: {
        venueId: 'Option<u64>',
        settlementType: 'PolymeshPrimitivesSettlementSettlementType',
        tradeDate: 'Option<u64>',
        valueDate: 'Option<u64>',
        legs: 'Vec<PolymeshPrimitivesSettlementLeg>',
        instructionMemo: 'Option<PolymeshPrimitivesMemo>',
        mediators: 'BTreeSet<PolymeshPrimitivesIdentityId>',
      },
      add_and_affirm_with_mediators: {
        venueId: 'Option<u64>',
        settlementType: 'PolymeshPrimitivesSettlementSettlementType',
        tradeDate: 'Option<u64>',
        valueDate: 'Option<u64>',
        legs: 'Vec<PolymeshPrimitivesSettlementLeg>',
        portfolios: 'BTreeSet<PolymeshPrimitivesIdentityIdPortfolioId>',
        instructionMemo: 'Option<PolymeshPrimitivesMemo>',
        mediators: 'BTreeSet<PolymeshPrimitivesIdentityId>',
      },
      affirm_instruction_as_mediator: {
        instructionId: 'u64',
        expiry: 'Option<u64>',
      },
      withdraw_affirmation_as_mediator: {
        instructionId: 'u64',
      },
      reject_instruction_as_mediator: {
        instructionId: 'u64',
        numberOfAssets: 'Option<PolymeshPrimitivesSettlementAssetCount>'
      }
    }
  },
  /**
   * Lookup446: polymesh_primitives::settlement::ReceiptDetails<sp_core::crypto::AccountId32, sp_runtime::MultiSignature>
   **/
  PolymeshPrimitivesSettlementReceiptDetails: {
    uid: 'u64',
    instructionId: 'u64',
    legId: 'u64',
    signer: 'AccountId32',
    signature: 'SpRuntimeMultiSignature',
    metadata: 'Option<PolymeshPrimitivesSettlementReceiptMetadata>'
  },
  /**
   * Lookup447: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup448: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup452: polymesh_primitives::settlement::AffirmationCount
   **/
  PolymeshPrimitivesSettlementAffirmationCount: {
    senderAssetCount: 'PolymeshPrimitivesSettlementAssetCount',
    receiverAssetCount: 'PolymeshPrimitivesSettlementAssetCount',
    offchainCount: 'u32'
  },
  /**
   * Lookup453: polymesh_primitives::settlement::AssetCount
   **/
  PolymeshPrimitivesSettlementAssetCount: {
    fungible: 'u32',
    nonFungible: 'u32',
    offChain: 'u32'
  },
  /**
   * Lookup456: pallet_statistics::pallet::Call<T>
   **/
  PalletStatisticsCall: {
    _enum: {
      set_active_asset_stats: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        statTypes: 'BTreeSet<PolymeshPrimitivesStatisticsStatType>',
      },
      batch_update_asset_stats: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        statType: 'PolymeshPrimitivesStatisticsStatType',
        values: 'BTreeSet<PolymeshPrimitivesStatisticsStatUpdate>',
      },
      set_asset_transfer_compliance: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        transferConditions: 'BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>',
      },
      set_entities_exempt: {
        isExempt: 'bool',
        exemptKey: 'PolymeshPrimitivesTransferComplianceTransferConditionExemptKey',
        entities: 'BTreeSet<PolymeshPrimitivesIdentityId>'
      }
    }
  },
  /**
   * Lookup460: pallet_sto::pallet::Call<T>
   **/
  PalletStoCall: {
    _enum: {
      create_fundraiser: {
        offeringPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        raisingPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        raisingAsset: 'PolymeshPrimitivesAssetAssetId',
        tiers: 'Vec<PalletStoPriceTier>',
        venueId: 'u64',
        start: 'Option<u64>',
        end: 'Option<u64>',
        minimumInvestment: 'u128',
        fundraiserName: 'Bytes',
      },
      invest: {
        investmentPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        fundingPortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64',
        purchaseAmount: 'u128',
        maxPrice: 'Option<u128>',
        receipt: 'Option<PolymeshPrimitivesSettlementReceiptDetails>',
      },
      freeze_fundraiser: {
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64',
      },
      unfreeze_fundraiser: {
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64',
      },
      modify_fundraiser_window: {
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64',
        start: 'u64',
        end: 'Option<u64>',
      },
      stop: {
        offeringAsset: 'PolymeshPrimitivesAssetAssetId',
        id: 'u64'
      }
    }
  },
  /**
   * Lookup462: pallet_sto::PriceTier
   **/
  PalletStoPriceTier: {
    total: 'u128',
    price: 'u128'
  },
  /**
   * Lookup464: pallet_treasury::pallet::Call<T>
   **/
  PalletTreasuryCall: {
    _enum: {
      disbursement: {
        beneficiaries: 'Vec<PolymeshPrimitivesBeneficiary>',
      },
      reimbursement: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup466: polymesh_primitives::Beneficiary<Balance>
   **/
  PolymeshPrimitivesBeneficiary: {
    id: 'PolymeshPrimitivesIdentityId',
    amount: 'u128'
  },
  /**
   * Lookup467: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      relay_tx: {
        target: 'AccountId32',
        signature: 'SpRuntimeMultiSignature',
        call: 'PalletUtilityUniqueCall',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'PolymeshRuntimeDevelopRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      as_derivative: {
        index: 'u16',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup469: pallet_utility::UniqueCall<polymesh_runtime_develop::runtime::RuntimeCall>
   **/
  PalletUtilityUniqueCall: {
    nonce: 'u64',
    call: 'Call'
  },
  /**
   * Lookup470: polymesh_runtime_develop::runtime::OriginCaller
   **/
  PolymeshRuntimeDevelopRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      PolymeshCommittee: 'PalletCommitteeRawOrigin',
      __Unused10: 'Null',
      TechnicalCommittee: 'PalletCommitteeRawOrigin',
      __Unused12: 'Null',
      UpgradeCommittee: 'PalletCommitteeRawOrigin'
    }
  },
  /**
   * Lookup471: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup472: pallet_committee::pallet::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCommitteeRawOrigin: {
    _enum: ['Endorsed']
  },
  /**
   * Lookup475: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup476: pallet_base::pallet::Call<T>
   **/
  PalletBaseCall: 'Null',
  /**
   * Lookup477: pallet_external_agents::pallet::Call<T>
   **/
  PalletExternalAgentsCall: {
    _enum: {
      create_group: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        perms: 'PolymeshPrimitivesSecondaryKeyExtrinsicPermissions',
      },
      set_group_permissions: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        id: 'u32',
        perms: 'PolymeshPrimitivesSecondaryKeyExtrinsicPermissions',
      },
      remove_agent: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        agent: 'PolymeshPrimitivesIdentityId',
      },
      abdicate: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
      },
      change_group: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        agent: 'PolymeshPrimitivesIdentityId',
        group: 'PolymeshPrimitivesAgentAgentGroup',
      },
      accept_become_agent: {
        authId: 'u64',
      },
      create_group_and_add_auth: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        perms: 'PolymeshPrimitivesSecondaryKeyExtrinsicPermissions',
        target: 'PolymeshPrimitivesIdentityId',
        expiry: 'Option<u64>',
      },
      create_and_change_custom_group: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        perms: 'PolymeshPrimitivesSecondaryKeyExtrinsicPermissions',
        agent: 'PolymeshPrimitivesIdentityId'
      }
    }
  },
  /**
   * Lookup478: pallet_relayer::pallet::Call<T>
   **/
  PalletRelayerCall: {
    _enum: {
      set_paying_key: {
        userKey: 'AccountId32',
        polyxLimit: 'u128',
      },
      accept_paying_key: {
        authId: 'u64',
      },
      remove_paying_key: {
        userKey: 'AccountId32',
        payingKey: 'AccountId32',
      },
      update_polyx_limit: {
        userKey: 'AccountId32',
        polyxLimit: 'u128',
      },
      increase_polyx_limit: {
        userKey: 'AccountId32',
        amount: 'u128',
      },
      decrease_polyx_limit: {
        userKey: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup479: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes'
      }
    }
  },
  /**
   * Lookup483: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Deterministic', 'AllowIndeterminism']
  },
  /**
   * Lookup484: polymesh_contracts::pallet::Call<T>
   **/
  PolymeshContractsCall: {
    _enum: {
      instantiate_with_code_perms: {
        endowment: 'u128',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<u128>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
        perms: 'PolymeshPrimitivesSecondaryKeyPermissions',
      },
      instantiate_with_hash_perms: {
        endowment: 'u128',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<u128>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
        perms: 'PolymeshPrimitivesSecondaryKeyPermissions',
      },
      update_call_runtime_whitelist: {
        updates: 'Vec<(PolymeshContractsChainExtensionExtrinsicId,bool)>',
      },
      instantiate_with_code_as_primary_key: {
        endowment: 'u128',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<u128>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_with_hash_as_primary_key: {
        endowment: 'u128',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<u128>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upgrade_api: {
        api: 'PolymeshContractsApi',
        nextUpgrade: 'PolymeshContractsNextUpgrade'
      }
    }
  },
  /**
   * Lookup487: polymesh_contracts::NextUpgrade<T>
   **/
  PolymeshContractsNextUpgrade: {
    chainVersion: 'PolymeshContractsChainVersion',
    apiHash: 'PolymeshContractsApiCodeHash'
  },
  /**
   * Lookup488: polymesh_contracts::ApiCodeHash<T>
   **/
  PolymeshContractsApiCodeHash: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'H256'
  },
  /**
   * Lookup489: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup490: pallet_nft::pallet::Call<T>
   **/
  PalletNftCall: {
    _enum: {
      create_nft_collection: {
        assetId: 'Option<PolymeshPrimitivesAssetAssetId>',
        nftType: 'Option<PolymeshPrimitivesAssetNonFungibleType>',
        collectionKeys: 'PolymeshPrimitivesNftNftCollectionKeys',
      },
      issue_nft: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        nftMetadataAttributes: 'Vec<PolymeshPrimitivesNftNftMetadataAttribute>',
        portfolioKind: 'PolymeshPrimitivesIdentityIdPortfolioKind',
      },
      redeem_nft: {
        assetId: 'PolymeshPrimitivesAssetAssetId',
        nftId: 'u64',
        portfolioKind: 'PolymeshPrimitivesIdentityIdPortfolioKind',
        numberOfKeys: 'Option<u8>',
      },
      controller_transfer: {
        nfts: 'PolymeshPrimitivesNftNfTs',
        sourcePortfolio: 'PolymeshPrimitivesIdentityIdPortfolioId',
        callersPortfolioKind: 'PolymeshPrimitivesIdentityIdPortfolioKind'
      }
    }
  },
  /**
   * Lookup493: polymesh_primitives::nft::NFTCollectionKeys
   **/
  PolymeshPrimitivesNftNftCollectionKeys: 'Vec<PolymeshPrimitivesAssetMetadataAssetMetadataKey>',
  /**
   * Lookup496: polymesh_primitives::nft::NFTMetadataAttribute
   **/
  PolymeshPrimitivesNftNftMetadataAttribute: {
    key: 'PolymeshPrimitivesAssetMetadataAssetMetadataKey',
    value: 'Bytes'
  },
  /**
   * Lookup498: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup499: pallet_election_provider_multi_phase::RawSolution<polymesh_runtime_common::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'PolymeshRuntimeCommonNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup500: polymesh_runtime_common::NposSolution16
   **/
  PolymeshRuntimeCommonNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup551: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup555: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup558: pallet_committee::pallet::PolymeshVotes<BlockNumber>
   **/
  PalletCommitteePolymeshVotes: {
    index: 'u32',
    ayes: 'Vec<PolymeshPrimitivesIdentityId>',
    nays: 'Vec<PolymeshPrimitivesIdentityId>',
    expiry: 'PolymeshPrimitivesMaybeBlock'
  },
  /**
   * Lookup559: pallet_committee::pallet::Error<T, I>
   **/
  PalletCommitteeError: {
    _enum: ['DuplicateVote', 'NotAMember', 'NoSuchProposal', 'ProposalExpired', 'DuplicateProposal', 'MismatchedVotingIndex', 'InvalidProportion', 'FirstVoteReject', 'ProposalsLimitReached']
  },
  /**
   * Lookup568: polymesh_primitives::multisig::ProposalVoteCount
   **/
  PolymeshPrimitivesMultisigProposalVoteCount: {
    approvals: 'u64',
    rejections: 'u64'
  },
  /**
   * Lookup569: polymesh_primitives::multisig::ProposalState<Moment>
   **/
  PolymeshPrimitivesMultisigProposalState: {
    _enum: {
      Active: {
        until: 'Option<u64>',
      },
      ExecutionSuccessful: 'Null',
      ExecutionFailed: 'Null',
      Rejected: 'Null'
    }
  },
  /**
   * Lookup571: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['ProposalMissing', 'DecodingError', 'RequiredSignersIsZero', 'NotASigner', 'NoSuchMultisig', 'NotEnoughSigners', 'NonceOverflow', 'AlreadyVoted', 'AlreadyASigner', 'IdentityNotAdmin', 'IdentityNotPayer', 'ChangeNotAllowed', 'SignerAlreadyLinkedToMultisig', 'SignerAlreadyLinkedToIdentity', 'NestingNotAllowed', 'ProposalAlreadyRejected', 'ProposalExpired', 'ProposalAlreadyExecuted', 'MaxWeightTooLow', 'MultisigMissingIdentity', 'TooManySigners', 'NoPayingDid', 'InvalidExpiryDate', 'InvalidatedProposal', 'AdminNotFound', 'BadAuthorizationType']
  },
  /**
   * Lookup573: pallet_bridge::pallet::BridgeTxDetail<BlockNumber>
   **/
  PalletBridgeBridgeTxDetail: {
    amount: 'u128',
    status: 'PalletBridgeBridgeTxStatus',
    executionBlock: 'u32',
    txHash: 'H256'
  },
  /**
   * Lookup574: pallet_bridge::pallet::BridgeTxStatus
   **/
  PalletBridgeBridgeTxStatus: {
    _enum: {
      Absent: 'Null',
      Pending: 'u8',
      Frozen: 'Null',
      Timelocked: 'Null',
      Handled: 'Null'
    }
  },
  /**
   * Lookup577: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup579: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup582: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup584: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup586: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup590: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup592: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup593: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup596: pallet_staking::types::PermissionedIdentityPrefs
   **/
  PalletStakingPermissionedIdentityPrefs: {
    intendedCount: 'u32',
    runningCount: 'u32'
  },
  /**
   * Lookup598: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'StashIdentityDoesNotExist', 'StashIdentityNotPermissioned', 'StashIdentityNotCDDed', 'IdentityIsAlreadyPermissioned', 'IdentityIsMissingCDD', 'IntendedCountIsExceedingConsensusLimit', 'IdentityNotFound', 'ValidatorNotFound', 'CommissionTooHigh', 'CommissionUnchanged']
  },
  /**
   * Lookup599: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup604: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup605: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup606: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup607: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup609: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup613: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup617: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup619: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup620: pallet_asset::types::TickerRegistration<T>
   **/
  PalletAssetTickerRegistration: {
    owner: 'PolymeshPrimitivesIdentityId',
    expiry: 'Option<u64>'
  },
  /**
   * Lookup621: pallet_asset::types::TickerRegistrationConfig<T>
   **/
  PalletAssetTickerRegistrationConfig: {
    maxTickerLength: 'u8',
    registrationLength: 'Option<u64>'
  },
  /**
   * Lookup622: pallet_asset::types::AssetDetails
   **/
  PalletAssetAssetDetails: {
    totalSupply: 'u128',
    ownerDid: 'PolymeshPrimitivesIdentityId',
    divisible: 'bool',
    assetType: 'PolymeshPrimitivesAssetAssetType'
  },
  /**
   * Lookup632: pallet_asset::pallet::Error<T>
   **/
  PalletAssetError: {
    _enum: ['Unauthorized', 'AssetAlreadyCreated', 'TickerTooLong', 'TickerNotAlphanumeric', 'TickerAlreadyRegistered', 'TotalSupplyAboveLimit', 'NoSuchAsset', 'AlreadyFrozen', 'NotAnOwner', 'BalanceOverflow', 'TotalSupplyOverflow', 'InvalidGranularity', 'NotFrozen', 'InvalidTransfer', 'InsufficientBalance', 'AssetAlreadyDivisible', 'InvalidEthereumSignature', 'TickerRegistrationExpired', 'SenderSameAsReceiver', 'NoSuchDoc', 'MaxLengthOfAssetNameExceeded', 'FundingRoundNameMaxLengthExceeded', 'InvalidAssetIdentifier', 'InvestorUniquenessClaimNotAllowed', 'InvalidCustomAssetTypeId', 'AssetMetadataNameMaxLengthExceeded', 'AssetMetadataValueMaxLengthExceeded', 'AssetMetadataTypeDefMaxLengthExceeded', 'AssetMetadataKeyIsMissing', 'AssetMetadataValueIsLocked', 'AssetMetadataLocalKeyAlreadyExists', 'AssetMetadataGlobalKeyAlreadyExists', 'TickerFirstByteNotValid', 'UnexpectedNonFungibleToken', 'IncompatibleAssetTypeUpdate', 'AssetMetadataKeyBelongsToNFTCollection', 'AssetMetadataValueIsEmpty', 'NumberOfAssetMediatorsExceeded', 'InvalidTickerCharacter', 'InvalidTransferFrozenAsset', 'InvalidTransferComplianceFailure', 'InvalidTransferInvalidReceiverCDD', 'InvalidTransferInvalidSenderCDD', 'TickerRegistrationNotFound', 'TickerIsAlreadyLinkedToAnAsset', 'AssetIdGenerationError', 'TickerNotRegisteredToCaller', 'AssetIsAlreadyLinkedToATicker', 'TickerIsNotLinkedToTheAsset', 'BadAuthorizationType']
  },
  /**
   * Lookup635: pallet_corporate_actions::distribution::pallet::Error<T>
   **/
  PalletCorporateActionsDistributionPalletError: {
    _enum: ['CANotBenefit', 'AlreadyExists', 'ExpiryBeforePayment', 'HolderAlreadyPaid', 'NoSuchDistribution', 'CannotClaimBeforeStart', 'CannotClaimAfterExpiry', 'BalancePerShareProductOverflowed', 'NotDistributionCreator', 'AlreadyReclaimed', 'NotExpired', 'DistributionStarted', 'InsufficientRemainingAmount', 'DistributionAmountIsZero', 'DistributionPerShareIsZero']
  },
  /**
   * Lookup639: polymesh_common_utilities::traits::checkpoint::NextCheckpoints
   **/
  PolymeshCommonUtilitiesCheckpointNextCheckpoints: {
    nextAt: 'u64',
    totalPending: 'u64',
    schedules: 'BTreeMap<u64, u64>'
  },
  /**
   * Lookup645: pallet_asset::checkpoint::pallet::Error<T>
   **/
  PalletAssetCheckpointPalletError: {
    _enum: ['NoSuchSchedule', 'ScheduleNotRemovable', 'SchedulesOverMaxComplexity', 'ScheduleIsEmpty', 'ScheduleFinished', 'ScheduleHasExpiredCheckpoints']
  },
  /**
   * Lookup646: polymesh_primitives::compliance_manager::AssetCompliance
   **/
  PolymeshPrimitivesComplianceManagerAssetCompliance: {
    paused: 'bool',
    requirements: 'Vec<PolymeshPrimitivesComplianceManagerComplianceRequirement>'
  },
  /**
   * Lookup648: pallet_compliance_manager::pallet::Error<T>
   **/
  PalletComplianceManagerError: {
    _enum: ['Unauthorized', 'DidNotExist', 'InvalidComplianceRequirementId', 'IncorrectOperationOnTrustedIssuer', 'DuplicateComplianceRequirements', 'ComplianceRequirementTooComplex', 'WeightLimitExceeded']
  },
  /**
   * Lookup651: pallet_corporate_actions::pallet::Error<T>
   **/
  PalletCorporateActionsError: {
    _enum: ['DetailsTooLong', 'DuplicateDidTax', 'TooManyDidTaxes', 'TooManyTargetIds', 'NoSuchCheckpointId', 'NoSuchCA', 'NoRecordDate', 'RecordDateAfterStart', 'DeclDateAfterRecordDate', 'DeclDateInFuture', 'NotTargetedByCA']
  },
  /**
   * Lookup655: pallet_corporate_actions::ballot::pallet::Error<T>
   **/
  PalletCorporateActionsBallotPalletError: {
    _enum: ['CANotNotice', 'AlreadyExists', 'NoSuchBallot', 'StartAfterEnd', 'NowAfterEnd', 'NumberOfChoicesOverflow', 'VotingAlreadyStarted', 'VotingNotStarted', 'VotingAlreadyEnded', 'WrongVoteCount', 'InsufficientVotes', 'NoSuchRCVFallback', 'RCVSelfCycle', 'RCVNotAllowed']
  },
  /**
   * Lookup656: pallet_permissions::pallet::Error<T>
   **/
  PalletPermissionsError: {
    _enum: ['UnauthorizedCaller']
  },
  /**
   * Lookup657: pallet_pips::types::PipsMetadata<BlockNumber>
   **/
  PalletPipsPipsMetadata: {
    id: 'u32',
    url: 'Option<Bytes>',
    description: 'Option<Bytes>',
    createdAt: 'u32',
    transactionVersion: 'u32',
    expiry: 'PolymeshPrimitivesMaybeBlock'
  },
  /**
   * Lookup659: pallet_pips::types::DepositInfo<sp_core::crypto::AccountId32>
   **/
  PalletPipsDepositInfo: {
    owner: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup660: pallet_pips::types::Pip<polymesh_runtime_develop::runtime::RuntimeCall, sp_core::crypto::AccountId32>
   **/
  PalletPipsPip: {
    id: 'u32',
    proposal: 'Call',
    proposer: 'PalletPipsProposer'
  },
  /**
   * Lookup661: pallet_pips::types::VotingResult
   **/
  PalletPipsVotingResult: {
    ayesCount: 'u32',
    ayesStake: 'u128',
    naysCount: 'u32',
    naysStake: 'u128'
  },
  /**
   * Lookup662: pallet_pips::types::Vote
   **/
  PalletPipsVote: '(bool,u128)',
  /**
   * Lookup663: pallet_pips::types::SnapshotMetadata<BlockNumber, sp_core::crypto::AccountId32>
   **/
  PalletPipsSnapshotMetadata: {
    createdAt: 'u32',
    madeBy: 'AccountId32',
    id: 'u32'
  },
  /**
   * Lookup665: pallet_pips::pallet::Error<T>
   **/
  PalletPipsError: {
    _enum: ['RescheduleNotByReleaseCoordinator', 'NotFromCommunity', 'NotByCommittee', 'TooManyActivePips', 'IncorrectDeposit', 'InsufficientDeposit', 'NoSuchProposal', 'NotACommitteeMember', 'InvalidFutureBlockNumber', 'NumberOfVotesExceeded', 'StakeAmountOfVotesExceeded', 'MissingCurrentIdentity', 'IncorrectProposalState', 'CannotSkipPip', 'SnapshotResultTooLarge', 'SnapshotIdMismatch', 'ScheduledProposalDoesntExist', 'ProposalNotInScheduledState', 'InvalidPipId']
  },
  /**
   * Lookup673: pallet_portfolio::pallet::Error<T>
   **/
  PalletPortfolioError: {
    _enum: ['PortfolioDoesNotExist', 'InsufficientPortfolioBalance', 'DestinationIsSamePortfolio', 'PortfolioNameAlreadyInUse', 'SecondaryKeyNotAuthorizedForPortfolio', 'UnauthorizedCustodian', 'InsufficientTokensLocked', 'PortfolioNotEmpty', 'DifferentIdentityPortfolios', 'NoDuplicateAssetsAllowed', 'NFTNotFoundInPortfolio', 'NFTAlreadyLocked', 'NFTNotLocked', 'InvalidTransferNFTNotOwned', 'InvalidTransferNFTIsLocked', 'EmptyTransfer', 'MissingOwnersPermission', 'InvalidTransferSenderIdMatchesReceiverId', 'SelfAdditionNotAllowed', 'BadAuthorizationType']
  },
  /**
   * Lookup674: pallet_protocol_fee::pallet::Error<T>
   **/
  PalletProtocolFeeError: {
    _enum: ['InsufficientAccountBalance', 'UnHandledImbalances', 'InsufficientSubsidyBalance']
  },
  /**
   * Lookup677: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<polymesh_runtime_develop::runtime::RuntimeCall>, BlockNumber, polymesh_runtime_develop::runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'PolymeshRuntimeDevelopRuntimeOriginCaller'
  },
  /**
   * Lookup678: frame_support::traits::preimages::Bounded<polymesh_runtime_develop::runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup681: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup682: polymesh_primitives::settlement::Venue
   **/
  PolymeshPrimitivesSettlementVenue: {
    creator: 'PolymeshPrimitivesIdentityId',
    venueType: 'PolymeshPrimitivesSettlementVenueType'
  },
  /**
   * Lookup686: polymesh_primitives::settlement::Instruction<Moment, BlockNumber>
   **/
  PolymeshPrimitivesSettlementInstruction: {
    instructionId: 'u64',
    venueId: 'Option<u64>',
    settlementType: 'PolymeshPrimitivesSettlementSettlementType',
    createdAt: 'Option<u64>',
    tradeDate: 'Option<u64>',
    valueDate: 'Option<u64>'
  },
  /**
   * Lookup688: polymesh_primitives::settlement::LegStatus<sp_core::crypto::AccountId32>
   **/
  PolymeshPrimitivesSettlementLegStatus: {
    _enum: {
      PendingTokenLock: 'Null',
      ExecutionPending: 'Null',
      ExecutionToBeSkipped: '(AccountId32,u64)'
    }
  },
  /**
   * Lookup690: polymesh_primitives::settlement::AffirmationStatus
   **/
  PolymeshPrimitivesSettlementAffirmationStatus: {
    _enum: ['Unknown', 'Pending', 'Affirmed']
  },
  /**
   * Lookup693: polymesh_primitives::settlement::InstructionStatus<BlockNumber>
   **/
  PolymeshPrimitivesSettlementInstructionStatus: {
    _enum: {
      Unknown: 'Null',
      Pending: 'Null',
      Failed: 'Null',
      Success: 'u32',
      Rejected: 'u32'
    }
  },
  /**
   * Lookup695: polymesh_primitives::settlement::MediatorAffirmationStatus<T>
   **/
  PolymeshPrimitivesSettlementMediatorAffirmationStatus: {
    _enum: {
      Unknown: 'Null',
      Pending: 'Null',
      Affirmed: {
        expiry: 'Option<u64>'
      }
    }
  },
  /**
   * Lookup697: pallet_settlement::pallet::Error<T>
   **/
  PalletSettlementError: {
    _enum: ['InvalidVenue', 'Unauthorized', 'InstructionNotAffirmed', 'UnauthorizedSigner', 'ReceiptAlreadyClaimed', 'UnauthorizedVenue', 'InstructionDatesInvalid', 'InstructionSettleBlockPassed', 'InvalidSignature', 'SameSenderReceiver', 'SettleOnPastBlock', 'UnexpectedAffirmationStatus', 'FailedToSchedule', 'UnknownInstruction', 'SignerAlreadyExists', 'SignerDoesNotExist', 'ZeroAmount', 'InstructionSettleBlockNotReached', 'CallerIsNotAParty', 'MaxNumberOfNFTsExceeded', 'NumberOfTransferredNFTsUnderestimated', 'ReceiptForInvalidLegType', 'WeightLimitExceeded', 'MaxNumberOfFungibleAssetsExceeded', 'MaxNumberOfOffChainAssetsExceeded', 'NumberOfFungibleTransfersUnderestimated', 'UnexpectedOFFChainAsset', 'OffChainAssetCantBeLocked', 'NumberOfOffChainTransfersUnderestimated', 'LegNotFound', 'InputWeightIsLessThanMinimum', 'MaxNumberOfReceiptsExceeded', 'NotAllAffirmationsHaveBeenReceived', 'InvalidInstructionStatusForExecution', 'FailedToReleaseLockOrTransferAssets', 'DuplicateReceiptUid', 'ReceiptInstructionIdMissmatch', 'MultipleReceiptsForOneLeg', 'UnexpectedLegStatus', 'NumberOfVenueSignersExceeded', 'CallerIsNotAMediator', 'InvalidExpiryDate', 'MediatorAffirmationExpired', 'OffChainAssetsMustHaveAVenue']
  },
  /**
   * Lookup700: polymesh_primitives::statistics::Stat1stKey
   **/
  PolymeshPrimitivesStatisticsStat1stKey: {
    assetId: 'PolymeshPrimitivesAssetAssetId',
    statType: 'PolymeshPrimitivesStatisticsStatType'
  },
  /**
   * Lookup701: polymesh_primitives::transfer_compliance::AssetTransferCompliance<S>
   **/
  PolymeshPrimitivesTransferComplianceAssetTransferCompliance: {
    paused: 'bool',
    requirements: 'BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>'
  },
  /**
   * Lookup705: pallet_statistics::pallet::Error<T>
   **/
  PalletStatisticsError: {
    _enum: ['InvalidTransferStatisticsFailure', 'StatTypeMissing', 'StatTypeNeededByTransferCondition', 'CannotRemoveStatTypeInUse', 'StatTypeLimitReached', 'TransferConditionLimitReached', 'WeightLimitExceeded']
  },
  /**
   * Lookup708: pallet_sto::pallet::Error<T>
   **/
  PalletStoError: {
    _enum: ['Unauthorized', 'Overflow', 'InsufficientTokensRemaining', 'FundraiserNotFound', 'FundraiserNotLive', 'FundraiserClosed', 'FundraiserExpired', 'InvalidVenue', 'InvalidPriceTiers', 'InvalidOfferingWindow', 'MaxPriceExceeded', 'InvestmentAmountTooLow']
  },
  /**
   * Lookup709: pallet_treasury::pallet::Error<T>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientBalance', 'InvalidIdentity']
  },
  /**
   * Lookup710: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls', 'InvalidSignature', 'TargetCddMissing', 'InvalidNonce', 'UnableToDeriveAccountId']
  },
  /**
   * Lookup711: pallet_base::pallet::Error<T>
   **/
  PalletBaseError: {
    _enum: ['TooLong', 'CounterOverflow']
  },
  /**
   * Lookup714: pallet_external_agents::pallet::Error<T>
   **/
  PalletExternalAgentsError: {
    _enum: ['NoSuchAG', 'UnauthorizedAgent', 'AlreadyAnAgent', 'NotAnAgent', 'RemovingLastFullAgent', 'SecondaryKeyNotAuthorizedForAsset', 'BadAuthorizationType']
  },
  /**
   * Lookup715: pallet_relayer::pallet::Subsidy<sp_core::crypto::AccountId32>
   **/
  PalletRelayerSubsidy: {
    payingKey: 'AccountId32',
    remaining: 'u128'
  },
  /**
   * Lookup716: pallet_relayer::pallet::Error<T>
   **/
  PalletRelayerError: {
    _enum: ['UserKeyCddMissing', 'PayingKeyCddMissing', 'NoPayingKey', 'NotPayingKey', 'NotAuthorizedForPayingKey', 'NotAuthorizedForUserKey', 'Overflow', 'BadAuthorizationType']
  },
  /**
   * Lookup718: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup720: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup721: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    depositAccount: 'AccountId32',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup724: pallet_contracts::storage::DeletedContract
   **/
  PalletContractsStorageDeletedContract: {
    trieId: 'Bytes'
  },
  /**
   * Lookup726: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup727: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    globals: 'u32',
    locals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32'
  },
  /**
   * Lookup728: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    fallback: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callIndirectPerParam: 'u32',
    callPerLocal: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup729: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'SpWeightsWeightV2Weight',
    isContract: 'SpWeightsWeightV2Weight',
    codeHash: 'SpWeightsWeightV2Weight',
    ownCodeHash: 'SpWeightsWeightV2Weight',
    callerIsOrigin: 'SpWeightsWeightV2Weight',
    address: 'SpWeightsWeightV2Weight',
    gasLeft: 'SpWeightsWeightV2Weight',
    balance: 'SpWeightsWeightV2Weight',
    valueTransferred: 'SpWeightsWeightV2Weight',
    minimumBalance: 'SpWeightsWeightV2Weight',
    blockNumber: 'SpWeightsWeightV2Weight',
    now: 'SpWeightsWeightV2Weight',
    weightToFee: 'SpWeightsWeightV2Weight',
    gas: 'SpWeightsWeightV2Weight',
    input: 'SpWeightsWeightV2Weight',
    inputPerByte: 'SpWeightsWeightV2Weight',
    r_return: 'SpWeightsWeightV2Weight',
    returnPerByte: 'SpWeightsWeightV2Weight',
    terminate: 'SpWeightsWeightV2Weight',
    random: 'SpWeightsWeightV2Weight',
    depositEvent: 'SpWeightsWeightV2Weight',
    depositEventPerTopic: 'SpWeightsWeightV2Weight',
    depositEventPerByte: 'SpWeightsWeightV2Weight',
    debugMessage: 'SpWeightsWeightV2Weight',
    debugMessagePerByte: 'SpWeightsWeightV2Weight',
    setStorage: 'SpWeightsWeightV2Weight',
    setStoragePerNewByte: 'SpWeightsWeightV2Weight',
    setStoragePerOldByte: 'SpWeightsWeightV2Weight',
    setCodeHash: 'SpWeightsWeightV2Weight',
    clearStorage: 'SpWeightsWeightV2Weight',
    clearStoragePerByte: 'SpWeightsWeightV2Weight',
    containsStorage: 'SpWeightsWeightV2Weight',
    containsStoragePerByte: 'SpWeightsWeightV2Weight',
    getStorage: 'SpWeightsWeightV2Weight',
    getStoragePerByte: 'SpWeightsWeightV2Weight',
    takeStorage: 'SpWeightsWeightV2Weight',
    takeStoragePerByte: 'SpWeightsWeightV2Weight',
    transfer: 'SpWeightsWeightV2Weight',
    call: 'SpWeightsWeightV2Weight',
    delegateCall: 'SpWeightsWeightV2Weight',
    callTransferSurcharge: 'SpWeightsWeightV2Weight',
    callPerClonedByte: 'SpWeightsWeightV2Weight',
    instantiate: 'SpWeightsWeightV2Weight',
    instantiateTransferSurcharge: 'SpWeightsWeightV2Weight',
    instantiatePerInputByte: 'SpWeightsWeightV2Weight',
    instantiatePerSaltByte: 'SpWeightsWeightV2Weight',
    hashSha2256: 'SpWeightsWeightV2Weight',
    hashSha2256PerByte: 'SpWeightsWeightV2Weight',
    hashKeccak256: 'SpWeightsWeightV2Weight',
    hashKeccak256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2256: 'SpWeightsWeightV2Weight',
    hashBlake2256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2128: 'SpWeightsWeightV2Weight',
    hashBlake2128PerByte: 'SpWeightsWeightV2Weight',
    ecdsaRecover: 'SpWeightsWeightV2Weight',
    ecdsaToEthAddress: 'SpWeightsWeightV2Weight',
    reentranceCount: 'SpWeightsWeightV2Weight',
    accountReentranceCount: 'SpWeightsWeightV2Weight',
    instantiationNonce: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup730: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'DeletionQueueFull', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup732: polymesh_contracts::pallet::Error<T>
   **/
  PolymeshContractsError: {
    _enum: ['InvalidFuncId', 'InvalidRuntimeCall', 'ReadStorageFailed', 'DataLeftAfterDecoding', 'InLenTooLarge', 'OutLenTooLarge', 'InstantiatorWithNoIdentity', 'RuntimeCallDenied', 'CallerNotAPrimaryKey', 'MissingKeyPermissions', 'InvalidChainVersion', 'NoUpgradesSupported']
  },
  /**
   * Lookup733: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup737: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup738: polymesh_primitives::nft::NFTCollection
   **/
  PolymeshPrimitivesNftNftCollection: {
    id: 'u64',
    assetId: 'PolymeshPrimitivesAssetAssetId'
  },
  /**
   * Lookup742: pallet_nft::pallet::Error<T>
   **/
  PalletNftError: {
    _enum: ['BalanceOverflow', 'BalanceUnderflow', 'CollectionAlredyRegistered', 'CollectionNotFound', 'DuplicateMetadataKey', 'DuplicatedNFTId', 'InvalidAssetType', 'InvalidMetadataAttribute', 'InvalidNFTTransferCollectionNotFound', 'InvalidNFTTransferSamePortfolio', 'InvalidNFTTransferNFTNotOwned', 'InvalidNFTTransferCountOverflow', 'InvalidNFTTransferComplianceFailure', 'InvalidNFTTransferFrozenAsset', 'InvalidNFTTransferInsufficientCount', 'MaxNumberOfKeysExceeded', 'MaxNumberOfNFTsPerLegExceeded', 'NFTNotFound', 'UnregisteredMetadataKey', 'ZeroCount', 'SupplyOverflow', 'SupplyUnderflow', 'InvalidNFTTransferNFTIsLocked', 'InvalidNFTTransferSenderIdMatchesReceiverId', 'InvalidNFTTransferInvalidReceiverCDD', 'InvalidNFTTransferInvalidSenderCDD', 'InvalidAssetId', 'NFTIsLocked', 'NumberOfKeysIsLessThanExpected']
  },
  /**
   * Lookup743: pallet_election_provider_multi_phase::ReadySolution<T>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup745: pallet_election_provider_multi_phase::RoundSnapshot<T>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup751: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, polymesh_runtime_common::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup752: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners']
  },
  /**
   * Lookup755: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup756: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup757: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup760: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup761: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup762: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup763: pallet_permissions::StoreCallMetadata<T>
   **/
  PalletPermissionsStoreCallMetadata: 'Null',
  /**
   * Lookup764: polymesh_runtime_develop::runtime::Runtime
   **/
  PolymeshRuntimeDevelopRuntime: 'Null'
};
