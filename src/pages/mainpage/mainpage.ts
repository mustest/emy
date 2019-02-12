import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs";
import {Personel} from "../../models/personel/personel.model";
import {Http} from "@angular/http";



/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',

})
export class MainpagePage {
    items;
    personeller:Personel[];
    SupervisorCitizenNr:string="36208055290";
    ActualDate:string="22.01.2019";
    kontrol:boolean;
   // kontrol2=true;
    constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,public alertCtrl: AlertController,
                public alertController: AlertController) {
      this.initializeItems();
  }


    girisDuzenle(){
        const confirm = this.alertCtrl.create({
            title: 'Giriş Saati Düzenle',
            message: 'Kayıt et?',

            inputs: [

                // input date with min & max
                {
                    name: 'name4',
                    type: 'time',

                },


            ],


            buttons: [
                {
                    text: 'İptal',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Kaydet',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();


    }



    cikisDuzenle() {
        const confirm = this.alertCtrl.create({
            title: 'Çıkış Saati Düzenle',
            message: 'Kayıt et?',

            inputs: [

                // input date with min & max
                {
                    name: 'name4',
                    type: 'time',

                },


            ],


            buttons: [
                {
                    text: 'İptal',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Kaydet',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    getPersonList(): Observable<Personel[]> {
        return this.http.post('http://192.168.17.126/api/Home/GetEmployeesDaily' ,{
            SupervisorCitizenNr :this.SupervisorCitizenNr,
            ActualDate:this.ActualDate}).share().map(data =>
            data.json());
    }

    getDataFromWebServis(){
        this.getPersonList().subscribe(p=> {
            this.personeller=p;
            console.log(this.personeller);

        })
    }







        //ionViewDidLoad() page load gibi düşün sayfa yüklendiğinde çalışan fonksiyon
  ionViewDidLoad() {

    console.log(this.getDataFromWebServis());
  }



    initializeItems() {
        this.items = [
            'ERKİN ÖZKAYA Giriş :08:00 Çıkış: 17:40 ',
            'YASEMİN HORLACHER Giriş :08:00 Çıkış: 18:20 ',
            'MUSTAFA GEREME Giriş :08:00 Çıkış: 18:40 ',

        ];
    }

    searchPer(ev) {
        // Reset items back to all of the items
        // this.initializeItems();
        this.getDataFromWebServis();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
           // this.items = this.items.filter((item) => {
             //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
              this.personeller=this.personeller.filter((pers) =>{
                  return (pers.Name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        }

}


}
