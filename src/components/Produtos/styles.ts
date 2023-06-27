import { styled } from 'styled-components'

export const DivCardMain = styled.div`
  max-width: 320px;
  height: auto;
  position: relative;
  background-color: #e66767;
  padding: 8px;
`
export const DivProdutos = styled.div`
  padding-top: 25px;
`

export const UlPratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
  margin-bottom: 120px;
  justify-items: center;
`

export const ImgProduto = styled.img`
  width: 100%;
  height: 167px;
  display: block;
  object-fit: cover;
`
export const TituloProduto = styled.h2`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const DescricaoProduto = styled.p`
  color: #ffebd9;
  font-size: 14px;
  line-height: 22px;
  padding-top: 8px;
`
export const BtnProduto = styled.button`
  width: 304px;
  height: 24px;
  flex-shrink: 0;
  background-color: #ffebd9;
  color: #e66767;
  margin-top: 8px;
  align-items: center;
  cursor: pointer;
`
export const Model = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.active {
    display: flex;
  }

  .container {
    width: 960px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.83);
  }
`
export const ModalContent = styled.div`
  background-color: #e66767;
  position: relative;
  z-index: 1;
  padding: 32px;
  max-height: 344px;

  .divProdutoImg {
    display: flex;
    gap: 24px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  .btn-fechar {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .content {
    h4 {
      font-size: 18px;
      color: rgb(255, 255, 255);
      margin-bottom: 16px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgb(255, 255, 255);
      margin-bottom: 16px;
    }

    button {
      padding: 4px 7px;
      border: none;
      cursor: pointer;
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-top: 16px;
    }
  }
`
