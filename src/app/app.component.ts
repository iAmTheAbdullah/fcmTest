import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
// import { Subject } from 'rxjs/Subject';
// import { tap } from 'rxjs/operators';

import { TabsPage } from '../pages/tabs/tabs';

import { FcmProvider } from '../providers/fcm/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, fcm: FcmProvider, toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Get a FCM token
      fcm.getToken()
    });
  }
}