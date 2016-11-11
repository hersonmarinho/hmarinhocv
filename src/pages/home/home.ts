import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';
import { Pessoa } from '../../app/models/pessoa';
import { Endereco } from '../../app/models/endereco';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})


export class HomePage implements OnInit{
  public titulo: string = 'Dados Pessoais';
  public pessoa: Pessoa;
  public endereco: Endereco;

  constructor(public navCtrl: NavController, public homeService: HomeService) {
  }

  ngOnInit() {
    this.pessoa = this.homeService.carregarPessoa();
    this.endereco = this.homeService.carregarEndereco();
  }


}
