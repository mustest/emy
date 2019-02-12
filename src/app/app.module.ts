import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import {LocalNotifications} from "@ionic-native/local-notifications";
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {HttpModule} from "@angular/http";
import {MainpagePage} from "../pages/mainpage/mainpage";
import {LogoutPage} from "../pages/logout/logout";



// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      MainpagePage,
      LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpModule,
      HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      MainpagePage,
      LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,LocalNotifications
  ]
})



export class AppModule {}
