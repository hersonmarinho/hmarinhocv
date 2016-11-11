export class Endereco{
  constructor(
    public tipoLogradouro: string,
    public endereco: string,
    public numero: number,
    public bairro: string,
    public cidade: string,
    public estado: string
  ){}
}
