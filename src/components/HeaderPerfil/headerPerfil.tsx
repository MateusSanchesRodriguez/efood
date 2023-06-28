import { useDispatch, useSelector } from 'react-redux'

import { DivHeader, Header, CarrinhoBotao } from './styles'
import logo from '../../assets/images/logo.png'
import backImg from '../../assets/images/fundo.png'
import carrinho from '../../assets/images/carrinho.svg'
import Carrinho from '../Cart/carrinho'
import { open } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store/store'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCarrinho = () => {
    dispatch(open())
  }

  return (
    <Header style={{ backgroundImage: `url(${backImg})` }}>
      <DivHeader className="container">
        <a href="/">Restaurantes</a>
        <img src={logo} alt="" />
        <Carrinho />
        <CarrinhoBotao onClick={openCarrinho}>
          {items.length} produto(s)
          <img src={carrinho} />
        </CarrinhoBotao>
      </DivHeader>
    </Header>
  )
}

export default HeaderPerfil
