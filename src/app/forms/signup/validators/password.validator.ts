import { ValidationErrors,AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static passwordsDontMatch(control: AbstractControl): ValidationErrors | null {
        if (control.get('password').value != control.get('confirmpassword').value) {
            return { passwordsDontMatch: true }
        }
        return null
    }
}