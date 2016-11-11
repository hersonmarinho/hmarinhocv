import { Injectable } from '@angular/core';
import { Objetivo } from '../../app/models/objetivo';


@Injectable()
export class AboutService{
  public objetivos: Objetivo[] = [
    new Objetivo('Profissionais', 'Crescimento profissional e aprendizado contínuo, com foco em desenvolvimento de aplicações. Explorando tecnologias web e mobile como Node.js, AngularJS e também bancos de dados não relacionais (NoSQL). Realizar um intercâmbio com foco em desenvolver o meu conhecimento na língua inglesa.'),
    new Objetivo('Pessoais', 'Viajar para Irlanda e Noruega, buscando oportunidade de conhecer e vivenciar um pouco da cultura e costumes de ambos esses países.')
  ];

  carregarObjetivos(){
    return this.objetivos;
  }
}
