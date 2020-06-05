declare class CommonClientClass {
    static getInstance(): CommonClientClass;

    call(method: string, request: any, timeout?: number): any;

    customerPoolEnterpriseFind(request: CustomerPoolEnterpriseFindRequest, timeout: number): CustomerPoolEnterpriseFindResponse;

    initCustomerPoolEnterpriseFindRequest(initValue: any): CustomerPoolEnterpriseFindRequest


    customerPoolEnterpriseInsertOrUpdate(request: CustomerPoolEnterpriseInsertOrUpdateRequest, timeout: number): CustomerPoolEnterpriseInsertOrUpdateResponse;

    initCustomerPoolEnterpriseInsertOrUpdateRequest(initValue: any): CustomerPoolEnterpriseInsertOrUpdateRequest


    customerPoolInfoFind(request: CustomerPoolInfoFindRequest, timeout: number): CustomerPoolInfoFindResponse;

    initCustomerPoolInfoFindRequest(initValue: any): CustomerPoolInfoFindRequest


    customerPoolInfoInsertOrUpdate(request: CustomerPoolInfoInsertOrUpdateRequest, timeout: number): CustomerPoolInfoInsertOrUpdateResponse;

    initCustomerPoolInfoInsertOrUpdateRequest(initValue: any): CustomerPoolInfoInsertOrUpdateRequest


    customerPoolInfoWithOpenIdFind(request: CustomerPoolInfoWithOpenIdFindRequest, timeout: number): CustomerPoolInfoWithOpenIdFindResponse;

    initCustomerPoolInfoWithOpenIdFindRequest(initValue: any): CustomerPoolInfoWithOpenIdFindRequest


    customerPoolInfoWithOpenIdInsertOrUpdate(request: CustomerPoolInfoWithOpenIdInsertOrUpdateRequest, timeout: number): CustomerPoolInfoWithOpenIdInsertOrUpdateResponse;

    initCustomerPoolInfoWithOpenIdInsertOrUpdateRequest(initValue: any): CustomerPoolInfoWithOpenIdInsertOrUpdateRequest


    delayedMessagePublish(request: DelayedMessagePublishRequest, timeout: number): DelayedMessagePublishResponse;

    initDelayedMessagePublishRequest(initValue: any): DelayedMessagePublishRequest


    smsSend(request: SmsSendRequest, timeout: number): SmsSendResponse;

    initSmsSendRequest(initValue: any): SmsSendRequest


    tokenGenerate(request: TokenGenerateRequest, timeout: number): TokenGenerateResponse;

    initTokenGenerateRequest(initValue: any): TokenGenerateRequest


    tokenGet(request: TokenGetRequest, timeout: number): TokenGetResponse;

    initTokenGetRequest(initValue: any): TokenGetRequest


    verifyCodeCheck(request: VerifyCodeCheckRequest, timeout: number): VerifyCodeCheckResponse;

    initVerifyCodeCheckRequest(initValue: any): VerifyCodeCheckRequest


}

interface CustomerPoolEnterpriseFindRequest {
    where?: {
        [k: string]: any;
    };
    sort?:
    | {
        [k: string]: any;
    }
    | {
        [k: string]: any;
    }[];
    limit?: {
        [k: string]: any;
    };
}

type CustomerPoolEnterpriseFindResponse = any[];


interface CustomerPoolEnterpriseInsertOrUpdateRequest {
    userId: string;
    type: 1 | 2;
    /**
     * 姓名
     */
    name: string;
    area: {
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 区
         */
        country?: string;
        [k: string]: any;
    };
    /**
     * 所属行业
     */
    industrialType: number;
    tagList: string[];
    contacts?: {
        /**
         * 联系人姓名
         */
        name: string;
        /**
         * 联系人手机号
         */
        mobile: string;
    };
    /**
     * 员工数量
     */
    employeeNum?: number;
    /**
     * 工业等级
     */
    industrialGrade?: number;
    /**
     * 证件类型
     */
    identityType?: number;
    /**
     * 证件号码
     */
    identityNo?: string;
    /**
     * 重点产品或服务
     */
    majorProductOrService?: string;
}

interface CustomerPoolEnterpriseInsertOrUpdateResponse {
    id: string;
    /**
     * 所属业务员ID
     */
    userId: string;
    /**
     * 企业名
     */
    name: string;
    type: 1 | 2;
    tagList: string[];
    area?: {
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 区
         */
        country?: string;
        [k: string]: any;
    };
    /**
     * 所属行业
     */
    industrialType?: number;
    contacts?: {
        /**
         * 联系人姓名
         */
        name: string;
        /**
         * 联系人手机号
         */
        mobile: string;
    };
    /**
     * 员工数量
     */
    employeeNum?: number;
    /**
     * 工业等级
     */
    industrialGrade?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 证件类型
     */
    identityType?: 2 | 3 | 4 | 5 | 6 | 19;
    /**
     * 证件号码
     */
    identityNo?: string;
    /**
     * 重点产品或服务
     */
    majorProductOrService?: string;
    [k: string]: any;
}


interface CustomerPoolInfoFindRequest {
    where?: {
        [k: string]: any;
    };
    sort?:
    | {
        [k: string]: any;
    }
    | {
        [k: string]: any;
    }[];
    limit?: {
        [k: string]: any;
    };
}

type CustomerPoolInfoFindResponse = any[];


interface CustomerPoolInfoInsertOrUpdateRequest {
    id?: string;
    userId: string;
    /**
     * 姓名
     */
    name: string;
    type: 1 | 2 | 3;
    identityType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
    identityNo?: string;
    gender?: 0 | 1;
    birth?: string;
    /**
     * 是否有社保
     */
    haveSocialSecurity?: boolean;
    /**
     * 手机号
     */
    mobile?: string;
    [k: string]: any;
}

interface CustomerPoolInfoInsertOrUpdateResponse {
    id: string;
    type: 1 | 2 | 3;
    /**
     * 所属业务员ID
     */
    userId: string;
    /**
     * 姓名
     */
    name: string;
    identityType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
    identityNo?: string;
    gender?: 0 | 1;
    /**
     * 出生年月日
     */
    birth?: string;
    /**
     * 是否有社保
     */
    haveSocialSecurity?: boolean;
    /**
     * 手机号
     */
    mobile?: string;
    [k: string]: any;
}


interface CustomerPoolInfoWithOpenIdFindRequest {
    where?: {
        [k: string]: any;
    };
    sort?:
    | {
        [k: string]: any;
    }
    | {
        [k: string]: any;
    }[];
    limit?: {
        [k: string]: any;
    };
}

type CustomerPoolInfoWithOpenIdFindResponse = any[];


interface CustomerPoolInfoWithOpenIdInsertOrUpdateRequest {
    id?: string;
    type?: 1 | 2 | 3;
    openId: string;
    /**
     * 姓名
     */
    name: string;
    identityType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
    identityNo?: string;
    gender?: 0 | 1;
    birth?: string;
    /**
     * 是否有社保
     */
    haveSocialSecurity?: boolean;
    /**
     * 手机号
     */
    mobile?: string;
    [k: string]: any;
}

interface CustomerPoolInfoWithOpenIdInsertOrUpdateResponse {
    id: string;
    type: 1 | 2 | 3;
    /**
     * openId
     */
    openId?: string;
    /**
     * 姓名
     */
    name: string;
    identityType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
    identityNo?: string;
    gender?: 0 | 1;
    /**
     * 出生年月日
     */
    birth?: string;
    /**
     * 是否有社保
     */
    haveSocialSecurity?: boolean;
    /**
     * 手机号
     */
    mobile?: string;
    [k: string]: any;
}


interface DelayedMessagePublishRequest {
    /**
     * 消息主题
     */
    event: string;
    /**
     * 消息内容
     */
    message: string;
    /**
     * 延时时间
     */
    delayedTime: number;
    [k: string]: any;
}

type DelayedMessagePublishResponse = null;


interface SmsSendRequest {
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 短信模板ID
     */
    templateId: string;
    /**
     * 只能是 string 数组
     */
    params: string[];
    [k: string]: any;
}

type SmsSendResponse = boolean;


interface TokenGenerateRequest {
    /**
     * 空间名称
     */
    collection: string;
    /**
     * 此空间最多资源数量
     */
    limit?: number;
    [k: string]: any;
}

interface TokenGenerateResponse {
    /**
     * 0-成功, 1-用户资源库资源数量超过限定值
     */
    result?: 0 | 1;
    /**
     * 此url进行图片上传
     */
    url?: string;
    [k: string]: any;
}


interface TokenGetRequest {
    token: string;
}

type TokenGetResponse = {
    /**
     * token
     */
    id: string;
    /**
     * url
     */
    url: string;
} | null;


interface VerifyCodeCheckRequest {
    mobile: string;
    code: string;
    [k: string]: any;
}

type VerifyCodeCheckResponse = boolean;

