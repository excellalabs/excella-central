import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Profile } from '../../models/profile/profile';
import {
  ConnectionString,
  LoginInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Storage } from '@ionic/storage';

@Injectable()
export class ApiServiceProvider {
  constructor(
    public http: Http,
    private storage: Storage,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString,
    @Inject(LoginInjectionToken) public loginApi: ConnectionString
  ) {}

  async getProfiles() {
    var that = this;
    let profiles = [];
    return new Promise(function(resolve) {
      that.http.get(that.profilesApi.url).subscribe(data => {
        resolve(data.json());
      });
    });
  }

  login(username: string, password: string, loginCallback) {
    this.http
      .post(this.loginApi.url, { username: username, password: password })
      .subscribe(
        data => {
          //handle login
          loginCallback(true);
          this.storage.set('rememberUser', true);
        },
        // this call will always 404 right now, so just hack it together
        err => {
          if (username === 'login') {
            loginCallback(true);
            this.storage.set('rememberUser', true);
          } else {
            loginCallback(false);
          }
        }
      );
  }

  logout() {
    this.storage.set('rememberUser', false);
  }
}
