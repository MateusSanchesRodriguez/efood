import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer/footer'
import Produtos from '../../components/Produtos/produtos'
import HeaderPerfil from '../../components/HeaderPerfil/headerPerfil'
import BannerPerfil from '../../components/BannerPerfil/bannerPerfil'

import { useGetRestaurantesQuery } from '../../services/api'
import Loader from '../../components/Loader/loader'

type RestauranteParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestauranteParams
  const { data: restaurante } = useGetRestaurantesQuery(id)

  if (!restaurante) {
    return <Loader />
  }

  return (
    <div className="App">
      <HeaderPerfil />
      <BannerPerfil
        bannerImg={restaurante.capa}
        category={restaurante.tipo}
        name={restaurante.titulo}
      />
      <Produtos restaurante={restaurante} />
      <Footer />
    </div>
  )
}
export default Perfil
