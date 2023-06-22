import { TitleHero, ImgLogo } from './styles'
import logo from '../../assets/images/logo.png'
import backImg from '../../assets/images/fundo.png'
import { DivCenter } from '../../styles'

const Header = () => (
  <header>
    <DivCenter style={{ backgroundImage: `url(${backImg})` }}>
      <ImgLogo src={logo} alt="Logo" className="logo" />
      <TitleHero>
        Viva experiências gastronômicasno conforto da sua casa{' '}
      </TitleHero>
    </DivCenter>
  </header>
)

export default Header
