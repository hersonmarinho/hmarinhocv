export class Curso{
  constructor(
    public tipo: string,
    public instituicao: string,
    public descricao: string,
    public dataInicio: Date,
    public dataFim: Date,
    public logo: string
  ){}
}
