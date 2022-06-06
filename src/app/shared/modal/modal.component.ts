import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
export class ModalComponent implements OnInit {
  @Input() ModalID: string = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    // removing the modal to the body OnInit
    // and appending it to the body when initialize to avoid css problems
    document.body.appendChild(this.el.nativeElement);
  }
  // closing modal function
  closeModal = (): void => {
    this.modal.toggleModal(this.ModalID);
  };
}
