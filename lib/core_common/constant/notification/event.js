//定义发布事件

module.exports = {
    Test: 'test',
    POLICY_INSURED: 'policy_insured',
    POLICY_INSURE_FAILED: 'policy_insure_failed',
    POLICY_PAID: 'policy_paid',
    POLICY_PAY_FAILED: 'policy_pay_failed',
    ENDORSEMENT_INSURED: 'endorsement_insured',
    NEGOTIATION_FINALIZED: 'negotiation_finalized',
    PROPOSAL_UNDERWROTE: 'proposal_underwrote',
    CLAIMED: 'claimed', // 理赔赔付成功
    CLAIM_FAILED: 'claim_failed', // 理赔赔付失败
    CLAIM_AUDIT_QUERYING: 'claim_audit_querying', // 理赔审核中, 需要再次查询
    CLAIM_AUDIT_FINALIZE: 'claim_audit_finalize', // 理赔审核完毕
    POLICY_PAYING: 'policy_paying',
    ELECTRONIC_GET: 'electronic_get',
    ELECTRONIC_CALLBACK: 'electronic_callback',// h5电子保单回调
    POLICY_SURRENDER: 'policy_surrender',
    POLICY_RENEW: 'policy_renew',
    POLICY_RENEW_FAILED: 'policy_renew_failed',// 续费失败
    POLICY_RENEWAL_CONFIRM: 'policy_renewal_confirm',// 续费确认
};
