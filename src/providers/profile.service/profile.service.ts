import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionString, ProfilesInjectionToken } from '../../app/app-config';
import { Profile } from '../../models/profile/profile';

@Injectable()
export class ProfileServiceProvider {
  constructor(
    public http: Http,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString
  ) {}

  async getProfiles(): Promise<Profile[]> {
    return new Promise<Profile[]>(resolve => {
      this.http.get(this.profilesApi.url).subscribe(data => {
        resolve(data.json());
      });
    });
  }
}
