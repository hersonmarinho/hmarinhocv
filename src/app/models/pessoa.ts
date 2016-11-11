import { Endereco } from '../../app/models/endereco';

export class Pessoa{
  constructor(
    public nome:string,
    public localDeNasc:string,
    public estadoCivil: string,
    public endereco: Endereco,
    public telefone: string,
    public email: string,
    public dtNasc: Date,
    public foto: string,
    public resumo: string
  ){}
}
