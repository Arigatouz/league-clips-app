import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.userCollection = db.collection('users');
  }
  // userData is a object of string type
  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password not provided!');
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string
    );
    const userID = userCred.user?.uid as string;
    console.log(userCred);
    if (!userID) {
      throw new Error("user Can't be found");
    }
    this.userCollection.doc(userID).set({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      age: userData.age,
    });
    await userCred.user?.updateProfile({
      displayName: userData.name,
    });
  }
}
