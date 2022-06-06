import { Component, Input, OnInit } from '@angular/core';
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
  @Input() ModalID = '';
  constructor(public modal: ModalService) {}

  // closing modal function
  closeModal = (): void => {
    this.modal.toggleModal(this.ModalID);
  };

  ngOnInit(): void {}
}
