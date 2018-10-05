import { InputCoffeePage } from './../input-coffee/input-coffee';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {
  public listcoffee: any;
  public name: any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public CoffeeShopApi: CoffeeShopApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchbarPage');
    this.CoffeeShopApi.find().subscribe(
      listCoffee => {
        this.listcoffee = listCoffee
      },
      err => {
        console.log(err)
      }
    )
  }

  getItems(ev: any) {
    this.CoffeeShopApi.find().subscribe(
      newcs => {
        this.listcoffee = newcs
        let val = ev.target.value;

        if (val && val.trim() !== '') {
          this.listcoffee = this.listcoffee.filter(function (item) {
            return item.name.toLowerCase().includes(val.toLowerCase())
          })
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  toEdit2(id) {
    console.log(id)
    id = id || '';
    this.navCtrl.push(InputCoffeePage, {
      id: id
    })
  }

}
