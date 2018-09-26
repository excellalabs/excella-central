import { InjectionToken } from '@angular/core';

// See https://stackoverflow.com/a/39577841 for reference
export interface ConnectionString {
  name: string;
  url: string;
}

export const ProfilesApi: ConnectionString = {
  name: 'profiles',
  url: 'https://localhost:3000/api/profiles'
};
export const ProfilesInjectionToken = new InjectionToken<ConnectionString>(
  ProfilesApi.name
);

export const SSOApi: ConnectionString = {
  name: 'sso',
  url: 'https://localhost:3000/ssoauth'
};
export const SSOInjectionToken = new InjectionToken<ConnectionString>(
  SSOApi.name
);


export const AccountsApi: ConnectionString = {
  name: 'accounts',
  url: 'https://localhost:3000/api/accounts'
};
export const AccountsInjectionToken = new InjectionToken<ConnectionString>(
  AccountsApi.name
);
