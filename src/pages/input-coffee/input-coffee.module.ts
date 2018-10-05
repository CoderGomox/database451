import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputCoffeePage } from './input-coffee';

@NgModule({
  declarations: [
    InputCoffeePage,
  ],
  imports: [
    IonicPageModule.forChild(InputCoffeePage),
  ],
})
export class InputCoffeePageModule {}
