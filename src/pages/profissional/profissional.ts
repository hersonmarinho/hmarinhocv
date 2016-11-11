import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfissionalService } from '../../app/services/profissional.service';
import { Pessoa } from '../../app/models/pessoa';
import { Profissional } from '../../app/models/profissional';


@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html',
  providers: [ProfissionalService]
})
export class ProfissionalPage implements OnInit{
  public titulo: string = 'Profissional';
  public profissionais: Profissional[];
  public pessoa: Pessoa;

  constructor(public navCtrl: NavController, public profissionalService: ProfissionalService) {
  }

  ngOnInit() {
    this.profissionais = this.profissionalService.carregarProfissionais();
    this.pessoa = this.profissionalService.carregarPessoa();
  }

}
