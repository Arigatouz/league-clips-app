import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  // first every property instantiated with the the new instance of the FormControl
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(16),
    Validators.max(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('');
  phone = new FormControl('');
  // second we instantiate  new instance of the FormGroup
  registerForm = new FormGroup({
    // then we (key value pair) the properties with the this keyword
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone: this.phone,
  });
  constructor() {
    /*
     * if you uncomment this up coming line and get the mouse on the name property
     * you will find that there is type conversion happens to the name from FormControl to AbstractControl
     * this happens coz of the FormGroup if you CTRL click on the Form Group you will find it changes every
     * property in side it to AbstractControl we can escape this by getting the properties out of the FormGroup then
     * refer to them by the this keyword check up
     */
    // this.registerForm.controls.name;
    // now after the change check the this.name it will give you formControl type

    this.name;
    //
  }
}
