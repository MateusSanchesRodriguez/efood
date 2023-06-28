import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ListaRestaurantes } from '../../pages/Home/home'
import fechar from '../../assets/images/fechar.png'
import {
  UlPratos,
  ImgProduto,
  TituloProduto,
  DescricaoProduto,
  BtnProduto,
  DivCardMain,
  Model,
  ModalContent
} from './styles'
import { open, add } from '../../store/reducers/carrinho'

type Props = {
  restaurante: ListaRestaurantes
}
const Produtos = ({ restaurante }: Props) => {
  const produtos = restaurante.cardapio
  const [modal, setModal] = useState(false)
  const [modalTitulo, setTitulo] = useState('')
  const [modalFoto, setFoto] = useState('')
  const [modalDescricao, setDescricao] = useState('')
  const [modalPorcao, setPorcao] = useState('')
  const [modalPreco, setPreco] = useState('')

  const dispatch = useDispatch()

  const addCarrinho = () => {
    dispatch(add(restaurante))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 263) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  if (!restaurante) {
    return <h3> Carregando...</h3>
  }

  return (
    <>
      <div className="container">
        <UlPratos>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <DivCardMain>
                <ImgProduto src={produto.foto} alt={produto.nome} />
                <TituloProduto>{produto.nome}</TituloProduto>
                <DescricaoProduto>
                  {getDescricao(produto.descricao)}
                </DescricaoProduto>
                <BtnProduto
                  onClick={() => {
                    setModal(true)
                    setFoto(produto.foto)
                    setTitulo(produto.nome)
                    setDescricao(produto.descricao)
                    setPorcao(produto.porcao)
                    setPreco(formataPreco(parseFloat(produto.preco)))
                  }}
                >
                  Adicionar ao carrinho
                </BtnProduto>
              </DivCardMain>
            </li>
          ))}
        </UlPratos>
      </div>
      <Model className={modal ? 'active' : ''}>
        <ModalContent className="container">
          <div className="divProdutoImg">
            <img src={modalFoto} alt={modalTitulo} />
            <div className="content">
              <h4>{modalTitulo}</h4>
              <p>{modalDescricao}</p>
              <p>{modalPorcao}</p>
              <button
                onClick={() => {
                  setModal(false)
                  addCarrinho()
                }}
              >
                Adicionar ao carrinho {modalPreco}
              </button>
            </div>
          </div>
          <img
            src={fechar}
            className="btn-fechar"
            alt="fechar"
            onClick={() => setModal(false)}
          />
        </ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </Model>
    </>
  )
}
export default Produtos
