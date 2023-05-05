"use strict";
exports.__esModule = true;
exports.getModel = exports.getCtx = exports.storage = void 0;
var async_hooks_1 = require("async_hooks");
var config_1 = require("../config");
exports.storage = new async_hooks_1.AsyncLocalStorage();
function getCtx() {
    return exports.storage.getStore();
}
exports.getCtx = getCtx;
function getModel(name) {
    return getCtx().get(config_1["default"].MongoAtlas.realmName)(name);
}
exports.getModel = getModel;
