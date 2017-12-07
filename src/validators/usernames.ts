import { FormControl } from '@angular/forms';

export class UsernameValidator {
    static checkAccount(control: FormControl) {
        if (control.value == "accountExists@excella.com") {
            return {
                "accountExists": true
            };
        }

        return null;
    }

    static profileExists(control: FormControl) {
        if (control.value == "profileDoesNotExist@excella.com") {
            return {
                "profileDoesNotExist": true
            };
        }

        return null;
    }
}