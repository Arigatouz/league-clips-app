import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
  // static method doesn't have access to dependency injection
  static match(password: string, confirmPassword: string): ValidatorFn {
    // we are returning a validator function which is a factory function that takes in a AbstractControl and returns a validation error
    // it's a design pattern that allows us to create objects/functions that can be used to validate other objects / functions
    //it's just away to make our code more readable, reusable and maintainable
    return (group: AbstractControl): ValidationErrors | null => {
      const passwordControl = group.get(password);
      const confirmPasswordControl = group.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        console.error('no control were found on the form Group');
        return { controlPasswordFound: false };
      }
      // if the password and confirm password are not equal then we return the error
      const error =
        passwordControl.value === confirmPasswordControl.value
          ? null
          : { noMatch: true };
      // then we setErrors on the confirm password control
      //to inform the formGroup that the control is invalid
      confirmPasswordControl.setErrors(error);
      return error;
    };
  }
}
