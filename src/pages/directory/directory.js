var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { generateFullName } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';
var DirectoryPage = (function () {
    function DirectoryPage(navCtrl, navParams, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileService = profileService;
        this.profilesToDisplay = [];
        this.resultsPerPage = 30;
        this.totalRecordsRetrieved = 0;
        this.searchTextSubject = new Subject();
        this.generateFullName = generateFullName;
        this.searchTextSubject
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(function (text) {
            if (text == '') {
                _this.resetData();
                return _this.getNewProfiles(_this.resultsPerPage, _this.totalRecordsRetrieved);
            }
            else {
                return _this.profileService.getProfilesBySearch(text);
            }
        })
            .subscribe(function (profiles) {
            _this.resetData();
            _this.addNewData(profiles);
        });
        this.searchTextValue = '';
        this.searchTextSubject.next(this.searchTextValue);
    }
    DirectoryPage.prototype.goToDirectoryDetail = function (profile) {
        this.navCtrl.push('DirectoryDetailPage', { id: profile.id });
    };
    DirectoryPage.prototype.getFullName = function (profile) {
        return generateFullName(profile.firstName, profile.lastName);
    };
    DirectoryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.totalRecordsRetrieved += this.resultsPerPage;
        this.getNewProfiles(this.resultsPerPage, this.totalRecordsRetrieved).then(function (profiles) {
            setTimeout(function () {
                _this.addNewData(profiles);
                infiniteScroll.complete();
            }, 500);
        });
    };
    DirectoryPage.prototype.getNewProfiles = function (limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profileService.getProfilesWithinLimit(limit, skip)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DirectoryPage.prototype.addNewData = function (profiles) {
        this.profilesToDisplay = this.profilesToDisplay.concat(profiles);
    };
    DirectoryPage.prototype.resetData = function () {
        this.totalRecordsRetrieved = 0;
        this.profilesToDisplay = [];
    };
    DirectoryPage.prototype.onCancel = function (event) {
        this.searchTextValue = '';
        this.searchTextSubject.next(this.searchTextValue);
    };
    DirectoryPage.prototype.onInput = function (event) {
        this.searchTextSubject.next(this.searchTextValue);
    };
    return DirectoryPage;
}());
DirectoryPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-directory',
        templateUrl: 'directory.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ProfileService])
], DirectoryPage);
export { DirectoryPage };
//# sourceMappingURL=directory.js.map