import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  options: BarcodeScannerOptions;
  resultadoScanner;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

  async scanCodigoDeBarras(){
    this.options = {
      prompt: 'Escanei o Código de Barras para ver o resultado!'
    }
    this.resultadoScanner = await this.barcode.scan(this.options);
    
  }

}
