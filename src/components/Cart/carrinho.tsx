import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import {
  Btn,
  CarrinhoContainer,
  Overlay,
  Preco,
  Sidebar,
  Titulo,
  ValorTotal,
  CarrinhoItem
} from './styles'
import { close } from '../../store/reducers/carrinho'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCarrinho = () => {
    dispatch(close())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCarrinho} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CarrinhoItem key={item.id}>
              <img src={item.capa} />
              <div>
                <Titulo>{item.titulo}</Titulo>
                <Preco>20</Preco>
              </div>
              <button type="button" />
            </CarrinhoItem>
          ))}
        </ul>
        <ValorTotal>
          <span>Valor Total</span>
          <span>RS 250</span>
        </ValorTotal>
        <Btn>
          <span>Continuar com a entrega</span>
        </Btn>
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
