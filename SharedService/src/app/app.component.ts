import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page1 } from '../pages/page1/page1';
@Component({
 templateUrl: 'app.html'
})
export class MyApp {
 rootPage:any = Page1;
 constructor(platform: Platform, statusBar: StatusBar,
splashScreen: SplashScreen) {
 platform.ready().then(() => {
 // Okay, so the platform is ready and our plugins are available.
 // Here you can do any higher level native things you might need.
 statusBar.styleDefault();
 splashScreen.hide();
 });
 }
}

