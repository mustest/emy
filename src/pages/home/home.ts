import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import { Http} from "@angular/http";
import {enableProdMode} from "@angular/core";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/throw';



import {MainpagePage} from "../mainpage/mainpage";
import {LogoutPage} from "../logout/logout";
import {Personel} from "../../models/personel/personel.model";

import "rxjs/add/operator/share";


import { FormGroup, Validators, FormControl } from '@angular/forms';
import {LocalNotifications} from "@ionic-native/local-notifications";


enableProdMode();

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sayfa?:any;
  data2: Observable<any>;
  result:JSON;
  allData:any=[];
  items:any=[];
  SupervisorCitizenNr:string="36208055290";
  ActualDate:string="22.01.2019";
  username:string;
  password:any;
  isSupervisor:boolean=true;
  personeller:Personel[];
  a:string;






    constructor(public navCtrl: NavController,private localNoti: LocalNotifications, private platform: Platform, public navParams: NavParams, private http: Http, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
    {
    this.sayfa= navParams.get('data');
        this.platform.ready().then(() => {
            this.localNoti.on("click", (noti, state) => {
                alert(state);
                alert(noti.data);
            });
        });


    }




    group: FormGroup;



    ngOnInit(){
        this.group = new FormGroup({
            username : new FormControl('',[Validators.required, Validators.nullValidator]),
            password : new FormControl('',[Validators.required, Validators.minLength(3)])
        })
    }
    btnPushClicked() {
        this.platform.ready().then(() => {
            this.localNoti.schedule({
                id: 1,
                title: 'Merhaba Güzel Dostum Erkin',
                text: 'Notification ı Yaptım',
                at: new Date(new Date().getTime() + 10000),
                data: {"id": "1", "name": "Mr.A"}
            });
        });
    }
 postData()
 {
         return this.http.post('http://192.168.17.126/api/Home/Validate', {
         username : this.username,
         password : this.password,}).subscribe(res => {

             this.result=(res.json());

             this.items = JSON.stringify(this.result); // then convert data to json string
             console.log(this.items);
             this.allData = JSON.parse(this.items); // parse json data and pass json string
             console.log(this.allData['result']); // got result of particular string
             if(this.result['result']==true)
             {
                 // this.presentLoading();
                 this.navCtrl.push(MainpagePage);
             }
             else{
             this.showAlert();
             }
             this.username="";
             this.password="";

         });
 }



    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'Hata !',
            subTitle: 'Kullacı Adı Yada Şifre Hatalı Tekrar Deneyiniz !',
            buttons: ['OK']
        });
        alert.present();
    }


    showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'Uygulamadan Çıkış',
            message: 'Uygulamadan Çıkmak İstiyor musunuz?',
            buttons: [
                {
                    text: 'Hayır',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Evet',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }


logOut(){
    this.navCtrl.push(LogoutPage);
}

    presentLoading() {
        const loader = this.loadingCtrl.create({
            content: "Lütfen Bekleyiniz...",
            duration: 1000
        });
        loader.present();
    }



}
