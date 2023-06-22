import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import backImg from '../../assets/images/fundo.png'
import ResturantesList from '../../components/RestaurantesList/restaurantesList'
import primeiroRestaurante from '../../assets/images/restaurante-1.png'
import segundoRestaurante from '../../assets/images/restaurante-2.png'
import Footer from '../../Footer/footer'
import { DivHeader } from './styles'

import Restaurantes from '../../models/Restaurantes'

const restaurantes: Restaurantes[] = [
  {
    id: 1,
    img: primeiroRestaurante,
    titulo: 'Hioki Sushi ',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    tipoRestaurantes: 'Japonesa'
  },
  {
    id: 2,
    img: segundoRestaurante,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipoRestaurantes: 'Itáliano'
  },
  {
    id: 3,
    img: segundoRestaurante,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipoRestaurantes: 'Itáliano'
  },
  {
    id: 4,
    img: segundoRestaurante,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipoRestaurantes: 'Itáliano'
  },
  {
    id: 5,
    img: segundoRestaurante,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipoRestaurantes: 'Itáliano'
  },
  {
    id: 6,
    img: segundoRestaurante,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipoRestaurantes: 'Itáliano'
  }
]

const Perfil = () => (
  <>
    <div className="App">
      <header style={{ backgroundImage: `url(${backImg})` }}>
        <DivHeader>
          <Link to={'/'}>Restaurantes</Link>
          <img src={logo} alt="" />
          <span>0 produto(s) no carrinho</span>
        </DivHeader>
      </header>
      <div className="container">
        <ResturantesList restaurantes={restaurantes} />
      </div>
      <Footer />
    </div>
  </>
)
export default Perfil
