import { useEffect, useState } from 'react'

import Header from '../../components/Header/header'
import ResturantesList from '../../components/RestaurantesList/restaurantesList'
import Footer from '../../components/Footer/footer'

export type ListaRestaurantes = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: string
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [listaRestaurantes, setListaRestaurantes] = useState<
    ListaRestaurantes[]
  >([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setListaRestaurantes(res))
    )
  }, [])

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
