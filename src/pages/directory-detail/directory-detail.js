var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var DirectoryDetailPage = (function () {
    function DirectoryDetailPage(navCtrl, navParams /*, public toastCtrl: ToastController*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams; /*, public toastCtrl: ToastController*/
        this.profile = null;
        if (navParams.get('profile') !== undefined) {
            this.profile = navParams.get('profile');
        }
        else {
            //TODO: find out why toastCtrl .present() causes tests to fail
            /*
            let toast = this.toastCtrl.create({
              message: "Sorry, this profile could not be loaded.",
              duration: 3000,
              showCloseButton: true,
              dismissOnPageChange: true
            });
            toast.onDidDismiss(() => {
              this.navCtrl.push('DirectoryPage');
            });
            toast.present();
            */
            this.navCtrl.push('DirectoryPage');
        }
    }
    return DirectoryDetailPage;
}());
DirectoryDetailPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-directory-detail',
        templateUrl: 'directory-detail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams /*, public toastCtrl: ToastController*/])
], DirectoryDetailPage);
export { DirectoryDetailPage };
//# sourceMappingURL=directory-detail.js.map