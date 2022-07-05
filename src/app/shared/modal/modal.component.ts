import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

/*
 *import { ModalService } from '../services/modal.service';
 * to import the service on a component level
 * then add the providers:[ModalService]
 * to the component it self
 */

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() ModalID: string = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    // removing the modal to the body OnInit
    // and appending it to the body when initialize to avoid css problems
    document.body.appendChild(this.el.nativeElement);
  }
  // destroy the modal when the component is destroyed
  // this is to avoid the modal to be displayed when the component is destroyed
  // and also the app lost control on the element when we bind it to the body
  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }
  // closing modal function
  closeModal = (): void => {
    this.modal.toggleModal(this.ModalID);
  };
}
