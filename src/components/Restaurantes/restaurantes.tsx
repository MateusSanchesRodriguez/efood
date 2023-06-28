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
  ImgCard,
  DestaqueRestaurante
} from './styles'

type Props = {
  img: string
  titulo: string
  nota: number
  descricao: string
  tipoRestaurante: string
  destaque: string
  id: number
}

const Resturantes = ({
  img,
  titulo,
  nota,
  descricao,
  tipoRestaurante,
  destaque,
  id
}: Props) => {
  return (
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
          <Link to={`/restaurante/${id}`} style={{ color: '#ffebd9' }}>
            Saiba mais
          </Link>
        </BtnCard>
      </DivFundoCard>
      {destaque ? (
        <DestaqueRestaurante>Destaque da semana</DestaqueRestaurante>
      ) : (
        ''
      )}
      <TipoRestaurante>{tipoRestaurante}</TipoRestaurante>
    </DivCardMain>
  )
}

export default Resturantes
