import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

// classes don't load with dependency injection we need to inject it manually
// to do this manually we need to import the @Injectable() decorator
//another benefit of using @injectable is that it allows us to inject the class into other classes
//and alow us to make an instance of the class
@Injectable({
  providedIn: 'root',
})
export class EmailTaken implements AsyncValidator {
  constructor(private auth: AngularFireAuth) {}
  // validate returns a promise of type ValidationErrors
  // if the promise is resolved with null then the control is valid
  // if the promise is rejected with an object then the control is invalid
  //converting the validate to arrow function to use the this keyword in the registration form component
  validate = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    const Response = await this.auth.fetchSignInMethodsForEmail(control.value);
    return Response.length ? { emailTaken: true } : null;
  };
}
