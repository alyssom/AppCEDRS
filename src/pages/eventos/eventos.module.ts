import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class EventosPageModule {}
