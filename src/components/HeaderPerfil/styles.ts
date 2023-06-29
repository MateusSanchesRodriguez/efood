import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Header = styled.div`
  height: 186px;
  width: 100%;
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`
export const CarrinhoBotao = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 8px;
  }
`
