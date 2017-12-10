import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConnectionString, ProfilesInjectionToken } from '../../app/app-config';
import { Profile } from '../../models/profile/profile';
import { AuthenticationService } from '../authentication.service/authentication.service';

@Injectable()
export class ProfileService {
  constructor(
    public http: Http,
    private authService: AuthenticationService,
    @Inject(ProfilesInjectionToken) public profilesApi: ConnectionString
  ) {}

  async getProfiles(): Promise<Profile[]> {
    const requestHeaders = await this.authService.buildAuthenticationRequest();
    return new Promise<Profile[]>(resolve => {
      this.http.get(this.profilesApi.url, requestHeaders).subscribe(data => {
        resolve(data.json());
      });
    });
  }

  public async getProfilesWithPhotos(): Promise<Profile[]> {
    const requestHeaders = await this.authService.buildAuthenticationRequest();
    return new Promise<Profile[]>(resolve => {
      this.http.get(this.profilesApi.url, requestHeaders).subscribe(data => {
        resolve(
          data.json().filter(profile => profile['photoUrl'] !== undefined)
        );
      });
    });
  }
}
