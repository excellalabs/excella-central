import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConnectionString, ProfilesInjectionToken } from '../../app/app-config';
import { Profile } from '../../models/profile/profile';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProfileServiceProvider {
  constructor(
    public http: Http,
    public storage: Storage,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString
  ) {}

  async getProfiles(): Promise<Profile[]> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);

    return new Promise<Profile[]>(resolve => {
      this.http
        .get(this.profilesApi.url, new RequestOptions({ headers: headers }))
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }

  async getProfilesWithPhotos(): Promise<Profile[]> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);

    return new Promise<Profile[]>(resolve => {
      this.http
        .get(this.profilesApi.url, new RequestOptions({ headers: headers }))
        .subscribe(data => {
          resolve(
            data.json().filter(profile => profile['photoUrl'] !== undefined)
          );
        });
    });
  }
}
