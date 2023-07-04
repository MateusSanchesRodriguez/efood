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
  box-sizing:border-box;
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
export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffebd9;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 34px;

  #cardNumber {
    width: 228px;
  }

  #expiresMonth {
    width: 150px;
  }
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 344px;
  width: 100%;

  &.is-closed {
    display: none;
  }

  .empty-text {
    font-size: 16px;
    line-height: 22px;
    color: #ffebd9;
    margin-bottom: 16px;
    text-align: center;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffebd9;
    display: block;
    margin-bottom: 8px;
  }

  small {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffebd9;
    display: block;
    margin-bottom: 16px;
  }

  input {
    background-color: #ffebd9;
    height: 32px;
    border: none;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: black;

    &.error {
      border: 3px solid red;
      color: red;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #ffebd9;
    margin-bottom: 16px;
  }
`
