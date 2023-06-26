import { Banner } from './styles'

export type Props = {
  bannerImg: string
  categoria: string
  nome: string
}

const BannerPerfil = ({ bannerImg, categoria, nome }: Props) => {
  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <span>{categoria}</span>
          <div className="Titulo">
            <h2>{nome}</h2>
          </div>
        </div>
      </Banner>
    </>
  )
}

export default BannerPerfil
