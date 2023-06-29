import { useEffect, useState } from 'react'

import Header from '../../components/Header/header'
import ResturantesList from '../../components/RestaurantesList/restaurantesList'
import Footer from '../../components/Footer/footer'
import { useGetListaRestauranteQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type ListaRestaurantes = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: listaRestaurantes } = useGetListaRestauranteQuery()

  if (!listaRestaurantes) {
    return <h3> Carregando...</h3>
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ResturantesList restaurantes={listaRestaurantes} />
      </div>
      <Footer />
    </div>
  )
}
export default Home
