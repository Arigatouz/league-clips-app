import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  showAlert: boolean = false;
  alertMessage: string = 'Please Wait!, while we log you in';
  alertColor: string = 'blue';
  inSubmission = false;

  credentials: { email: string; password: string } = {
    email: '',
    password: '',
  };
  // is_on_submission: boolean = true;
  constructor(private auth: AngularFireAuth) {}

  login = async (): Promise<void> => {
    console.log(this.credentials);
    this.showAlert = true;
    this.alertMessage = 'Please Wait!, while logging you in';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email as string,
        this.credentials.password as string
      );
    } catch (error: any | unknown) {
      console.log(error);
      this.loginCheckForErrorsWithFireBase(error);
      return;
    }
    this.alertMessage = 'logIn Success';
    this.alertColor = 'green';
  };

  loginCheckForErrorsWithFireBase(error: any | unknown): void {
    this.alertColor = 'red';
    this.inSubmission = false;
    if (error.code === 'auth/invalid-email') {
      this.alertMessage = 'email address is not valid.';
    } else if (error.code === 'auth/user-disabled') {
      this.alertMessage = 'Account is disabled ,Contact Support for more info';
    } else if (error.code === 'auth/user-not-found') {
      this.alertMessage = 'User not found';
    } else if (error.code === 'auth/wrong-password') {
      this.alertMessage = 'password is invalid for the given email';
    } else {
      this.alertMessage = 'An error has ocurred , Please try again later';
    }
  }
}
