import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private loAuth: AngularFireAuth
  ) {}

  // opening modal function
  openModal = ($event: Event): void => {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  };

  ngOnInit(): void {}

  logOut = async ($event: Event): Promise<void> => {
    $event.preventDefault();
    await this.loAuth.signOut();
  };
}
