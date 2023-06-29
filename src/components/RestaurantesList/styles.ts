import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Template = styled.ul`
  padding-top: 80px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: 20px;
    row-gap: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
