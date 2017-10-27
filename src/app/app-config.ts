import { InjectionToken } from '@angular/core';

// See https://stackoverflow.com/a/39577841 for reference
export interface ConnectionString {
  name: string;
  url: string;
}

export const UsersApi: ConnectionString = {
  name: 'users',
  url: 'https://randomuser.me/api/?results=10'
}
export const UsersInjectionToken = new InjectionToken<ConnectionString>(UsersApi.name);
