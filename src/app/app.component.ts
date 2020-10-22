import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyBbbgDoTcbhflkXT8A3wVBnAsgP84fjHg4",
        authDomain: "csd203-5baf4.firebaseapp.com",
        databaseURL: "https://csd203-5baf4.firebaseio.com",
        projectId: "csd203-5baf4",
        storageBucket: "csd203-5baf4.appspot.com",
        messagingSenderId: "1055297783183"
      }
      firebase.initializeApp(firebaseConfig);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
