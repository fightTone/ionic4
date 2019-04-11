import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheet: ActionSheetController) {}

    async presentActionSheet(){
      const actionSheet = await this.actionSheet.create({
        header: 'Test Action Sheet',
        mode: 'ios',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            icon: 'trash',
            handler: () => {
              console.log('You Clicked me');
            }
          },
          {
            text: 'Hello',
            role: 'destructive',
            icon: 'add',
            handler: () => {
              console.log('You Add me');
            }
          }
        ]
      });
      await actionSheet.present();
    }
}
