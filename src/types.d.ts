declare interface CardapioItem {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type ListaRestaurantes = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
