/**
 * 1, 10 尚未使用
 * 2 -> 3 -> 4
 * 5 -> 6 -> 4
 * 7 -> 8 -> 9
 */
module.exports = {
    Status: {
        // 首次报价后的状态
        QUOTED: 2, // 报价成功
        FAILED: 5, // 报价失败
        PRE_QUOTED: 7, // 预报价 - 必须走人工报价流程

        // 申请议价时的状态
        SECOND_QUOTING: 3, // 首次报价成功, 但申请二次议价中
        FAILED_SECOND_QUOTING: 6, // 首次报价失败, 故申请二次报价
        HUMAN_QUOTING: 8, // 人工报价中

        // 敲定议价的状态
        SECOND_QUOTED: 4, // 二次报价成功
        HUMAN_QUOTED: 9, // 人工报价完成

        QUOTING: 1, // 报价中
        REJECT: 10, // 拒保
    },
};
