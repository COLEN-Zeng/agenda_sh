
// 本文件由toolchain/code_generator/service/build脚本自动生成
/// <reference path = "global.d.ts" />

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {PermissionOrgRoleAddRequest} request
    * @returns {PermissionOrgRoleAddResponse}
    */
    orgRoleAdd: function (request = null, timeout = 10) {
        return client.call('org_role.add', request, timeout);
    },

    /**
    * @param {PermissionOrgRoleDeleteRequest} request
    * @returns {PermissionOrgRoleDeleteResponse}
    */
    orgRoleDelete: function (request = null, timeout = 10) {
        return client.call('org_role.delete', request, timeout);
    },

    /**
    * @param {PermissionOrgRoleGetRequest} request
    * @returns {PermissionOrgRoleGetResponse}
    */
    orgRoleGet: function (request = null, timeout = 10) {
        return client.call('org_role.get', request, timeout);
    },

    /**
    * @param {PermissionOrgRoleUpdateRequest} request
    * @returns {PermissionOrgRoleUpdateResponse}
    */
    orgRoleUpdate: function (request = null, timeout = 10) {
        return client.call('org_role.update', request, timeout);
    },

    /**
    * @param {PermissionPermissionGetRequest} request
    * @returns {PermissionPermissionGetResponse}
    */
    permissionGet: function (request = null, timeout = 10) {
        return client.call('permission.get', request, timeout);
    },

    /**
    * @param {PermissionUserRoleAddRequest} request
    * @returns {PermissionUserRoleAddResponse}
    */
    userRoleAdd: function (request = null, timeout = 10) {
        return client.call('user_role.add', request, timeout);
    },

    /**
    * @param {PermissionUserRoleClearRequest} request
    * @returns {PermissionUserRoleClearResponse}
    */
    userRoleClear: function (request = null, timeout = 10) {
        return client.call('user_role.clear', request, timeout);
    },

    /**
    * @param {PermissionUserRoleDeleteRequest} request
    * @returns {PermissionUserRoleDeleteResponse}
    */
    userRoleDelete: function (request = null, timeout = 10) {
        return client.call('user_role.delete', request, timeout);
    },

    /**
    * @param {PermissionUserRoleGetRequest} request
    * @returns {PermissionUserRoleGetResponse}
    */
    userRoleGet: function (request = null, timeout = 10) {
        return client.call('user_role.get', request, timeout);
    },

    /**
    * @param {PermissionUserRoleUpdateRequest} request
    * @returns {PermissionUserRoleUpdateResponse}
    */
    userRoleUpdate: function (request = null, timeout = 10) {
        return client.call('user_role.update', request, timeout);
    },

    Model: require('./model')(client)
});
