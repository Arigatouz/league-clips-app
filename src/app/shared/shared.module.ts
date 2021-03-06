import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
/*
 *import { ModalService } from '../services/modal.service';
 * to import the service on a module level
 * then add providers :[ModalService]
 * to the @ngMOdule decorator
 * */

@NgModule({
  declarations: [
    ModalComponent,
    TabContainerComponent,
    TabsComponent,
    InputComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [
    ModalComponent,
    TabContainerComponent,
    TabsComponent,
    InputComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
