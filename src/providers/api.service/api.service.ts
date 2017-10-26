import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user/user';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
  constructor(public http: Http) {
  }

  async getUsers(): Promise<User[]> {
    let users = new Array<User>();
    await this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
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
