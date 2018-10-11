import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
;
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { UserService } from '../services/user';
@NgModule({
 declarations: [
 MyApp,
 Page1,
 Page2
 ],
 imports: [
 BrowserModule,
 IonicModule.forRoot(MyApp)
 ],
 bootstrap: [IonicApp],
 entryComponents: [
 MyApp,
 Page1,
 Page2
 ],
 providers: [
 StatusBar,
 SplashScreen,
 UserService,
 {provide: ErrorHandler, useClass: IonicErrorHandler}
 ]
})
export class AppModule {}
