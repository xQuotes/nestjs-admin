"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyPrint = exports.displayName = exports.adminUrl = void 0;
const urls = require("../utils/urls");
const lodash_1 = require("lodash");
function adminUrl(route, ...args) {
    switch (route) {
        case 'adminUser/login':
            return urls.loginUrl();
        case 'adminUser/index':
            return urls.indexUrl();
        case 'adminUser/changelist':
            return urls.changeListUrl(...args);
        case 'adminUser/listAction':
            return urls.listActionUrl(...args);
        case 'adminUser/change':
            return urls.changeUrl(...args);
        case 'adminUser/changeAction':
            return urls.changeActionUrl(...args);
        case 'adminUser/add':
            return urls.addUrl(...args);
        case 'adminUser/delete':
            return urls.deleteUrl(...args);
        case 'adminUser/logout':
            return urls.logoutUrl();
        default:
            const guard = route;
            throw new Error(`Route "${route}" doesn't exist`);
    }
}
exports.adminUrl = adminUrl;
function displayName(entity, metadata) {
    if (entity.__proto__.hasOwnProperty('toString')) {
        return entity.toString();
    }
    const primaryColumns = metadata.primaryColumns.map(col => col.getEntityValue(entity));
    return primaryColumns.join(' - ');
}
exports.displayName = displayName;
function prettyPrint(name) {
    return lodash_1.startCase(name);
}
exports.prettyPrint = prettyPrint;
//# sourceMappingURL=admin.filters.js.map