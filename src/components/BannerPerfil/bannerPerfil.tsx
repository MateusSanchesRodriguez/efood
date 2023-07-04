import { Banner } from './styles'

export type Props = {
  bannerImg: string
  category: string
  name: string
}

const BannerPerfil = ({ bannerImg, category, name }: Props) => {
  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <span>{category}</span>
          <div className="Title">
            <h2>{name}</h2>
          </div>
        </div>
      </Banner>
    </>
  )
}

export default BannerPerfil
