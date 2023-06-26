import Resturantes from '../Restaurantes/restaurantes'
import { Template } from './styles'

import { ListaRestaurantes } from '../../pages/Home/home'

export type Props = {
  restaurantes: ListaRestaurantes[]
}

const ResturantesList = ({ restaurantes }: Props) => {
  return (
    <Template>
      {restaurantes.map((restaurantes) => {
        return (
          <li key={restaurantes.id}>
            <Resturantes
              img={restaurantes.capa}
              titulo={restaurantes.titulo}
              nota={restaurantes.avaliacao}
              descricao={restaurantes.descricao}
              tipoRestaurante={restaurantes.tipo}
              destaque={restaurantes.destacado}
              id={restaurantes.id}
            />
          </li>
        )
      })}
    </Template>
  )
}

export default ResturantesList
