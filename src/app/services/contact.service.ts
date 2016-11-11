import { Injectable } from '@angular/core';
import { Curso } from '../../app/models/curso';


@Injectable()
export class ContactService{
  public cursos: Curso[] = [
    new Curso('Formação', 'Senac São Paulo', 'Tecnologia em Análise e Desenvolvimento de Sistemas', new Date(2015, 2, 9), new Date(2017, 6, 31), 'assets/img/senac.png'),
    new Curso('Formação Técnica', 'Senac São Paulo', 'Tecnico em Informática', new Date(2012, 2, 1), new Date(2013, 12, 31), 'assets/img/senac.png'),
    new Curso('Idiomas', 'Wizard São Paulo', 'Inglês Intermediário', new Date(2012, 3, 5), new Date(2015, 11, 15), 'assets/img/wizard.png')
  ];

  carregarCursos(){
    return this.cursos;
  }

}
