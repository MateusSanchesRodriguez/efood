import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const DivCardMain = styled.div`
  max-width: 472px;
  height: auto;
  position: relative;
  padding: 8px;
`
export const DivFundoCard = styled.div`
  background-color: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e66767;
`

export const DivTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const TipoRestaurante = styled.span`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  padding: 6px 4px;
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  text-transform: capitalize;
`

export const DestaqueRestaurante = styled.span`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  padding: 6px 4px;
  display: block;
  top: 16px;
  position: absolute;
  margin-left: 265px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 700;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 160px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 130px;
  }
`

export const ImgCard = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  padding-top: 8px;
  padding-left: 7px;
  display: block;
  color: #e66767;
`
export const DivNota = styled.div`
  display: flex;
  align-items: center;
`

export const Nota = styled.span`
  margin-right: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #e66767;
`

export const Estrela = styled.img`
  padding-right: 8px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 20px;
  padding-left: 8px;
  padding-right: 8px;
  color: #e66767;
`
export const BtnCard = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 5px;
  background-color: #e66767;
  padding: 4px 6px 4px 6px;
  margin-left: 14px;
  margin-bottom: 12px;
  cursor: pointer;
`
