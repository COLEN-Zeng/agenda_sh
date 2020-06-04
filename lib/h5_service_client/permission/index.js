
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5PermissionOrgDefaultPerAddRequest} request
    * @returns {Promise<H5PermissionOrgDefaultPerAddResponse>}
    */
    orgDefaultPerAdd: function (request = null, timeout = 10) {
        return client.call('org.default_per.add', request, timeout);
    },

    /**
    * @param {H5PermissionOrgPermissionUpdateRequest} request
    * @returns {Promise<H5PermissionOrgPermissionUpdateResponse>}
    */
    orgPermissionUpdate: function (request = null, timeout = 10) {
        return client.call('org_permission.update', request, timeout);
    },

    /**
    * @param {H5PermissionOrgRoleAddRequest} request
    * @returns {Promise<H5PermissionOrgRoleAddResponse>}
    */
    orgRoleAdd: function (request = null, timeout = 10) {
        return client.call('org_role.add', request, timeout);
    },

    /**
    * @param {H5PermissionOrgRoleDeleteRequest} request
    * @returns {Promise<H5PermissionOrgRoleDeleteResponse>}
    */
    orgRoleDelete: function (request = null, timeout = 10) {
        return client.call('org_role.delete', request, timeout);
    },

    /**
    * @param {H5PermissionOrgRoleGetRequest} request
    * @returns {Promise<H5PermissionOrgRoleGetResponse>}
    */
    orgRoleGet: function (request = null, timeout = 10) {
        return client.call('org_role.get', request, timeout);
    },

    /**
    * @param {H5PermissionOrgRoleUpdateRequest} request
    * @returns {Promise<H5PermissionOrgRoleUpdateResponse>}
    */
    orgRoleUpdate: function (request = null, timeout = 10) {
        return client.call('org_role.update', request, timeout);
    },

    /**
    * @param {H5PermissionPermissionGetRequest} request
    * @returns {Promise<H5PermissionPermissionGetResponse>}
    */
    permissionGet: function (request = null, timeout = 10) {
        return client.call('permission.get', request, timeout);
    },

    /**
    * @param {H5PermissionUserRoleAddRequest} request
    * @returns {Promise<H5PermissionUserRoleAddResponse>}
    */
    userRoleAdd: function (request = null, timeout = 10) {
        return client.call('user_role.add', request, timeout);
    },

    /**
    * @param {H5PermissionUserRoleClearRequest} request
    * @returns {Promise<H5PermissionUserRoleClearResponse>}
    */
    userRoleClear: function (request = null, timeout = 10) {
        return client.call('user_role.clear', request, timeout);
    },

    /**
    * @param {H5PermissionUserRoleDeleteRequest} request
    * @returns {Promise<H5PermissionUserRoleDeleteResponse>}
    */
    userRoleDelete: function (request = null, timeout = 10) {
        return client.call('user_role.delete', request, timeout);
    },

    /**
    * @param {H5PermissionUserRoleGetRequest} request
    * @returns {Promise<H5PermissionUserRoleGetResponse>}
    */
    userRoleGet: function (request = null, timeout = 10) {
        return client.call('user_role.get', request, timeout);
    },

    /**
    * @param {H5PermissionUserRoleUpdateRequest} request
    * @returns {Promise<H5PermissionUserRoleUpdateResponse>}
    */
    userRoleUpdate: function (request = null, timeout = 10) {
        return client.call('user_role.update', request, timeout);
    },

    Model: require('./model')(client)
});
