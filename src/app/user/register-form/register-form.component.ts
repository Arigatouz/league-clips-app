import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  // first we instantiate  new instance of the Form Group
  registerForm = new FormGroup({
    // then every property take (key: value pair ) with the new instance of the Form Control
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    phone: new FormControl(''),
  });
}
