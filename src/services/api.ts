import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ListaRestaurantes } from '../pages/Home/home'

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
    })
  })
})

export const { useGetListaRestauranteQuery, useGetRestaurantesQuery } = api
export default api
