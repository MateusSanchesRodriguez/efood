import { Link } from 'react-router-dom'
import estrela from '../../assets/images/star_favorite.png'
import {
  DivCardMain,
  DivFundoCard,
  DivTitulo,
  TipoRestaurante,
  Titulo,
  DivNota,
  Nota,
  Estrela,
  Descricao,
  BtnCard,
  ImgCard
} from './styles'

type Props = {
  img: string
  titulo: string
  nota: string
  descricao: string
  tipoRestaurante: string
}

const Resturantes = ({
  img,
  titulo,
  nota,
  descricao,
  tipoRestaurante
}: Props) => (
  <DivCardMain>
    <ImgCard src={img} alt="" />
    <DivFundoCard>
      <DivTitulo>
        <Titulo>{titulo}</Titulo>
        <DivNota>
          <Nota>{nota}</Nota>
          <Estrela src={estrela}></Estrela>
        </DivNota>
      </DivTitulo>
      <Descricao>{descricao}</Descricao>
      <BtnCard title="clique aqui para saber mais">
        <Link to="/perfil" style={{ color: '#ffebd9' }}>
          Saiba mais
        </Link>
      </BtnCard>
    </DivFundoCard>
    <TipoRestaurante>{tipoRestaurante}</TipoRestaurante>
  </DivCardMain>
)

export default Resturantes
