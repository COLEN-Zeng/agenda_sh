const INDIVIDUAL = '1'; //个险
const INDIVIDUAL_ACCIDENT = `${INDIVIDUAL}00`; //个人意外险
const INDIVIDUAL_HEALTH = `${INDIVIDUAL}01`; //个人健康险
const INDIVIDUAL_PROPERTY = `${INDIVIDUAL}02`; //个人财产险
const INDIVIDUAL_LIFE = `${INDIVIDUAL}03`; //个人寿险
const INDIVIDUAL_ANNUITIES = `${INDIVIDUAL}04`;//个人年金险
const GROUP = '2'; //团险
const GROUP_ACCIDENT = `${GROUP}00`; //团体意外险
const GROUP_PROPERTY = `${GROUP}01`; //团体财产险
const GROUP_LIABILITY = `${GROUP}02`; //团体责任险
const GROUP_ENGINEERING = `${GROUP}03`; //团体工程险
const GROUP_CARGO = `${GROUP}04`; //团体货运险
const Company = require('./company');
const Area = require('./area');
const Quote = require('./quote');
const Bank = require('./bank');
const NotificationEvent = require('./notification/event');
const ActionRecordKey = require('./action_record_key');
const ErrorCode = require('./error_code');

module.exports = {
    Company,
    Gender: {
        MALE: 0,
        FEMALE: 1
    },
    IdentityType: {
        ID_CARD: 0, // 身份证
        PASSPORT: 1, // 护照
        ORGANIZATION: 2, // 组织机构代码
        BUSINESS_LICENSE: 3, // 营业执照
        TAX: 4, // 税务登记证
        COMPANY_UNION_ID: 5, // 企业三证合一
        OTHER: 6, // 其他
        MILITARY: 7, // 军人证（军官证）
        BIRTH: 8, // 出生证
        RETURN: 9, // 港澳台返乡证
        TEMP_ID_CARD: 10, // 临时身份证
        POLICE: 11, // 警官证
        TAIWAN: 12, // 台胞证
        HOUSEHOLD: 13, // 户口本
        FOREIGNER_RESIDENCE_PERMIT_IN_CHINA: 14, //外国人在华居住证
        HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA: 15, //港澳台居民居住证
        HK_MACAO_ENTRY_AND_EXIT_PERMIT: 16,     // 港澳通行证
        TW_ENTRY_AND_EXIT_PERMIT: 17,           // 台湾通行证
        DRIVE: 18, //驾驶证
        MANAGEMENT_LICENCE: 19, // 经营许可证
        WORK: 20, //工作证
        SOLDIER: 21, //士兵证
        STUDENT: 22, //学生证
        HK_MACAO_CARD: 23,// 港澳身份证
        FOREIGN_PASSPORT: 24,// 外国护照
    },
    TaxpayerType: {
        境内个人: 0, // 境内个人
        小规模纳税人: 1, // 小规模纳税人
        增值税一般纳税人: 2, // 增值税一般纳税人
        非增值税纳税人: 3, // 非增值税纳税人
    },
    Mode: {
        NORMAL: 'normal',
        RACE: 'race',
        THIRD_PARTY_H5: 'third_party_h5'
    },
    Insurance: {
        CoarseType: {
            INDIVIDUAL,
            INDIVIDUAL_ACCIDENT,
            INDIVIDUAL_HEALTH,
            INDIVIDUAL_PROPERTY,
            INDIVIDUAL_LIFE,
            INDIVIDUAL_ANNUITIES,
            GROUP,
            GROUP_ACCIDENT,
            GROUP_PROPERTY,
            GROUP_LIABILITY,
            GROUP_ENGINEERING,
            GROUP_CARGO,
        },
        Type: {
            Individual: {
                Accident: {
                    PERSONAL: `${INDIVIDUAL_ACCIDENT}000`,             //人身意外险
                    TRAVEL: `${INDIVIDUAL_ACCIDENT}001`,               //旅游意外险
                    TRAFFIC: `${INDIVIDUAL_ACCIDENT}002`               //交通意外险
                },
                Health: {
                    SERIOUS_ILLNESS: `${INDIVIDUAL_HEALTH}001`,      //重疾险
                    MEDICAL: `${INDIVIDUAL_HEALTH}002`,              //医疗险
                },
                Property: {
                    VEHICLE: `${INDIVIDUAL_PROPERTY}000`,              //车险
                    FAMILY_PERSONAL: `${INDIVIDUAL_PROPERTY}001`,      //家庭个人财产险
                },
                Life: {
                    TERM: `${INDIVIDUAL_LIFE}000`,                 //定期人寿
                    WHOLE: `${INDIVIDUAL_LIFE}001`,                //终身寿险
                    LIVE: `${INDIVIDUAL_LIFE}002`,                 //生存保险
                    ENDOWMENT: `${INDIVIDUAL_LIFE}003`,            //生死两全
                    PENSION: `${INDIVIDUAL_LIFE}004`,              //养老保险
                    UNIVERSAL: `${INDIVIDUAL_LIFE}005`,            //万能险
                },
                Annuities: {
                    EDUCATION: `${INDIVIDUAL_ANNUITIES}000`,        //教育年金
                    PENSION: `${INDIVIDUAL_ANNUITIES}001`,          //养老年金
                }
            },
            Group: {
                Accident: {
                    PERSONAL: `${GROUP_ACCIDENT}000`,             //团体人身意外险
                    CONSTRUCTION: `${GROUP_ACCIDENT}001`          //建工意外险
                },
                Property: {
                    COMPANY: `${GROUP_PROPERTY}000`,              //企业财产险
                },
                Liability: {
                    EMPLOYERS: `${GROUP_LIABILITY}000`,             //雇主责任险
                    PRODUCT: `${GROUP_LIABILITY}001`,               // 产品责任险
                },
                Engineering: {
                    CONSTRUCTION: `${GROUP_ENGINEERING}000`,         //建筑工程险（工程一切险）
                    INSTALL: `${GROUP_ENGINEERING}001`,              //安装工程保险
                    TECHNOLOGY: `${GROUP_ENGINEERING}002`,           //科技工程保险
                },
                Cargo: {
                    PARCEL_POST: `${GROUP_CARGO}000`,          //邮包保险
                    AIR: `${GROUP_CARGO}001`,                  //航空运输保险
                    OCEAN_VESSEL: `${GROUP_CARGO}002`,         //远洋船舶(国外)
                    INLAND: `${GROUP_CARGO}003`,               //国内水路，陆路货运险（国内）
                }
            }
        },
        AccessMode: {
            API: 0, //api对接
            CPS: 1, //险种链接对接
            PERSONNEL: 2 //人工（主要给团险用的，暂时想不到好的命名）
        }
    },
    Policy: {
        Structure: {
            SIMPLE: 0,
            COMBINATION: 1
        },
        Status: {
            UNPAID: 0,//未支付
            PAID: 1,//已支付
            INSURED: 2,//已承保
            EXPIRED: 4, //已失效
            INSURE_FAILED: 5, //承保失败
            PAY_FAILED: 6, //支付失败
            WITHDRAW: 7, // 已撤件
            SURRENDER: 9//退保
        },
        SubStatus: {
            UNPAID: 0, //未支付-已通过核保
            UNPAID_UNDERWRITING: 11,//未支付-待核保
            UNPAID_UNDERWRITE_NOT_PASS: 12,//未支付-核保未通过
            UNPAID_REJECTED: 13,//未支付-拒保
            UNPAID_CUSTOMER_CONFIRM_PAID: 10,//用户点击确认已支付
            UNPAID_PAYING: 16, // 交易处理中
            PAID: 1, //已支付
            INSURED_ENDORSEMENT_WAIT_AUDIT: 2, //已承保－批单－待审核
            INSURED_ENDORSEMENT_WAIT_PAY: 3, //已承保－批单－待支付
            INSURED_ENDORSEMENT_WAIT_REFUND: 4, //已承保－批单－待退款
            INSURED_ENDORSEMENT_WAIT_INSURE: 5, //已承保－批单－待承保
            INSURED_WAIT_RECEIPT: 6,//已承保－待回执
            INSURED_WAIT_REVISIT: 7,//已承保－待回访
            INSURED_WAIT_ATTACHMENT: 14,//已承保-待起保
            INSURED: 8, //承保
            EXPIRED: 9, //已失效
            EXPIRED_CLAIMED: 18, //已失效——已理赔
            PAY_FAILED: 17, // 支付失败
            WITHDRAW: 15, // 已撤件
            SURRENDER_HESITANT_PERIOD: 98,// 犹豫期退保
            SURRENDER_NORMAL: 99,// 正常退保
            SURRENDER_OVERDUE: 100,// 逾期退保
        },
        Type: {
            DEFAULT: 0, //默认
            VEHICLE_BIZ: 1, //车险－商业险
            VEHICLE_FORCE: 2, //车险－交强险
            INDIVIDUAL_RESERVATION: 3, //个险－预约单
            GROUP_RESERVATION: 4, // 团险 - 预约单
        },
        From: {
            DEFAULT: 0, //银小保系统
            API: 1, //第三方对接平台
            H5: 2, //第三方H5对接平台
            SHOP: 3 //保险商城
        }
    },
    Surrender: {
        Type: {
            HESITANT_PERIOD: 1, // 犹豫期退保
            NORMAL: 2, // 正常退保
            OVERDUE: 3,// 逾期退保
        },
    },
    Endorsement: {
        Status: {
            WAIT_AUDIT: 0,
            WAIT_PAY: 1,
            WAIT_REFUND: 2,
            WAIT_INSURE: 3,
            INSURED: 4
        }
    },
    Quote,
    ElectronicType: {
        IMAGE: 0,
        PDF: 1,
        URL: 2
    },
    Account: {
        Type: {
            ORGANIZATION: 1,   // 机构
            PERSONNEL: 2,   // 人员
        },
        Create: {
            Ret: {
                SUCCESS: 0,   // 成功
                REACH_LIMIT: 1,   // 上级的下级数量已达到上限
                NO_SUCH_SUPERIOR: 2,   // 没有该上级
            }
        }
    },
    Payment: {
        Channel: {
            SELF: 1, //自己收钱
            WITHHOLD: 2, //银行代扣
            THIRD_PAY: 3 //第三方支付链接
        },
        OpsType: {
            PAY: 1,     // 支付
            REFUND: 2,  // 退款
            SIGN: 3     // 签约
        },
        State: {
            NOT_OPERATING: 1,   // 待操作（待支付 / 待退款）
            PENDING: 2,   // 待确认（支付待确认 / 退款待确认）
            CONFIRM: 3,   // 已确认（已支付 / 已退款）
        },
        ShipmentType: {
            POLICY: 1,   // 保单
            ENDORSEMENT: 2,   // 批单
        },
        Method: {
            WECHAT_PAY: 1,   // 自有微信支付
            OFFLINE: 2,   // 线下支付
            BANK_CARD: 3, // 银行卡
            ALI_PAY: 4, //自有支付宝
            THIRD_PARTY_WECHAT_PAY: 5,// 第三方的微信公众号支付
            THIRD_PARTY_WECHAT_PAY_H5: 6,// 第三方的微信h5支付
            THIRD_PARTY_ALI_PAY: 7,// 第三方的支付宝支付
            THIRD_PARTY_WAP_ALI_PAY: 8,// 第三方的手机支付宝支付
        },
        // 续期缴费方式
        PayType: {
            BANK_CARD: 1, // 银行卡
        }
    },
    Bank,
    InsuredRelationWithApplicant: {
        '本人': 0,
        '父母': 1,
        '配偶': 2,
        '子女': 3,
        '祖孙': 4,
        '监护': 5,
        '其他': 6,
        '保单服务人员': 7,
        '直系亲属': 8,
        '兄弟姐妹': 9,
        '朋友': 10,
        '雇佣': 11,
        '赡养': 12,
        '抚养': 13
    },
    BeneficiaryRelationWithInsured: {
        '本人': 0,
        '父母': 1,
        '配偶': 2,
        '子女': 3,
        '祖孙': 4,
        '监护': 5,
        '其他': 6,
        '保单服务人员': 7,
        '直系亲属': 8,
        '雇佣': 11,
        '赡养': 12,
        '抚养': 13
    },
    RaceConstructionGroupAccident: {
        ProjectType: {
            HOUSING_CONSTRUCTION: 0, // 房屋建造
            INTERIOR_DECORATION: 1, // 室内装修
        },
    },
    NotificationEvent,
    ActionRecordKey,
    ErrorCode,
    // 职位等级
    JobRank: {
        UNVERIFIED: 'unverified',// 未认证
        DIRECTOR: 'director', // 总监
        AGENT: 'agent', // 代理人 - 此处应为 客户经理, 因历史遗留原因,保留 agent
        JUNIOR_PARTNER: 'juniorPartner',// 初级合伙人
        INTERMEDIATE_PARTNER: 'intermediatePartner',// 中级合伙人
        SENIOR_PARTNER: 'seniorPartner',// 高级合伙人
        SALES_GENERAL_MANGER: 'salesGeneralManager',// 营销总经理
        SALES_DIRECTOR: 'salesDirector',// 营销总监
        SALES_MANAGER: 'salesManager',// 营销经理
        SALES_COUNSELOR: 'salesCounselor',// 营销顾问
    },
    Claim: {
        Status: {
            IN_AUDIT: 0,
            AUDIT_SUCCESS: 3,
            AUDIT_FAILED: 4,
            SUCCESS: 1,
            FAILED: 2
        }
    },
    SaleType: {
        OFFLINE: 0, // 线下
        ONLINE: 1, // 网销
        APPOINTMENT: 2, // 预约
    },
    ApplicantIdentity: {
        UNCERTIFIED: 0, //未认证
        OUTSIDE_AGENT: 1,//普通代理人
        INSIDE_AGENT: 2,//银邦代理人
        REAL_NAME: 3,//实名认证
    },
    WareHouseInsuranceState: {
        REJECT: 0, //已停售
        CAN_ADD: 1,
        ON_SHELF: 2,
        OFF_SHELF: 3, //下级
    },
    ProxyJumpMode: {
        REDIRECT_URL: 0,
        RETURN_TEXT: 1,
        RETURN_JSON: 2
    },
    IntelligentUnderwriteCallbackResult: {
        CANCEL: 0,
        PASS: 1,
        REFUSE: 2
    },
    Degree: {
        '博士及以上': 0,
        '硕士': 1,
        '本科': 2,
        '大专': 3,
        '中专': 4,
        '高中': 5,
        '初中': 6,
        '其他': 7,
    },
    Area
};
