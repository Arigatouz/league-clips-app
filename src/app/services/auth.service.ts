import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {}
  // userData is a object of string type
  public async createUser(userData: IUser) {
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData as unknown as string,
      userData.password as string
    );
    console.log(userCred);
    this.db.collection('users').add({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      age: userData.age,
    });
  }
}
