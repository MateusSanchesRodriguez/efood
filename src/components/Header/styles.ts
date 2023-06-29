import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const TitleHero = styled.p`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: rgb(230, 103, 103);
  max-width: 586px;
  height: 84px;
  width: 100%;
  text-align: center;
`
export const ImgLogo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 89px;
  }
`
