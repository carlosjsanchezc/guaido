import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from './fcm.service';


var config = {
  apiKey: "AIzaSyCPCvhic9fCJBprwGGiHz04CWj_6wYorNI",
  authDomain: "guaido.firebaseapp.com",
  databaseURL: "https://guaido.firebaseio.com",
  projectId: "guaido",
  storageBucket: "guaido.appspot.com",
  messagingSenderId: "896084950252"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(config), 
    AngularFirestoreModule,],
  providers: [HttpClientModule, Firebase,
    FcmProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
