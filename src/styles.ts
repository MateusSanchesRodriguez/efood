import { createGlobalStyle, styled } from 'styled-components'

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
