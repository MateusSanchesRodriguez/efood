import { DivHeader, Header } from './styles'
import logo from '../../assets/images/logo.png'
import backImg from '../../assets/images/fundo.png'

const HeaderPerfil = () => {
  return (
    <>
      <Header style={{ backgroundImage: `url(${backImg})` }}>
        <DivHeader className="container">
          <a href="/">Restaurantes</a>
          <img src={logo} alt="" />
          <span>0 produto(s) no carrinho</span>
        </DivHeader>
      </Header>
    </>
  )
}

export default HeaderPerfil
