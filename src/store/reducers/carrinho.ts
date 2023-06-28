import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListaRestaurantes } from '../../pages/Home/home'

type CartState = {
  items: ListaRestaurantes[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ListaRestaurantes>) => {
      // const produto = state.items.cardapio.find(
      //   (item) => item.id === action.payload.id
      // )
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
