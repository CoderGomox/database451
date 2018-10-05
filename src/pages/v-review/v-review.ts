import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { ReviewApi } from './../../shared/sdk/services/custom/Review';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v-review',
  templateUrl: 'v-review.html',
})
export class VReviewPage {

  public data: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewApi: ReviewApi,
    public coffeeShopApi:CoffeeShopApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VReviewPage');
    this.reviewApi.find({
      "include":["coffeeShop","user"]}
      ).subscribe(
      data => {
        console.log(data)
        this.data = data
      }
    )
  }

}
