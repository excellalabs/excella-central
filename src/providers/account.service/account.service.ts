import { Account } from './../../models/account/account';
import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {
  ConnectionString,
  AccountsInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from '../authentication.service/authentication.service';

@Injectable()
export class AccountService {
  constructor(
    public http: Http,
    private authService: AuthenticationService,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString,
    @Inject(AccountsInjectionToken) public accountsApi: ConnectionString
  ) { }

  async login(email: string, password: string): Promise<boolean> {
    const loginUrl = this.accountsApi.url + '/login';
    const accountInfo = { email: email, password: password };
    return new Promise<boolean>(resolve => {
      this.http.post(loginUrl, accountInfo).subscribe(
        data => {
          const body = data.json();
          this.authService.storeUserToken(body);
          resolve(true);
        },
        err => {
          this.authService.clearUserToken();
          resolve(false);
        }
      );
    });
  }

  async logout(): Promise<void> {
    const userToken = await this.authService.getUserToken();
    const logoutUrl = this.accountsApi.url + '/logout';
    await this.http.post(logoutUrl, { access_token: userToken });
    this.authService.clearUserToken();
  }

  async register(email: string, password: string): Promise<boolean> {
    const newAccount = new Account(email, password, false, false);
    return new Promise<boolean>(resolve => {
      this.http.post(this.accountsApi.url, newAccount).subscribe(
        data => {
          this.login(email, password);
          resolve(true);
        },
        err => {
          resolve(false);
        }
      );
    });
  }

  async getAccount(id: string): Promise<Account> {
    const requestHeaders = await this.authService.buildAuthenticationRequest();
    const getAccountByIdUrl = this.accountsApi.url + '/' + id;
    return new Promise<Account>(resolve => {
      this.http.get(getAccountByIdUrl, requestHeaders).subscribe(data => {
        resolve(data.json());
      });
    });
  }

  async checkAccountExists(email: string): Promise<boolean> {
    const checkAccountExistsUrl =
      this.accountsApi.url + '/' + 'checkAccountExists';
    const params = new URLSearchParams();
    params.append('email', email);
    return new Promise<boolean>(resolve => {
      this.http
        .get(checkAccountExistsUrl, {
          params: params
        })
        .subscribe(data => {
          const body = data.json();
          resolve(body.doesAccountExist);
        });
    });
  }

  async checkProfileExists(email: string): Promise<boolean> {
    const checkProfileExistsUrl =
      this.accountsApi.url + '/' + 'checkProfileExists';
    const params = new URLSearchParams();
    params.append('email', email);
    return new Promise<boolean>(resolve => {
      this.http
        .get(checkProfileExistsUrl, {
          params: params
        })
        .subscribe(data => {
          const body = data.json();
          resolve(body.doesProfileExist);
        });
    });
  }

  async sendResetEmail(email: string): Promise<boolean> {
    const url = this.accountsApi.url + '/reset';
    return new Promise<boolean>(resolve =>
      this.http.post(url, { email: email }).subscribe(
        data => {
          resolve(true);
        },
        err => {
          resolve(false);
        }
      )
    )
  }

  async resetPassword(newPassword: string, accessToken: string): Promise<void> {
    const url = this.accountsApi.url + '/reset-password?access_token=' + accessToken;
    await this.http.post(url, { newPassword: newPassword });
  }
}
