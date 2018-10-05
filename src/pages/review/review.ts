import { LoopBackAuth } from './../../shared/sdk/services/core/auth.service';
import { ReviewApi } from './../../shared/sdk/services/custom/Review';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  public review = {}
  public id: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewApi: ReviewApi,
    public auth: LoopBackAuth
  ) {
    this.id =navParams.get('id')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  getRating(id) {
    console.log('id')
  }

  subInfo(r, d) {
    console.log(r, d)
    this.reviewApi.create({
      "date": Date.now(),
      "comments": d,
      "rating": r,
      "coffeeshopid": this.id,
      "pub_id":this.auth.getCurrentUserId()
    }).subscribe()
  }

  Exit() {
    this.navCtrl.push(HomePage)
  }

}
