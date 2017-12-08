var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
import { Account } from './../../models/account/account';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { AccountsInjectionToken, ProfilesInjectionToken } from '../../app/app-config';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
var AccountService = (function () {
    function AccountService(http, storage, profilesApi, accountsApi) {
        this.http = http;
        this.storage = storage;
        this.profilesApi = profilesApi;
        this.accountsApi = accountsApi;
    }
    AccountService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loginUrl, accountInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginUrl = this.accountsApi.url + '/login';
                        accountInfo = { email: email, password: password };
                        return [4 /*yield*/, this.http
                                .post(loginUrl, accountInfo)
                                .toPromise()
                                .then(function (res) { return res.json(); })
                                .then(function (data) {
                                _this.storage.set('userToken', data.id);
                                _this.storage.set('userId', data.userId);
                                return true;
                            }, function (err) {
                                _this.storage.set('userToken', null);
                                _this.storage.set('userId', null);
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AccountService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var logoutUrl;
            return __generator(this, function (_a) {
                logoutUrl = this.accountsApi.url + '/logout';
                this.storage.get('userToken').then(function (userToken) {
                    _this.http.post(logoutUrl, { access_token: userToken });
                });
                return [2 /*return*/];
            });
        });
    };
    AccountService.prototype.register = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var newAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newAccount = new Account(email, password, false, false);
                        return [4 /*yield*/, this.http
                                .post(this.accountsApi.url, newAccount)
                                .toPromise()
                                .then(function (res) { return res.json(); })
                                .then(function (data) {
                                return true;
                            }, function (err) {
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AccountService;
}());
AccountService = __decorate([
    Injectable(),
    __param(2, Inject(ProfilesInjectionToken)),
    __param(3, Inject(AccountsInjectionToken)),
    __metadata("design:paramtypes", [Http,
        Storage, Object, Object])
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map