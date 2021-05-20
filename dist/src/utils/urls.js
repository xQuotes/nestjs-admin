"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUrl = exports.deleteUrl = exports.changeActionUrl = exports.changeUrl = exports.listActionUrl = exports.changeListUrl = exports.logoutUrl = exports.loginUrl = exports.indexUrl = void 0;
const formatting_1 = require("./formatting");
const entity_1 = require("./entity");
function indexUrl() {
    return `/adminUser`;
}
exports.indexUrl = indexUrl;
function loginUrl() {
    return `/adminUser/login`;
}
exports.loginUrl = loginUrl;
function logoutUrl() {
    return `/adminUser/logout`;
}
exports.logoutUrl = logoutUrl;
function changeListUrl(section, metadata) {
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}`;
}
exports.changeListUrl = changeListUrl;
function listActionUrl(section, metadata) {
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}/action`;
}
exports.listActionUrl = listActionUrl;
function changeUrl(section, metadata, entity) {
    const primaryKey = urlEncodePrimaryKey(entity_1.getPrimaryKeyValue(metadata, entity));
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}/${primaryKey}/change`;
}
exports.changeUrl = changeUrl;
function changeActionUrl(section, metadata, entity) {
    const primaryKey = urlEncodePrimaryKey(entity_1.getPrimaryKeyValue(metadata, entity));
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}/${primaryKey}/action`;
}
exports.changeActionUrl = changeActionUrl;
function deleteUrl(section, metadata, entity) {
    const primaryKey = urlEncodePrimaryKey(entity_1.getPrimaryKeyValue(metadata, entity));
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}/${primaryKey}/delete`;
}
exports.deleteUrl = deleteUrl;
function addUrl(section, metadata) {
    return `/adminUser/${formatting_1.parseName(section.name)}/${formatting_1.parseName(metadata.name)}/add`;
}
exports.addUrl = addUrl;
function urlEncodePrimaryKey(primaryKey) {
    return encodeURIComponent(JSON.stringify(primaryKey));
}
//# sourceMappingURL=urls.js.map