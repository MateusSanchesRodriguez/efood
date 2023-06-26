import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redes sociais.png'
import { DivCenter } from '../../styles'
import { DescRodape, ImgLogo } from './styles'

const Footer = () => {
  return (
    <footer>
      <DivCenter style={{ backgroundColor: '#ffebd9', height: '298px' }}>
        <ImgLogo src={logo} alt="Logo" className="logo" />
        <img src={redesSociais} style={{ cursor: 'pointer' }} />
        <DescRodape>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </DescRodape>
      </DivCenter>
    </footer>
  )
}

export default Footer
