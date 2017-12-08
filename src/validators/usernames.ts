import { FormControl } from '@angular/forms';
import { AccountService } from '../providers/account.service/account.service';
import { ProfileService } from '../providers/profile.service/profile.service';

export class UsernameValidator {
  constructor(
    public accountService: AccountService,
    public profileService: ProfileService
  ) {}

  static checkAccount(control: FormControl) {
    if (control.value == 'accountExists@excella.com') {
      return {
        accountExists: true
      };
    }

    return null;
  }

  static profileExists(control: FormControl) {
    if (control.value == 'profileDoesNotExist@excella.com') {
      return {
        profileDoesNotExist: true
      };
    }

    return null;
  }
}
