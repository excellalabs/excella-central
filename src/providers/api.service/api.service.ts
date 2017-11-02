import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from '../../models/profile/profile';
import { ConnectionString, ProfilesInjectionToken } from '../../app/app-config';

@Injectable()
export class ApiServiceProvider {
  constructor(
    private http: Http,
    @Inject(ProfilesInjectionToken) private profilesApi: ConnectionString) {
  }

  async getProfiles(): Promise<Profile[]> {
    let profiles = new Array<Profile>();
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
}
