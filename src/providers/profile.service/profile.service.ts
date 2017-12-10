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

  async getProfileByEmail(email): Promise<Profile> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url, {
          headers: headers,
          params: {
            filter: {
              where: { email: email }
            }
          }
        })
        .subscribe(data => {
          resolve(data.json()[0]);
        });
    });
  }

  async getProfileById(id): Promise<Profile> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url, {
          headers: headers,
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

  async updateProfileById(profile): Promise<Profile> {
    const userToken = await this.storage.get('userToken');
    const headers = new Headers();
    headers.append('Authorization', userToken);
    return new Promise<Profile>(resolve => {
      this.http
        .patch(this.profilesApi.url + '/' + profile.id, profile, {
          headers: headers
        })
        .subscribe(data => {
          resolve(data.json()[0]);
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
