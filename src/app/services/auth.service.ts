import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isUserAuthenticated$: Observable<boolean>;
  public isUserAuthenticatedWithDelay$: Observable<boolean>;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    // constructor function
    this.userCollection = db.collection('users');
    this.isUserAuthenticated$ = this.auth.user.pipe(map((user) => !!user));
    this.isUserAuthenticated$.subscribe({
      next: (value) => console.log(value),
    });
    this.isUserAuthenticatedWithDelay$ = this.isUserAuthenticated$.pipe(
      delay(1000)
    );
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

    // making sure that user id exist before connecting to the user collection
    if (!userID) {
      throw new Error("user Can't be found");
    }
    await this.userCollection.doc(userID).set({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      age: userData.age,
    });

    // saving display name
    await userCred.user?.updateProfile({
      displayName: userData.name || 'The Elite Clipper',
    });
    console.log('Display name is :', userCred.user?.displayName);
  }

  public async logInUser() {}
}
