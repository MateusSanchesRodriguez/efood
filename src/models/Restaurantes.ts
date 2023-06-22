class Restaurantes {
  img: string
  titulo: string
  nota: string
  descricao: string
  tipoRestaurantes: string
  id: number

  constructor(
    id: number,
    img: string,
    titulo: string,
    nota: string,
    descricao: string,
    tipoRestaurantes: string
  ) {
    this.id = id
    this.img = img
    this.titulo = titulo
    this.nota = nota
    this.descricao = descricao
    this.tipoRestaurantes = tipoRestaurantes
  }
}

export default Restaurantes
