import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from '../../models/profile/profile';
import { ConnectionString, UsersInjectionToken } from '../../app/app-config';

@Injectable()
export class ApiServiceProvider {
  constructor(
    private http: Http,
    @Inject(UsersInjectionToken) private usersApi: ConnectionString) {
  }

  async getUsers(): Promise<Profile[]> {
    let users = new Array<Profile>();
    await this.http.get(this.usersApi.url).subscribe(data => {
      JSON.parse(data["_body"])["results"].forEach(user => {
        users.push({
          firstName: user.name.first,
          lastName: user.name.last,
          avatarUrl: user.picture.thumbnail
        });
      });
    });
    return users;
  }
}
