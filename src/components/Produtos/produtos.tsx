import fechar from '../../assets/images/fechar.png'
import { ListaRestaurantes } from '../../pages/Home/home'

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
import { useState } from 'react'

export type Props = {
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
          {produtos.map((produtos) => {
            return (
              <li key={produtos.id}>
                <DivCardMain>
                  <ImgProduto src={produtos.foto} alt="" />
                  <TituloProduto>{produtos.nome}</TituloProduto>
                  <DescricaoProduto>
                    {getDescricao(produtos.descricao)}
                  </DescricaoProduto>
                  <BtnProduto
                    onClick={() => {
                      setModal(true)
                      setFoto(produtos.foto)
                      setTitulo(produtos.nome)
                      setDescricao(produtos.descricao)
                      setPorcao(produtos.porcao)
                      setPreco(formataPreco(parseFloat(produtos.preco)))
                    }}
                  >
                    Adicionar ao carrinho
                  </BtnProduto>
                </DivCardMain>
              </li>
            )
          })}
        </UlPratos>
      </div>
      <Model className={modal ? 'active' : ''}>
        <ModalContent className="container">
          <div className="divProdutoImg">
            <img src={modalFoto} />
            <div className="content">
              <h4>{modalTitulo}</h4>
              <p>{modalDescricao}</p>
              <p>{modalPorcao}</p>
              <button>Adicionar ao carrinho {modalPreco}</button>
            </div>
          </div>
          <img
            src={fechar}
            className="btn-fechar"
            onClick={() => setModal(false)}
          />
        </ModalContent>
        <div className="overlay"></div>
      </Model>
    </>
  )
}

export default Produtos
