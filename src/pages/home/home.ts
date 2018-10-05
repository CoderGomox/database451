import { InputCoffeePage } from './../input-coffee/input-coffee';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public listCoffee: any;
  public name: string


  constructor(
    public navCtrl: NavController,
    public coffeeShopApi: CoffeeShopApi
  ) {
    this.name = 'Jihwan'
  }
  ionViewDidLoad() {
    this.coffeeShopApi.find().subscribe(
      listCoffee => {
        this.listCoffee = listCoffee
      },
      err => {
        console.log(err)
      }
    )
  }


  toEdit(id) {
    console.log(id)
    id = id || '';
    this.navCtrl.push(InputCoffeePage, {
      id: id
    })
  }

}
