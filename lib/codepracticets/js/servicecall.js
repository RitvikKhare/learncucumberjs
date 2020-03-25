"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var ServiceCalls = /** @class */ (function () {
    function ServiceCalls() {
        this.urlString = "";
        this.methodString = "";
        this.headerKeys = [];
        this.headerValues = [];
        this.responseKeys = [];
        this.responseValues = [];
    }
    ServiceCalls.prototype.setURL = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.urlString = url;
                return [2 /*return*/];
            });
        });
    };
    ServiceCalls.prototype.setMethod = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.methodString = method;
                return [2 /*return*/];
            });
        });
    };
    ServiceCalls.prototype.setHeaders = function (headerKey, headerVal) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.headerKeys.push(headerKey);
                this.headerValues.push(headerVal);
                return [2 /*return*/];
            });
        });
    };
    ServiceCalls.prototype.setResponse = function (responseKey, responseValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.responseKeys.push(responseKey);
                this.responseValues.push(responseValue);
                return [2 /*return*/];
            });
        });
    };
    ServiceCalls.prototype.setPayload = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.payloadValue = payload;
                return [2 /*return*/];
            });
        });
    };
    ServiceCalls.prototype.makeServiceCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var f1, f2, body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        f1 = this.headerKeys[0];
                        f2 = this.headerValues[0];
                        if (!(this.methodString.toLowerCase() === 'get')) return [3 /*break*/, 2];
                        return [4 /*yield*/, node_fetch_1.default(this.urlString, {
                                method: this.methodString,
                                headers: { f1: f2 }
                            })
                                .then(function (res) { return res.json(); })
                                .then(function (json) {
                                console.log(json);
                                _this.responseJson = json;
                                console.log(_this.responseJson.id + ' | value from JSON');
                                for (var cnt = 0; cnt < _this.responseKeys.length; cnt++) {
                                    var bidString = _this.responseKeys[cnt];
                                    console.log('bidString | ' + bidString);
                                    console.log(_this.responseJson.bidString + ' | 2 value from JSON');
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.methodString.toLowerCase() === 'post')) return [3 /*break*/, 4];
                        body = { a: 1 };
                        return [4 /*yield*/, node_fetch_1.default(this.urlString, {
                                method: 'post',
                                body: JSON.stringify(body),
                                headers: { 'Content-Type': 'application/json' }
                            })
                                .then(function (res) { return res.json(); })
                                .then(function (json) { return console.log(json); })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, console.log('Service Method Set is incorrect/unhandled ' + this.methodString)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return ServiceCalls;
}());
exports.ServiceCalls = ServiceCalls;
var obj1 = new ServiceCalls();
obj1.setURL('https://api.github.com/users/RitvikKhare');
obj1.setMethod('GET');
obj1.setHeaders('Content-Type', 'application/json');
obj1.makeServiceCall();
obj1.setResponse('id', 28248633);
obj1.setResponse('node_id', 'MDQ6VXNlcjI4MjQ4NjMz');
