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

  async getProfilesWithPhotos(): Promise<Profile[]> {
    return new Promise<Profile[]>(resolve => {
      this.http.get(this.profilesApi.url).subscribe(data => {
        resolve(
          data.json().filter(profile => profile['photoUrl'] !== undefined)
        );
      });
    });
  }

  async getProfileByEmail(email): Promise<Profile> {
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url, {
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
    return new Promise<Profile>(resolve => {
      this.http
        .get(this.profilesApi.url, {
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
    return new Promise<Profile>(resolve => {
      this.http
        .patch(this.profilesApi.url + '/' + profile.id, profile)
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
