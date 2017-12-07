import { InjectionToken } from '@angular/core';
export var ProfilesApi = {
    name: 'profiles',
    url: 'https://central.excellalabs.com/api/profiles'
};
export var ProfilesInjectionToken = new InjectionToken(ProfilesApi.name);
export var AccountsApi = {
    name: 'accounts',
    url: 'https://central.excellalabs.com/api/accounts'
};
export var AccountsInjectionToken = new InjectionToken(AccountsApi.name);
//# sourceMappingURL=app-config.js.map