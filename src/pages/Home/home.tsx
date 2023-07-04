import Header from '../../components/Header/header'
import ResturantesList from '../../components/RestaurantesList/restaurantesList'
import Footer from '../../components/Footer/footer'

import { useGetListaRestauranteQuery } from '../../services/api'

const Home = () => {
  const { data: listaRestaurantes, isLoading: loading } =
    useGetListaRestauranteQuery()

  return (
    <>
      <Header />
      <div className="container">
        <ResturantesList restaurantes={listaRestaurantes} isLoading={loading} />
      </div>
      <Footer />
    </>
  )
}
export default Home
