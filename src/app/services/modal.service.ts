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
  private Modal: IModal[] = [];

  constructor() {}

  register(ID: string) {
    this.Modal.push({
      ID,
      visible: false,
    });
  }

  isModalOpen(ID: string): boolean {
    return !!this.Modal.find((element) => element.ID === ID)?.visible;
  }

  toggleModal(ID: string): void {
    const openedModal = this.Modal.find((element) => element.ID === ID);
    if (openedModal) {
      openedModal.visible = !openedModal.visible;
    }
    // this.visible = !this.visible;
  }
}
