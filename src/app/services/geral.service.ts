import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController , AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {
  public update_data = new BehaviorSubject('');
  constructor(
    public route: Router,
    public alertController: AlertController,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public actionCtrl: ActionSheetController
  ) { }

  presentAlert(header, message) {
    return this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    })
  }

  presentToast(header, message, position) {
    return this.toastCtrl.create({
      header: header,
      message: message,
      duration: 3000,
      buttons: [
        {
          text: 'Fechar'
        }
      ]
    })
  }

  setData(text) {
    this.update_data.next(text);
  }

  getDataSub() {
    return this.update_data;
  }
}
