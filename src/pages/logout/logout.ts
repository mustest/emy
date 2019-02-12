import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {MainpagePage} from "../mainpage/mainpage";
import {HomePage} from "../home/home";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})



export class LogoutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
 this.platform=platform;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }



    exitApp(){
        //navigator[‘a’].exitApp();
        this.platform.exitApp();
    }

    goApp(){

        this.navCtrl.push(HomePage);
    }
}
