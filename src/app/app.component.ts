import { VReviewPage } from './../pages/v-review/v-review';
import { ReviewPage } from './../pages/review/review';
import { SearchbarPage } from './../pages/searchbar/searchbar';
import { InputCoffeePage } from './../pages/input-coffee/input-coffee';
import { IntroPage } from './../pages/intro/intro';
import { NewpagePage } from './../pages/newpage/newpage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Searchbar } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  loader: any
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'SearchBar' , component: SearchbarPage },
      { title: 'InputCoffee' , component: InputCoffeePage },
      { title: 'View Review', component: VReviewPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get('introShown').then((result) => {

        if (result) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }

        // this.loader.dismiss();

      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
