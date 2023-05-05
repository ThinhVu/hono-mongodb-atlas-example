"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.handleApiError = exports.ApiError = void 0;
var http_exception_1 = require("hono/http-exception");
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(errorCode, message) {
        var _this = _super.call(this, errorCode) || this;
        _this.__API_ERROR__ = true;
        _this.errorCode = errorCode;
        // @ts-ignore
        _this.message = message;
        return _this;
    }
    return ApiError;
}(Error));
exports.ApiError = ApiError;
function handleApiError(e, c) {
    // TODO: Correctly handle errors
    // for some reason, the error is not an instance of ApiError
    // @ts-ignore
    if (e.__API_ERROR__) {
        // @ts-ignore
        throw new http_exception_1.HTTPException(400, { error: e.errorCode, message: e.message });
    }
    else {
        // @ts-ignore
        throw new http_exception_1.HTTPException(500, { error: "E_000", reason: typeof (e) === 'string' ? e : e.message });
    }
}
exports.handleApiError = handleApiError;
