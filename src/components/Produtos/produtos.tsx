import pratoImg from '../../assets/images/sashimijpeg.jpeg'
import fechar from '../../assets/images/fechar.png'
import { ListaRestaurantes } from '../../pages/Home/home'

import {
  UlPratos,
  ImgProduto,
  TituloProduto,
  DescricaoProduto,
  BtnProduto,
  DivCardMain,
  Model
} from './styles'

export type Props = {
  restaurante: ListaRestaurantes
}

const Produtos = ({ restaurante }: Props) => {
  const produtos = restaurante.cardapio

  const getDescricao = (descricao: string) => {
    if (descricao.length > 263) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const Modal = () => {
    return <h2>ESSA PORRA N FOI</h2>
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
                  <BtnProduto onClick={Modal}>Adicionar ao carrinho</BtnProduto>
                </DivCardMain>
              </li>
            )
          })}
        </UlPratos>
      </div>
      <Model>
        <div className="container">
          <img src={fechar} />
          <div>
            <img src={pratoImg} />
            <h4>Teste</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              ipsum.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Adicionar ao carrinho R$ 40</button>
          </div>
        </div>
      </Model>
    </>
  )
}

export default Produtos
