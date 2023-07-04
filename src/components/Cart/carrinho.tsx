import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store/store'
import { close, remove, clear } from '../../store/reducers/carrinho'
import { Sidebar, Title, InputGroup } from '../../styles'
import { usePurchaseMutation } from '../../services/api'
import * as S from './styles'
import { convertToBrl } from '../../utils/utils'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cart, setCart] = useState(true)
  const [purchaseData, setPurchaseData] = useState(false)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const [paymentData, setPaymentData] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCarrinho = () => {
    dispatch(close())
  }

  const removeProduto = (id: number) => {
    dispatch(remove(id))
  }

  const goToPurchase = () => {
    setCart(false)
    setPurchaseData(true)
  }

  const backToCart = () => {
    setCart(true)
    setPurchaseData(false)
    setPaymentData(false)
    setCheckout(false)
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.CEP &&
      !form.errors.number
    ) {
      setPurchaseData(false)
      setPaymentData(true)
    }
  }

  const backToPurchase = () => {
    setPaymentData(false)
    setPurchaseData(true)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += parseFloat(valorAtual.preco))
    }, 0)
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      CEP: '',
      number: '',
      reference: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      address: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      city: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio'),
      CEP: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      number: Yup.number()
        .min(2, 'O campo precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatorio'),
      reference: Yup.string().optional(),
      cardName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatorio'),
      expiresMonth: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .required('Campo obrigatorio'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as unknown as number
        })),
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.number),
            complement: values.reference
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const finishPurchase = () => {
    setCart(true)
    setCheckout(false)
    closeCarrinho()
    setEmptyCart(false)
    navigate('/')
  }

  useEffect(() => {
    if (isSuccess) {
      setPaymentData(false)
      setCheckout(true)
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCarrinho} />
      <Sidebar className={cart ? '' : 'is-closed'}>
        {items.length < 1 ? (
          <div>
            <p className="empty-text">
              Carrinho vazio, adicione pelo menos um produto para continuar com
              a compra
            </p>
          </div>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CarrinhoItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <S.Titulo>{item.nome}</S.Titulo>
                    <S.Preco>{convertToBrl(parseFloat(item.preco))}</S.Preco>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeProduto(item.id)}
                  />
                </S.CarrinhoItem>
              ))}
            </ul>
            <S.ValorTotal>
              <span>Valor Total</span>
              <span>{convertToBrl(getTotalPrice())}</span>
            </S.ValorTotal>
            <S.Btn>
              <span onClick={goToPurchase}>Continuar com a entrega</span>
            </S.Btn>
          </>
        )}
      </Sidebar>
      <Sidebar className={purchaseData ? '' : 'is-closed'}>
        <Title>Entrega</Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.fullName}
              className={checkInput('fullName') ? 'error' : ''}
              required
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
              value={form.values.address}
            />
            <small>{getErrorMessage('address', form.errors.address)}</small>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
              value={form.values.city}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </div>
          <InputGroup>
            <div>
              <label htmlFor="CEP">CEP</label>
              <InputMask
                type="text"
                name="CEP"
                id="CEP"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('CEP') ? 'error' : ''}
                value={form.values.CEP}
                mask="99999-999"
              />
              <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                id="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
                value={form.values.number}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </div>
          </InputGroup>
          <div>
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              type="text"
              name="reference"
              id="reference"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </form>
        {form.values.fullName &&
        form.values.address &&
        form.values.city &&
        form.values.CEP &&
        form.values.number ? (
          <S.Btn type="button" onClick={goToPayment}>
            Continuar com pagamento
          </S.Btn>
        ) : (
          ''
        )}
        <S.Btn type="button" onClick={backToCart}>
          Voltar para carrinho
        </S.Btn>
      </Sidebar>
      <Sidebar className={paymentData ? '' : 'is-closed'}>
        <Title>Pagamento - Valor a pagar {convertToBrl(getTotalPrice())}</Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('cardName') ? 'error' : ''}
              value={form.values.cardName}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </div>
          <InputGroup>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cardNumber') ? 'error' : ''}
                value={form.values.cardNumber}
                mask="9999 9999 9999 9999"
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                name="cvv"
                id="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cvv') ? 'error' : ''}
                value={form.values.cvv}
                mask="999"
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </div>
          </InputGroup>
          <InputGroup>
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                name="expiresMonth"
                id="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresMonth') ? 'error' : ''}
                value={form.values.expiresMonth}
                mask="99"
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                type="text"
                name="expiresYear"
                id="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresYear') ? 'error' : ''}
                value={form.values.expiresYear}
                mask="99"
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </div>
          </InputGroup>
          {form.values.cardName &&
          form.values.cardNumber &&
          form.values.cvv &&
          form.values.expiresMonth &&
          form.values.expiresYear ? (
            <S.Btn type="submit" disabled={isLoading}>
              {isLoading ? 'Finalizando Compra ...' : 'Finalizar pagamento'}
            </S.Btn>
          ) : (
            <S.Btn type="button" onClick={backToPurchase}>
              Voltar para a edição de endereço
            </S.Btn>
          )}
        </form>
      </Sidebar>
      {isSuccess && data ? (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          <Title>Pedido realizado - {data.orderId}</Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Btn className="margin-top" onClick={finishPurchase}>
            Concluir
          </S.Btn>
        </Sidebar>
      ) : (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          <h3>Erro na transação</h3>
        </Sidebar>
      )}
    </S.CarrinhoContainer>
  )
}
export default Carrinho
