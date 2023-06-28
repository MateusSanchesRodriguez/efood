import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer/footer'

import { ListaRestaurantes } from '../../pages/Home/home'
import Produtos from '../../components/Produtos/produtos'
import HeaderPerfil from '../../components/HeaderPerfil/headerPerfil'
import BannerPerfil from '../../components/BannerPerfil/bannerPerfil'
import { useEffect, useState } from 'react'
import { useGetRestaurantesQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantesQuery(id!)

  if (!restaurante) {
    return <h3> Carregando...</h3>
  }

  return (
    <div className="App">
      <HeaderPerfil />
      <BannerPerfil
        bannerImg={restaurante.capa}
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <Produtos restaurante={restaurante} />
      <Footer />
    </div>
  )
}
export default Perfil
