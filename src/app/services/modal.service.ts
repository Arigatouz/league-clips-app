import { Injectable } from '@angular/core';

/*
 * if we wanna share the service on a global level in the @injectable() decorator
 * we will need to remove the {providedIn : 'root'}
 */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible = false;
  constructor() {}
}
