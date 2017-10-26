import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }
}
