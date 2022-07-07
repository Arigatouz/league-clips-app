import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';
import IUser from 'src/app/models/user.model';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  constructor(private auth: AuthService, private emailTaken: EmailTaken) {
    /*
     * if you uncomment this up coming line and get the mouse on the name property
     * you will find that there is type conversion happens to the name from FormControl to AbstractControl
     * this happens coz of the FormGroup if you CTRL click on the Form Group you will find it changes every
     * property in side it to AbstractControl we can escape this by getting the properties out of the FormGroup then
     * refer to them by the this keyword check up
      this.registerForm.controls.name;
     now after the change check the this.name it will give you formControl type
     this.name;
   */
  }

  // first every property instantiated with the the new instance of the FormControl
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl(
    '',
    [Validators.required, Validators.email],
    [this.emailTaken.validate]
  );
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(16),
    Validators.max(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phone = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
    Validators.maxLength(15),
  ]);
  // second we instantiate  new instance of the FormGroup
  registerForm: FormGroup = new FormGroup(
    {
      // then we (key value pair) the properties with the this keyword
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      confirm_password: this.confirm_password,
      phone: this.phone,
    },
    //FormGroup takes 2 argument , the second argument is an array of custom validator
    [RegisterValidators.match('password', 'confirm_password')]
  );

  showAlert: boolean = false;
  alertMessage: string = 'Please Wait!, while your account is being created';
  alertColor: string = 'blue';
  inSubmission = false;

  // register new user
  register = async (): Promise<void> => {
    this.showAlert = true;
    this.alertMessage = 'Please Wait!, while your account is being created';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      const formValue = this.registerForm.value as IUser;
      await this.auth.createUser(formValue);
      window.location.replace('/');
    } catch (error: any | unknown) {
      this.registerCheckForErrorsWithFireBase(error);
      return;
    }
    this.alertMessage = 'Success , your account has been created';
    this.alertColor = 'green';
  };

  // checking for errors with firebase
  registerCheckForErrorsWithFireBase(error: any | unknown): void {
    this.alertColor = 'red';
    this.inSubmission = false;
    if (error.code === 'auth/email-already-in-use') {
      this.alertMessage =
        'The email address is already in use by another account';
    } else if (error.code === 'auth/invalid-email') {
      this.alertMessage = 'Email is Invalid, please provide a valid email';
    } else if (error.code === 'auth/operation-not-allowed') {
      this.alertMessage =
        'this Email has been disabled , please contact the support for details';
    } else if (error.code === 'auth/weak-password') {
      this.alertMessage = 'the password is not strong enough.';
    } else {
      this.alertMessage = 'An error has ocurred ,Please try again later';
    }
  }
}
