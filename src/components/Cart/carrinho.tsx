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
import { close, remove } from '../../store/reducers/carrinho'
import { formataPreco } from '../Produtos/produtos'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCarrinho = () => {
    dispatch(close())
  }

  const removeProduto = (id: number) => {
    dispatch(remove(id))
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += parseFloat(valorAtual.preco))
    }, 0)
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCarrinho} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CarrinhoItem key={item.id}>
              <img src={item.foto} />
              <div>
                <Titulo>{item.nome}</Titulo>
                <Preco>{formataPreco(parseFloat(item.preco))}</Preco>
              </div>
              <button type="button" onClick={() => removeProduto(item.id)} />
            </CarrinhoItem>
          ))}
        </ul>
        <ValorTotal>
          <span>Valor Total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </ValorTotal>
        <Btn>
          <span>Continuar com a entrega</span>
        </Btn>
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
