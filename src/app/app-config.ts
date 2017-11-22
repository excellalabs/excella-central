import { InjectionToken } from '@angular/core';

// See https://stackoverflow.com/a/39577841 for reference
export interface ConnectionString {
  name: string;
  url: string;
}


export const ProfilesApi: ConnectionString = {
  name: 'profiles',
  url: 'https://central.excellalabs.com/api/profiles'
}

export const LoginApi: ConnectionString = {
  name: 'login',
  url: 'https://central.excellalabs.com/api/login'
}
export const ProfilesInjectionToken = new InjectionToken<ConnectionString>(ProfilesApi.name);

export const LoginInjectionToken = new InjectionToken<ConnectionString>(LoginApi.name);
