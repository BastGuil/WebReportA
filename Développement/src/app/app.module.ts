import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat/';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment' ;


export const firebaseConfig = {
  apiKey: "AIzaSyCUUrS5lymfvk6B0dMxN8OD7N8y4Ev1FcI",
  authDomain: "webreport-574b8.firebaseapp.com",
  databaseURL: "https://webreport-574b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webreport-574b8",
  storageBucket: "webreport-574b8.appspot.com",
  messagingSenderId: "343731566514",
  appId: "1:343731566514:web:4298cdf113bbc4112216ab"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


