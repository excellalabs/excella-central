import { Account } from './../../models/account/account';
import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {
  ConnectionString,
  AccountsInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountServiceProvider {
  constructor(
    public http: Http,
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
          this.storage.set('userToken', data.id);
          this.storage.set('userId', data.userId);
          return true;
        },
        err => {
          this.storage.set('userToken', null);
          this.storage.set('userId', null);
          return false;
        }
      );
  }

  async logout(): Promise<void> {
    const logoutUrl = this.accountsApi.url + '/logout';
    this.storage.get('userToken').then(userToken => {
      this.http.post(logoutUrl, { access_token: userToken });
    });
  }

  async register(email: string, password: string): Promise<boolean> {
    var that = this;
    let newAccount = new Account(email, password, false, false);
    return await this.http
      .post(this.accountsApi.url, newAccount)
      .toPromise()
      .then(res => res.json())
      .then(
        data => {
          return that.login(email, password);
        },
        err => {
          return false;
        }
      );
  }

  async getAccount(id: string): Promise<Account> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);
    const getAccountByIdUrl = this.accountsApi.url + '/' + id;
    return new Promise<Account>(resolve => {
      this.storage.get('userToken').then(userToken => {
        this.http
          .get(getAccountByIdUrl, { headers: headers })
          .subscribe(data => {
            resolve(data.json());
          });
      });
    });
  }
}
