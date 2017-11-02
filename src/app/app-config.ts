import { InjectionToken } from '@angular/core';

// See https://stackoverflow.com/a/39577841 for reference
export interface ConnectionString {
  name: string;
  url: string;
}

export const ProfilesApi: ConnectionString = {
  name: 'profiles',
  url: 'https://randomuser.me/api/?results=10'
}
export const ProfilesInjectionToken = new InjectionToken<ConnectionString>(ProfilesApi.name);
