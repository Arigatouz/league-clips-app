import { Injectable } from '@angular/core';

/*
 * if we wanna share the service on a global level in the @injectable() decorator
 * we will need to remove the {providedIn : 'root'}
 */
interface IModal {
  ID: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public Modal: IModal[] = [];

  constructor() {}

  // register Modal to track which modal is opened
  register(ID: string) {
    this.Modal.push({
      ID,
      visible: false,
    });
  }

  // unregister the modal for the memory LEEK
  unregister(ID: string) {
    this.Modal = this.Modal.filter((element) => element.ID !== ID);
  }

  isModalOpen(ID: string): boolean {
    return !!this.Modal.find((element) => element.ID === ID)?.visible;
  }

  toggleModal(ID: string): void {
    const openedModal = this.Modal.find((element) => element.ID === ID);
    if (openedModal) {
      openedModal.visible = !openedModal.visible;
    }
  }
}
