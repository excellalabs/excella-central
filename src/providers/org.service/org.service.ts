import { Org } from './../../models/org/org';
import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class OrgService {
  constructor(public http: Http) {}

  async createOrg(org: Org): Promise<any> {
    return new Promise(resolve => {
      resolve(org);
    });
  }

  async editOrg(email: string, password: string): Promise<any> {}

  async getOrg(): Promise<any> {
    return new Promise(resolve => {
      resolve(
        new Org(
          'Excella',
          'excella.com',
          'Alex Hoffman',
          'alex.hoffman@excella.com',
          'alex.hoffman@excella.com',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2000px-NASA_logo.svg.png'
        )
      );
    });
  }
}
