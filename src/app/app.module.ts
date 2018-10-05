import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { VReviewPage } from './../pages/v-review/v-review';
import { ReviewPage } from './../pages/review/review';
import { SearchbarPage } from './../pages/searchbar/searchbar';
import { SDKBrowserModule } from './../shared/sdk/index';
import { IntroPage } from './../pages/intro/intro';
import { NewpagePage } from './../pages/newpage/newpage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IonicStorageModule } from '@ionic/storage';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputCoffeePage } from '../pages/input-coffee/input-coffee';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewpagePage,
    IntroPage,
    InputCoffeePage,
    SearchbarPage,
    ReviewPage,
    VReviewPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewpagePage,
    IntroPage,
    InputCoffeePage,
    SearchbarPage,
    ReviewPage,
    VReviewPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
