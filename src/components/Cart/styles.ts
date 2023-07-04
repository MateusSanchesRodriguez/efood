import { styled } from 'styled-components'
import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CarrinhoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const Titulo = styled.h3`
  color: #e66767;
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Preco = styled.p`
  color: #e66767;
  font-size: 14px;
  line-height: 22px;
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  span {
    color: #ffebd9;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`
export const Btn = styled.button`
  width: 100%;
  height: 24px;
  background-color: #ffebd9;
  border: none;
  cursor: pointer;
  margin-top: 24px;

  span {
    color: #e66767;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`
export const CarrinhoItem = styled.div`
  display: flex;
  background-color: #ffebd9;
  width: 344px;
  height: 100px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    padding: 8px;
  }

  button {
    background-image: url(${excluir});
    background-color: transparent;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
