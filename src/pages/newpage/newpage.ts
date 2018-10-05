import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {
  public title;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpagePage');
    this.showAlert()
  }

  showAlert() {
    const alert = this.alert.create({
      title: 'New Friend!',
      subTitle: this.title,
      buttons: ['OK']
    });
    alert.present();
  }
  

}
