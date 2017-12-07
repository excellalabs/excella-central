import { InjectionToken } from '@angular/core';

// See https://stackoverflow.com/a/39577841 for reference
export interface ConnectionString {
  name: string;
  url: string;
}

export const ProfilesApi: ConnectionString = {
  name: 'profiles',
  url: 'https://central.excellalabs.com/api/profiles'
};

export const ProfilesInjectionToken = new InjectionToken<ConnectionString>(
  ProfilesApi.name
);

export const AccountsApi: ConnectionString = {
  name: 'accounts',
  url: 'https://central.excellalabs.com/api/accounts'
};

export const AccountsInjectionToken = new InjectionToken<ConnectionString>(
  AccountsApi.name
);
