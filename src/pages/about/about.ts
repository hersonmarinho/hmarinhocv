import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutService } from '../../app/services/about.service';
import { Objetivo } from '../../app/models/objetivo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [AboutService]
})
export class AboutPage implements OnInit{
  public titulo: string = 'Objetivos';
  public objetivos: Objetivo[];

  constructor(public navCtrl: NavController, public aboutService: AboutService) {
  }

  ngOnInit() {
    this.objetivos = this.aboutService.carregarObjetivos();
  }

}
