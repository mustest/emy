import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, category: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ana Sayfa', component: HomePage , category:"0" },
      { title: 'Abone Hizmetleri', component: HomePage , category:"1" },
      //{ title: 'Su Tarifeleri', component: HomePage , category:"2" },
      //{ title: 'Hizmet Tarifeleri', component: HomePage , category:"3" },
      //{ title: 'Kurumsal', component: HomePage , category:"4" },
      // title: 'İhaleler', component: HomePage , category:"5" },
      //{ title: 'İletişim', component: HomePage , category:"6" },
      //{ title: 'Çıkış', component: HomePage , category:"7" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {
        data: page
        });
  }
}
