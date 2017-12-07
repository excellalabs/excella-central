import { FormControl } from '@angular/forms';

export class PasswordValidator {

    static passwordsMatch(control: FormControl) {
        if (control.value != control.root.value['password']) {
            return {
                "passwordsMatch": false
            };
        }

        return null;
    }
}