import { createGlobalStyle, styled } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:0;
  color: rgb(230, 103, 103);
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}

body{
  background-color:rgb(255, 248, 242);;
}

.container{
  max-width: 1024px;
  width:100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.desktop}) {
    max-width:90%
  }
  @media (max-width:${breakpoints.tablet}) {
    max-width:90%
  }
  @media (max-width:${breakpoints.mobile}) {
    max-width:80%
  }
}
`

export const DivCenter = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
