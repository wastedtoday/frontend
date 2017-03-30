import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AfAuthService } from './af-auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyC0TzUJs3ZRgmUOvgY4I4v2W4_yLrkO7HQ',
  authDomain: 'wastedtoday-d654f.firebaseapp.com',
  databaseURL: 'https://wastedtoday-d654f.firebaseio.com',
  storageBucket: 'wastedtoday-d654f.appspot.com',
  messagingSenderId: '203725425991'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AfAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
