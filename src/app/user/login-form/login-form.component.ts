import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  credentials: { email: string; password: string } = {
    email: '',
    password: '',
  };
  // is_on_submission: boolean = true;

  login = (): void => {
    console.log('logIn function triggered');
    console.log(this.credentials);
  };
}
