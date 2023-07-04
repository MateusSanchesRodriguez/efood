import Resturantes from '../Restaurantes/restaurantes'
import { Template } from './styles'

import { useEffect, useState } from 'react'
import Loader from '../Loader/loader'

export type Props = {
  restaurantes?: ListaRestaurantes[]
  isLoading: boolean
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 263) {
    return descricao.slice(0, 250) + '...'
  }
  return descricao
}

const ResturantesList = ({ restaurantes, isLoading }: Props) => {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const novaLarguraTela = window.innerWidth
      setLarguraTela(novaLarguraTela)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Template>
      {restaurantes &&
        restaurantes.map((restaurantes) => {
          const descricao =
            larguraTela <= 1024
              ? getDescricao(restaurantes.descricao)
              : restaurantes.descricao

          return (
            <li key={restaurantes.id}>
              <Resturantes
                img={restaurantes.capa}
                titulo={restaurantes.titulo}
                nota={restaurantes.avaliacao}
                descricao={descricao}
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
