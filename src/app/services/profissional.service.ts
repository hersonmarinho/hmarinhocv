import { Injectable } from '@angular/core';
import { Profissional } from '../../app/models/profissional';
import { Pessoa } from '../../app/models/pessoa';
import { Endereco } from '../../app/models/endereco';

@Injectable()
export class ProfissionalService{
  public dtNasc: Date = new Date(1991, 10, 8);
  public endereco: Endereco = new Endereco('Rua', 'Durval Pedroso da Silva', 257, 'Vila do Castelo', 'São Paulo', 'SP');
  public pessoa = new Pessoa(
    'Herson Marinho',
    'Brasileiro',
    'Solteiro',
    this.endereco,
    '(11) 98500-1290',
    'herson_nm@hotmail.com',
    this.dtNasc,
    'assets/img/profile.jpg',
    'Com quase dois anos de experiência em desenvolvimento de software, obtendo contato desde a documentação e especificação de requisitos até o desenvolvimento das aplicações, atualmente sou estudante de análise e desenvolvimento de sistemas e trabalho com geração de massa de dados em ambiente Oracle. Durante esse tempo tive a oportunidade de ganhar experiência com engenharia e arquitetura de softwares na faculdade, aplicando, em projetos semestrais, a prática dos conhecimentos obtidos em todas as matérias do semestre, abordando desafios no trabalho em equipe e na solução de problemas propostos usando diversas tecnologias como, Java, JSP, JavaScript, HTML, Node.js, Bancos de Dados relacionais, entre outras.'
  );

  public profissionais: Profissional[] = [
    new Profissional('IBM Brasil', 'IT Specialist', new Date(2016, 9, 12), 'até o momento', 'São Paulo', 'SP', 'assets/img/ibmlogo.jpg', 'https://www.ibm.com'),
    new Profissional('IBM Brasil', 'Estágiário em Desenvolvimento de Sistemas', new Date(2016, 5, 23), '2016', 'São Paulo', 'SP', 'assets/img/ibmlogo.jpg', 'https://www.ibm.com'),
  new Profissional('Front360 Comunicação Total', 'Assistente de TI', new Date(2013, 10, 21), '2016', 'São Paulo', 'SP', 'assets/img/front360.png', 'http://www.front360.com.br/')
  ];

  carregarProfissionais(){
    return this.profissionais;
  }

  carregarPessoa(){
    return this.pessoa;
  }



}
