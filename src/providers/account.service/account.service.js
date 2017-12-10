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
import { Http, URLSearchParams } from '@angular/http';
import { AccountsInjectionToken, ProfilesInjectionToken } from '../../app/app-config';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from '../authentication.service/authentication.service';
var AccountService = (function () {
    function AccountService(http, authService, storage, profilesApi, accountsApi) {
        this.http = http;
        this.authService = authService;
        this.storage = storage;
        this.profilesApi = profilesApi;
        this.accountsApi = accountsApi;
    }
    AccountService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loginUrl, accountInfo;
            return __generator(this, function (_a) {
                loginUrl = this.accountsApi.url + '/login';
                accountInfo = { email: email, password: password };
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.post(loginUrl, accountInfo).subscribe(function (data) {
                            var body = data.json();
                            _this.authService.storeUserToken(body);
                            resolve(true);
                        }, function (err) {
                            _this.authService.clearUserToken();
                            resolve(false);
                        });
                    })];
            });
        });
    };
    AccountService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userToken, logoutUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUserToken()];
                    case 1:
                        userToken = _a.sent();
                        logoutUrl = this.accountsApi.url + '/logout';
                        return [4 /*yield*/, this.http.post(logoutUrl, { access_token: userToken })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.register = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var newAccount;
            return __generator(this, function (_a) {
                newAccount = new Account(email, password, false, false);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.post(_this.accountsApi.url, newAccount).subscribe(function (data) {
                            _this.login(email, password);
                            resolve(true);
                        }, function (err) {
                            resolve(false);
                        });
                    })];
            });
        });
    };
    AccountService.prototype.getAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestHeaders, getAccountByIdUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.buildAuthenticationRequest()];
                    case 1:
                        requestHeaders = _a.sent();
                        getAccountByIdUrl = this.accountsApi.url + '/' + id;
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.http.get(getAccountByIdUrl, requestHeaders).subscribe(function (data) {
                                    resolve(data.json());
                                });
                            })];
                }
            });
        });
    };
    AccountService.prototype.checkAccountExists = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkAccountExistsUrl, params;
            return __generator(this, function (_a) {
                checkAccountExistsUrl = this.accountsApi.url + '/' + 'checkAccountExists';
                params = new URLSearchParams();
                params.append('email', email);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http
                            .get(checkAccountExistsUrl, {
                            params: params
                        })
                            .subscribe(function (data) {
                            var body = data.json();
                            resolve(body.doesAccountExist);
                        });
                    })];
            });
        });
    };
    AccountService.prototype.checkProfileExists = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkProfileExistsUrl, params;
            return __generator(this, function (_a) {
                checkProfileExistsUrl = this.accountsApi.url + '/' + 'checkProfileExists';
                params = new URLSearchParams();
                params.append('email', email);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http
                            .get(checkProfileExistsUrl, {
                            params: params
                        })
                            .subscribe(function (data) {
                            var body = data.json();
                            resolve(body.doesProfileExist);
                        });
                    })];
            });
        });
    };
    return AccountService;
}());
AccountService = __decorate([
    Injectable(),
    __param(3, Inject(ProfilesInjectionToken)),
    __param(4, Inject(AccountsInjectionToken)),
    __metadata("design:paramtypes", [Http,
        AuthenticationService,
        Storage, Object, Object])
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map