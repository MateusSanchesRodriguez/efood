import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Banner = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 64px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    padding-top: 32px;
    span {
      font-size: 32px;
      color: #ffffff;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  .Title {
    z-index: 1;
    position: relative;
    padding-top: 157px;
    max-width: 600px;
    h2 {
      color: #ffffff;
      font-weight: 900;
    }
  }
`
