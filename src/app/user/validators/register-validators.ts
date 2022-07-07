import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegisterValidators {
  static match(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirm_password');

    if (!password || !confirmPassword) {
      return { controlPasswordFound: false };
    }

    const error =
      password.value === confirmPassword.value ? null : { noMatch: true };
    return error;
  }
}
