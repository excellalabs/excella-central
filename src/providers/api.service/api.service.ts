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
      JSON.parse(data["_body"])["results"].forEach(profile => {
        profiles.push({
          firstName: profile.name.first,
          lastName: profile.name.last,
          avatarUrl: profile.picture.thumbnail
        });
      });
    });
    return profiles;
  }
}
