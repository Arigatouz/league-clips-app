import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthModalComponent, LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
