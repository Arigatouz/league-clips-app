import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from 'firebase/analytics';
if (environment.production) {
  enableProdMode();
}

// we are initializing fire base before the angular app load to handle the auth state
firebase.initializeApp(environment.firebase);
const analytics = getAnalytics(firebase.app());

// declaring a variable to keep track if the app loads or not
// so we don't want to load the app every time the user authentication status changes

let appInit = false;
// we are importing auth to chain the onAuthStateChanged to keep track of the user authentication status
firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  }
  appInit = true;
});
