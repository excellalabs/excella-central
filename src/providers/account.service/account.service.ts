import { Account } from './../../models/account/account';
import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {
  ConnectionString,
  AccountsInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from '../authentication.service/authentication.service';

@Injectable()
export class AccountService {
  constructor(
    public http: Http,
    private authService: AuthenticationService,
    private storage: Storage,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString,
    @Inject(AccountsInjectionToken) public accountsApi: ConnectionString
  ) {}

  async login(email: string, password: string): Promise<boolean> {
    const loginUrl = this.accountsApi.url + '/login';
    const accountInfo = { email: email, password: password };
    return await this.http
      .post(loginUrl, accountInfo)
      .toPromise()
      .then(res => res.json())
      .then(
        data => {
          this.authService.storeUserToken(data);
          return true;
        },
        err => {
          this.authService.clearUserToken();
          return false;
        }
      );
  }

  async logout(): Promise<void> {
    const userToken = await this.authService.getUserToken();
    const logoutUrl = this.accountsApi.url + '/logout';
    this.http.post(logoutUrl, { access_token: userToken });
  }

  async register(email: string, password: string): Promise<boolean> {
    const newAccount = new Account(email, password, false, false);
    return this.http
      .post(this.accountsApi.url, newAccount)
      .toPromise()
      .then(res => res.json())
      .then(
        data => {
          return true;
        },
        err => {
          return false;
        }
      );
  }

  async checkAccountExists(email: string): Promise<boolean> {
    const checkAccountExistsUrl =
      this.accountsApi.url + '/' + 'checkAccountExists';
    const params = new URLSearchParams();
    params.append('email', email);
    return this.http
      .get(checkAccountExistsUrl, {
        params: params
      })
      .toPromise()
      .then(res => res.json())
      .then(data => {
        return data.doesAccountExist;
      });
  }

  async checkProfileExists(email: string): Promise<boolean> {
    const checkProfileExistsUrl =
      this.accountsApi.url + '/' + 'checkProfileExists';
    const params = new URLSearchParams();
    params.append('email', email);
    return this.http
      .get(checkProfileExistsUrl, {
        params: params
      })
      .toPromise()
      .then(res => res.json())
      .then(data => {
        return data.doesProfileExist;
      });
  }
}
