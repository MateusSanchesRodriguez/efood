import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type ProductResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getListaRestaurante: builder.query<ListaRestaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantes: builder.query<ListaRestaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<ProductResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetListaRestauranteQuery,
  useGetRestaurantesQuery,
  usePurchaseMutation
} = api
export default api
