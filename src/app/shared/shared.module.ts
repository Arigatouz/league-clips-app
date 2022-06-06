import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabsComponent } from './tabs/tabs.component';

/*
 *import { ModalService } from '../services/modal.service';
 * to import the service on a module level
 * then add providers :[ModalService]
 * to the @ngMOdule decorator
 * */

@NgModule({
  declarations: [ModalComponent, TabContainerComponent, TabsComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabContainerComponent, TabsComponent],
})
export class SharedModule {}
