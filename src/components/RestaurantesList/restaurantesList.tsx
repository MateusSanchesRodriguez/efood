import Resturantes from '../Restaurantes/restaurantes'
import { Template } from './styles'

import Restaurantes from '../../models/Restaurantes'

export type Props = {
  restaurantes: Restaurantes[]
}

const ResturantesList = ({ restaurantes }: Props) => (
  <Template>
    {restaurantes.map((restaurantes) => (
      <>
        <li>
          <Resturantes
            key={restaurantes.id}
            img={restaurantes.img}
            titulo={restaurantes.titulo}
            nota={restaurantes.nota}
            descricao={restaurantes.descricao}
            tipoRestaurante={restaurantes.tipoRestaurantes}
          />
        </li>
      </>
    ))}
  </Template>
)

export default ResturantesList
