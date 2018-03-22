import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
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

  public async getProfiles(): Promise<Profile[]> {
    const requestHeaders = await this.authService.buildAuthenticationRequest();
    return new Promise<Profile[]>(resolve => {
      this.http
        .get(this.profilesApi.url + '/getAllOrderedByFirstName', requestHeaders)
        .subscribe(data => {
          resolve(data.json().profiles);
        });
    });
  }

  public async getProfilesWithPhotos(): Promise<Profile[]> {
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    const requestParams = {
      filter: {
        where: { photoUrl: { neq: '' } }
      }
    };
    return new Promise<Profile[]>(resolve => {
      this.http
        .get(this.profilesApi.url + '/getAllOrderedByFirstName', {
          headers: requestHeaders,
          params: requestParams
        })
        .subscribe(data => {
          resolve(data.json().profiles);
        });
    });
  }

  public async getProfilesWithinLimit(limit: number, skip: number) {
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    const requestParams = {
      filter: {
        limit: limit,
        skip: skip
      }
    };
    return new Promise<Profile[]>(resolve => {
      this.http
        .get(this.profilesApi.url + '/getAllOrderedByFirstName', {
          headers: requestHeaders,
          params: requestParams
        })
        .subscribe(data => {
          resolve(data.json().profiles);
        });
    });
  }

  public async getProfileByEmail(email): Promise<Profile> {
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    const requestParams = {
      filter: { where: { email: email } }
    };
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url + '/getAllOrderedByFirstName', {
          headers: requestHeaders,
          params: requestParams
        })
        .subscribe(data => {
          resolve(data.json()[0]);
        });
    });
  }

  public async getProfileById(id): Promise<Profile> {
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url + '/getAllOrderedByFirstName', {
          headers: requestHeaders,
          params: {
            filter: {
              where: { id: id }
            }
          }
        })
        .subscribe(data => {
          resolve(data.json()[0]);
        });
    });
  }

  public async updateProfileById(profile): Promise<Profile> {
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    return new Promise<Profile>(resolve => {
      this.http
        .patch(this.profilesApi.url + '/' + profile.id, profile, {
          headers: requestHeaders
        })
        .subscribe(data => {
          resolve(data.json()[0]);
        });
    });
  }

  public async getProfilesBySearch(searchText: string): Promise<Profile[]> {
    const profileSearchUrl = this.profilesApi.url + '/search';
    const requestHeaders = (await this.authService.buildAuthenticationRequest())
      .headers;
    return new Promise<Profile[]>(resolve => {
      this.http
        .get(profileSearchUrl, {
          headers: requestHeaders,
          params: { searchText: searchText }
        })
        .subscribe(data => {
          resolve(data.json().profiles);
        });
    });
  }

  async getNextProfile(id): Promise<Profile> {
    return new Promise<Profile>(function() {});
  }

  async getPreviousProfile(id): Promise<Profile> {
    return new Promise<Profile>(function() {});
  }
}
