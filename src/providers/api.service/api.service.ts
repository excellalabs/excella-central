import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from '../../models/profile/profile';
import {ConnectionString, LoginInjectionToken, ProfilesInjectionToken} from '../../app/app-config';

@Injectable()
export class ApiServiceProvider {
  constructor(
    public http: Http,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString,
    @Inject(LoginInjectionToken) public loginApi: ConnectionString
    ) {
  }

  async getProfiles(): Promise<Profile[]> {
    let profiles = [];
    await this.http.get(this.profilesApi.url).subscribe(data => {
      data.json().forEach(profile => {
        profiles.push({
          id: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          avatarUrl: profile.avatarUrl,
          primarySkill: profile.primarySkill,
          client: profile.client,
          funFact: profile.funFact
        });
      });
    });
    return profiles;
  }

  async checkLogin(username: String, password: String): Promise<boolean> {
    let loginValid = false;
    await this.http.post(
      this.loginApi.url,
      {username: username, password: password}
    ).subscribe(data => {
      //handle login
      loginValid = true;
    });
    return loginValid;
  }
}
