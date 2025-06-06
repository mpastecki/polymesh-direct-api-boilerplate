/* eslint-disable @typescript-eslint/naming-convention */
export default {
  rpc: {},
  types: {
    AssetId: '[u8; 16]',
    IdentityId: '[u8; 32]',
    Ticker: '[u8; 12]',
    CddId: '[u8; 32]',
    PalletName: 'Text',
    ExtrinsicName: 'Text',
    AssetPermissions: {
      _enum: {
        Whole: '',
        These: 'Vec<AssetId>',
        Except: 'Vec<AssetId>'
      }
    },
    PortfolioPermissions: {
      _enum: {
        Whole: '',
        These: 'Vec<PortfolioId>',
        Except: 'Vec<PortfolioId>'
      }
    },
    ExtrinsicNames: {
      _enum: {
        Whole: '',
        These: 'Vec<ExtrinsicName>',
        Except: 'Vec<ExtrinsicName>'
      }
    },
    PalletPermissions: {
      extrinsics: 'ExtrinsicNames'
    },
    ExtrinsicPermissions: {
      _enum: {
        Whole: '',
        These: 'Vec<(PalletName, PalletPermissions)>',
        Except: 'Vec<(PalletName, PalletPermissions)>'
      }
    },
    Permissions: {
      asset: 'AssetPermissions',
      extrinsic: 'ExtrinsicPermissions',
      portfolio: 'PortfolioPermissions'
    },
    Signatory: {
      _enum: {
        Identity: 'IdentityId',
        Account: 'AccountId'
      }
    },
    SecondaryKey: {
      key: 'AccountId',
      permissions: 'Permissions'
    },
    KeyIdentityData: {
      identity: 'IdentityId',
      permissions: 'Option<Permissions>'
    },
    CountryCode: {
      _enum: [
        'AF',
        'AX',
        'AL',
        'DZ',
        'AS',
        'AD',
        'AO',
        'AI',
        'AQ',
        'AG',
        'AR',
        'AM',
        'AW',
        'AU',
        'AT',
        'AZ',
        'BS',
        'BH',
        'BD',
        'BB',
        'BY',
        'BE',
        'BZ',
        'BJ',
        'BM',
        'BT',
        'BO',
        'BA',
        'BW',
        'BV',
        'BR',
        'VG',
        'IO',
        'BN',
        'BG',
        'BF',
        'BI',
        'KH',
        'CM',
        'CA',
        'CV',
        'KY',
        'CF',
        'TD',
        'CL',
        'CN',
        'HK',
        'MO',
        'CX',
        'CC',
        'CO',
        'KM',
        'CG',
        'CD',
        'CK',
        'CR',
        'CI',
        'HR',
        'CU',
        'CY',
        'CZ',
        'DK',
        'DJ',
        'DM',
        'DO',
        'EC',
        'EG',
        'SV',
        'GQ',
        'ER',
        'EE',
        'ET',
        'FK',
        'FO',
        'FJ',
        'FI',
        'FR',
        'GF',
        'PF',
        'TF',
        'GA',
        'GM',
        'GE',
        'DE',
        'GH',
        'GI',
        'GR',
        'GL',
        'GD',
        'GP',
        'GU',
        'GT',
        'GG',
        'GN',
        'GW',
        'GY',
        'HT',
        'HM',
        'VA',
        'HN',
        'HU',
        'IS',
        'IN',
        'ID',
        'IR',
        'IQ',
        'IE',
        'IM',
        'IL',
        'IT',
        'JM',
        'JP',
        'JE',
        'JO',
        'KZ',
        'KE',
        'KI',
        'KP',
        'KR',
        'KW',
        'KG',
        'LA',
        'LV',
        'LB',
        'LS',
        'LR',
        'LY',
        'LI',
        'LT',
        'LU',
        'MK',
        'MG',
        'MW',
        'MY',
        'MV',
        'ML',
        'MT',
        'MH',
        'MQ',
        'MR',
        'MU',
        'YT',
        'MX',
        'FM',
        'MD',
        'MC',
        'MN',
        'ME',
        'MS',
        'MA',
        'MZ',
        'MM',
        'NA',
        'NR',
        'NP',
        'NL',
        'AN',
        'NC',
        'NZ',
        'NI',
        'NE',
        'NG',
        'NU',
        'NF',
        'MP',
        'NO',
        'OM',
        'PK',
        'PW',
        'PS',
        'PA',
        'PG',
        'PY',
        'PE',
        'PH',
        'PN',
        'PL',
        'PT',
        'PR',
        'QA',
        'RE',
        'RO',
        'RU',
        'RW',
        'BL',
        'SH',
        'KN',
        'LC',
        'MF',
        'PM',
        'VC',
        'WS',
        'SM',
        'ST',
        'SA',
        'SN',
        'RS',
        'SC',
        'SL',
        'SG',
        'SK',
        'SI',
        'SB',
        'SO',
        'ZA',
        'GS',
        'SS',
        'ES',
        'LK',
        'SD',
        'SR',
        'SJ',
        'SZ',
        'SE',
        'CH',
        'SY',
        'TW',
        'TJ',
        'TZ',
        'TH',
        'TL',
        'TG',
        'TK',
        'TO',
        'TT',
        'TN',
        'TR',
        'TM',
        'TC',
        'TV',
        'UG',
        'UA',
        'AE',
        'GB',
        'US',
        'UM',
        'UY',
        'UZ',
        'VU',
        'VE',
        'VN',
        'VI',
        'WF',
        'EH',
        'YE',
        'ZM',
        'ZW',
        'BQ',
        'CW',
        'SX'
      ]
    },
    Scope: {
      _enum: {
        Identity: 'IdentityId',
        Asset: 'AssetId',
        Custom: 'Vec<u8>'
      }
    },
    CustomClaimTypeId: 'u32',
    Claim: {
      _enum: {
        Accredited: 'Scope',
        Affiliate: 'Scope',
        BuyLockup: 'Scope',
        SellLockup: 'Scope',
        CustomerDueDiligence: 'CddId',
        KnowYourCustomer: 'Scope',
        Jurisdiction: '(CountryCode, Scope)',
        Exempted: 'Scope',
        Blocked: 'Scope',
        Custom: '(CustomClaimTypeId, Option<Scope>)'
      }
    },
    ClaimType: {
      _enum: {
        Accredited: '',
        Affiliate: '',
        BuyLockup: '',
        SellLockup: '',
        CustomerDueDiligence: '',
        KnowYourCustomer: '',
        Jurisdiction: '',
        Exempted: '',
        Blocked: '',
        Custom: 'CustomClaimTypeId'
      }
    },
    IdentityClaim: {
      claim_issuer: 'IdentityId',
      issuance_date: 'Moment',
      last_update_date: 'Moment',
      expiry: 'Option<Moment>',
      claim: 'Claim'
    },
    ComplianceRequirementResult: {
      senderConditions: 'Vec<ConditionResult>',
      receiverConditions: 'Vec<ConditionResult>',
      id: 'u32',
      result: 'bool'
    },
    ConditionType: {
      _enum: {
        IsPresent: 'Claim',
        IsAbsent: 'Claim',
        IsAnyOf: 'Vec<Claim>',
        IsNoneOf: 'Vec<Claim>',
        IsIdentity: 'TargetIdentity'
      }
    },
    TrustedFor: {
      _enum: {
        Any: '',
        Specific: 'Vec<ClaimType>'
      }
    },
    TrustedIssuer: {
      issuer: 'IdentityId',
      trustedFor: 'TrustedFor'
    },
    Condition: {
      conditionType: 'PolymeshPrimitivesConditionConditionType',
      issuers: 'Vec<PolymeshPrimitivesConditionTrustedIssuer>'
    },
    ConditionResult: {
      condition: 'Condition',
      result: 'bool'
    },
    PipId: 'u32',
    Authorization: {
      authorization_data: 'AuthorizationData',
      authorized_by: 'IdentityId',
      expiry: 'Option<Moment>',
      auth_id: 'u64'
    },
    AuthorizationData: {
      _enum: {
        AttestPrimaryKeyRotation: 'IdentityId',
        RotatePrimaryKey: '',
        TransferTicker: 'Ticker',
        AddMultiSigSigner: 'AccountId',
        TransferAssetOwnership: 'AssetId',
        JoinIdentity: 'Permissions',
        PortfolioCustody: 'PortfolioId',
        BecomeAgent: '(AssetId, AgentGroup)',
        AddRelayerPayingKey: '(AccountId, AccountId, Balance)',
        RotatePrimaryKeyToSecondary: 'Permissions'
      }
    },
    Percentage: 'Permill',
    StatClaim: {
      _enum: {
        Accredited: 'bool',
        Affiliate: 'bool',
        Jurisdiction: 'Option<CountryCode>'
      }
    },
    TransferCondition: {
      _enum: {
        MaxInvestorCount: 'u64',
        MaxInvestorOwnership: 'Percentage',
        ClaimCount: '(StatClaim, IdentityId, u64, Option<u64>)',
        ClaimOwnership: '(StatClaim, IdentityId, Percentage, Percentage)'
      }
    },
    AssetComplianceResult: {
      paused: 'bool',
      requirements: 'Vec<ComplianceRequirementResult>',
      result: 'bool'
    },
    ProtocolOp: {
      _enum: [
        'AssetRegisterTicker',
        'AssetIssue',
        'AssetAddDocuments',
        'AssetCreateAsset',
        'CheckpointCreateSchedule',
        'ComplianceManagerAddComplianceRequirement',
        'IdentityCddRegisterDid',
        'IdentityAddClaim',
        'IdentityAddSecondaryKeysWithAuthorization',
        'PipsPropose',
        'ContractsPutCode',
        'CorporateBallotAttachBallot',
        'CapitalDistributionDistribute',
        'NFTCreateCollection',
        'NFTMint',
        'IdentityCreateChildIdentity'
      ]
    },
    CddStatus: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>'
      }
    },
    AssetDidResult: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>'
      }
    },
    RpcDidRecordsSuccess: {
      primary_key: 'AccountId',
      secondary_keys: 'Vec<SecondaryKey>'
    },
    RpcDidRecords: {
      _enum: {
        Success: 'RpcDidRecordsSuccess',
        IdNotFound: 'Vec<u8>'
      }
    },
    VoteCountProposalFound: {
      ayes: 'u64',
      nays: 'u64'
    },
    VoteCount: {
      _enum: {
        ProposalFound: 'VoteCountProposalFound',
        ProposalNotFound: ''
      }
    },
    CappedFee: 'u64',
    AuthorizationType: {
      _enum: {
        AttestPrimaryKeyRotation: '',
        RotatePrimaryKey: '',
        TransferTicker: '',
        AddMultiSigSigner: '',
        TransferAssetOwnership: '',
        JoinIdentity: '',
        PortfolioCustody: '',
        BecomeAgent: '',
        AddRelayerPayingKey: '',
        RotatePrimaryKeyToSecondary: ''
      }
    },
    DidStatus: {
      _enum: {
        Unknown: '',
        Exists: '',
        CddVerified: ''
      }
    },
    PortfolioNumber: 'u64',
    PortfolioKind: {
      _enum: {
        Default: '',
        User: 'PortfolioNumber'
      }
    },
    PortfolioId: {
      did: 'IdentityId',
      kind: 'PortfolioKind'
    },
    Moment: 'u64',
    InstructionId: 'u64',
    TargetIdentity: {
      _enum: {
        ExternalAgent: '',
        Specific: 'IdentityId'
      }
    },
    CanTransferGranularReturn: {
      _enum: {
        Ok: 'GranularCanTransferResult',
        Err: 'DispatchError'
      }
    },
    GranularCanTransferResult: {
      invalid_granularity: 'bool',
      self_transfer: 'bool',
      invalid_receiver_cdd: 'bool',
      invalid_sender_cdd: 'bool',
      receiver_custodian_error: 'bool',
      sender_custodian_error: 'bool',
      sender_insufficient_balance: 'bool',
      portfolio_validity_result: 'PortfolioValidityResult',
      asset_frozen: 'bool',
      transfer_condition_result: 'Vec<TransferConditionResult>',
      compliance_result: 'AssetComplianceResult',
      result: 'bool',
      consumed_weight: 'Option<Weight>'
    },
    PortfolioValidityResult: {
      receiver_is_same_portfolio: 'bool',
      sender_portfolio_does_not_exist: 'bool',
      receiver_portfolio_does_not_exist: 'bool',
      sender_insufficient_balance: 'bool',
      result: 'bool'
    },
    TransferConditionResult: {
      condition: 'TransferCondition',
      result: 'bool'
    },
    AGId: 'u32',
    AgentGroup: {
      _enum: {
        Full: '',
        Custom: 'AGId',
        ExceptMeta: '',
        PolymeshV1CAA: '',
        PolymeshV1PIA: ''
      }
    },
    Member: {
      id: 'IdentityId',
      expiry_at: 'Option<Moment>',
      inactive_from: 'Option<Moment>'
    },
    NFTId: 'u64',
    NFTs: {
      asset_id: 'AssetId',
      ids: 'Vec<NFTId>'
    },
    FungibleLeg: {
      sender: 'PortfolioId',
      receiver: 'PortfolioId',
      asset_id: 'AssetId',
      amount: 'Balance'
    },
    NonFungibleLeg: {
      sender: 'PortfolioId',
      receiver: 'PortfolioId',
      nfts: 'NFTs'
    },
    OffChainLeg: {
      sender_identity: 'IdentityId',
      receiver_identity: 'IdentityId',
      asset_id: 'AssetId',
      amount: 'Balance'
    },
    Leg: {
      _enum: {
        Fungible: 'FungibleLeg',
        NonFungible: 'NonFungibleLeg',
        OffChain: 'OffChainLeg'
      }
    },
    ExecuteInstructionInfo: {
      fungibleTokens: 'u32',
      nonFungibleTokens: 'u32',
      offChainAssets: 'u32',
      consumedWeight: 'Weight',
      error: 'Option<String>'
    },
    AssetCount: {
      fungible_tokens: 'u32',
      non_fungible_tokens: 'u32',
      off_chain_assets: 'u32'
    },
    AffirmationCount: {
      sender_asset_count: 'AssetCount',
      receiver_asset_count: 'AssetCount',
      offchain_count: 'u32'
    },
    ComplianceReport: {
      anyRequirementSatisfied: 'bool',
      pausedCompliance: 'bool',
      requirements: 'Vec<RequirementReport>'
    },
    RequirementReport: {
      requirementSatisfied: 'bool',
      id: 'u32',
      senderConditions: 'Vec<ConditionReport>',
      receiverConditions: 'Vec<ConditionReport>'
    },
    ConditionReport: {
      satisfied: 'bool',
      condition: 'Condition'
    }
  }
}