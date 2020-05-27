const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;

module.exports = () => object({
    id: Common.Schema.insurance().id(),
    base: object({
        frontendProcessId: string().desc('前端流程ID'),
        characteristicInfo: array(string()).desc('产品描述'),
        defaultSalesVolume: integer().desc('默认展示的销量'),
        insuranceCode: string(),
        
        entrance: object({
            name: string().desc('产品名'),
            description: array(string()).desc('产品描述'),
            imageUrl: string().desc('logo图'),// 找保险的
            productRecommendedImageUrl: string().desc('产品推荐位大图'),
            buttonText: string().desc('按钮文案'),
            //搜索用
            insuranceType: array(string().desc('险种类型，中文枚举')).desc('险种分类'),
            people: array(string().desc('例如：成人,少儿,老人')).desc('年龄段'),
            group: array(string()).desc('人群'),
            characteristic: array(string()).desc('产品特色'),
            promotion: number().desc('预约险种用到')
        })
            .require(
                'name',
                'description',
                'imageUrl',
                'productRecommendedImageUrl',
                'buttonText',
                'insuranceType',
                'people',
                'group',
                'characteristic',
            )
            .additionalProperties(false)
            .desc('入口配置'),

        advPicture: object({
            banner: string().desc('banner'),
            video: object({
                enable: boolean().desc('是否启用视频介绍'),
                fileId: string().desc('云点播文件id')
            })
                .require('enable')
                .desc('险种视频介绍'),
            insIntro: array({
                title: string(),
                content: object({
                    imgs: array(string()),
                    text: array(string())
                })
                    .desc('介绍内容，可选图片或者文字')
            })
                .desc('图片资源相关')
        })
            .desc('险种页正文配置')
            .requireAll()
            .additionalProperties(false),
        taxResident: string().enum('0', '1'),
        docs: object({
            documentTitle: string(),
            healthInquiry: array(
                {
                    id: string().desc('选项id'),
                    question: string().desc('问题，支持html'),
                    options: array(string()).desc('选项'),
                },
            )
                .desc('健康告知内容'),
            terms: array(
                object({
                    id: string().desc('老险种用到'),
                    name: string().desc('条例名字'),
                    downloadUrl: string().desc('条款文件下载地址'),
                    type: integer(),
                })
                    .require('name', 'downloadUrl', 'type')
            ).desc('保险条款'),
            others: array(
                object({
                    id: string().desc('老险种用到'),
                    name: string().desc('条例名字'),
                    downloadUrl: string().desc('条款文件下载地址'),
                    type: integer(),
                })
                    .require('name', 'downloadUrl', 'type')
            )

        }),

        duty: object({
            quoteType: string().desc('险种投保类型, 保额: amount  和套餐类型: combo')
                .enum('amount', 'combo'),
            value: string().desc('默认套餐id, 如果是保额模式'),
            insurances: array(
                object({
                    name: string(),
                    id: string(),
                    priceText: string().desc('价格文案'),
                    duty: array(object()).desc('保障责任数组，前端自己发挥'),
                    rider: array(object()).desc('保障责任数组，前端自己发挥'),
                    firstPremium: integer()
                })
                    .additionalProperties(false)
            )
        })
            .additionalProperties(false)
            .desc('保障责任模块'),

        shouldKnownList: array(
            object({
                id: string()
                    .desc(`
                        period:'保障期限',
                        group:'适用人群',
                        city:'可投保城市',
                        hesitantPeriod:'犹豫期', 
                        waitPeriod:'等待期',
                        renewRule:'续保规则',
                        payPeriod:'交费期限',
                        job:'承保职业',
                        intelligentUnderwrite:'智能核保',
                        personalUnderwrite:'人工核保',
                        smoke:'是否吸烟',
                        incomeRule:'收入要求',
                        amount: '基本保额'
                    `)
                    .enum(
                        'period',
                        'group',
                        'city',
                        'hesitantPeriod',
                        'waitPeriod',
                        'renewRule',
                        'payPeriod',
                        'job',
                        'intelligentUnderwrite',
                        'personalUnderwrite',
                        'smoke',
                        'incomeRule',
                        'amount',
                    ),
                value: string()
            })
        )
            .desc('投保须知, 定义一批规定的id名属性, 中文名有各自实现'),

        shareData: object().patternProperties({
            '^.+$': {
                title: string().desc('分享标题'),
                desc: string().desc('分享描述'),
                image: string().desc('分享图')
            }
        })
            .desc('分享配置,默认分享key为default'),
        
        payType: string().enum('thirdParty', 'bank', 'yinBang', 'bankAndCaptcha')
            .desc('支付方式 第三方支付thirdParty,银行卡支付bank,银邦支付yinBang,银行卡支付加验证码bankAndCaptcha'),
        rejectLaunderType: string().enum('reject', 'certificateImage', 'normal')
            .desc('reject(拒绝投保) /  certificateImage(上传认证图片)  / normal(普通模式不处理)'),
    })
        .require(
            'frontendProcessId'
        )
        .additionalProperties(false)
        .desc('基础信息配置'),
    plan: object().additionalProperties(true),
    insureInfo: object().additionalProperties(true),
    underwrite: object({
        type: string().enum('normal', 'thirdParty', 'custom')
            .desc('normal:普通健康告知、 thirdParty直接跳第三方核保， custom自定义核保'),
        data: string().desc('前端序列化为字符串， 答题树')
    })
        .require('type')
        .additionalProperties(false)
        .desc('核保配置化 H5类型暂时不实现。 处理是否展示健康告知, 第三方核保和 自定义核保'),
})
    .additionalProperties(false)
    .require('id');