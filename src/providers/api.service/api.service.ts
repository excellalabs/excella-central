import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user/user';
import { USERS_API_URL } from '../../app/app-config';

@Injectable()
export class ApiServiceProvider {
  constructor(private http: Http, @Inject(USERS_API_URL) private apiUrl) {
  }

  async getUsers(): Promise<User[]> {
    let users = new Array<User>();
    await this.http.get(this.apiUrl).subscribe(data => {
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
