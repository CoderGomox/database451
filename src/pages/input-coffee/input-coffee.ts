import { ReviewPage } from './../review/review';
import { HomePage } from './../home/home';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputCoffeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-coffee',
  templateUrl: 'input-coffee.html',
})
export class InputCoffeePage {
  public id: number;
  public input = {} 
  public title = ''
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coffeeShopApi: CoffeeShopApi
  ) {
    this.id = navParams.get('id')
  }

  ionViewDidLoad() {
    console.log(this.id)
    this.title = 'Input CoffeeShop'
    if (this.id) {
      this.title = 'Update CoffeeShop'
      this.coffeeShopApi.find({
        "where": {
          "id": this.id
        }
      }).subscribe(
        selectedcoffee => {
          this.input = selectedcoffee[0]
        },
        err => {
          console.log(err)
        }
      )
    }
  }

  updateCoffee() {
    delete this.input['id']
    this.coffeeShopApi.updateAttributes(this.id, this.input).subscribe(
      () => {
        this.navCtrl.push(HomePage)
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteCoffee() {
    this.coffeeShopApi.deleteById(this.id).subscribe(
    () => {
      this.navCtrl.push(HomePage)
    },
    err => {
      console.log(err)
    }
    )
  }

  addCoffee() {
    if (!this.id) {
      this.coffeeShopApi.create(this.input).subscribe(
        () => {
          // this.navCtrl.push(HomePage)
          this.input['name'] = ''
          this.input['city'] = ''

        },
        err => {
          console.log(err)
        }
      )
    } else {
      this.updateCoffee()
    }

  }

  review(id){
    this.navCtrl.push(ReviewPage, {
      id:id
    })
  }

  abort(){
    this.navCtrl.push(HomePage)
  }
}
