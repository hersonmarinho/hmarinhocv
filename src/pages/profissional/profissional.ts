import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Profissional page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html'
})
export class ProfissionalPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfissionalPage Page');
  }

}
