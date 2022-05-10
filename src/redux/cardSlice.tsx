import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'cards',

  initialState: [
    {
      price: 32,
      title: 'Cerveja Pretaaaaa',
      alt: 'Cerbeja Preta Colorado',
      units: 12,
      ml: 330,
      offer: 'Buy 3 get 1 free'
    },

    {
      price: 32,
      title: 'Cerveja Preta',
      alt: 'Cerbeja Preta Colorado',
      units: 12,
      ml: 330,
      offer: 'Buy 3 get 1 free'
    },

    {
      price: 32,
      title: 'Cerveja Preta',
      alt: 'Cerbeja Preta Colorado',
      units: 12,
      ml: 330,
      offer: 'Buy 3 get 1 free'
    },

    {
      price: 32,
      title: 'Cerveja Preta',
      alt: 'Cerbeja Preta Colorado',
      units: 12,
      ml: 330,
      offer: 'Buy 3 get 1 free',
      qtd: 0
    }
  ],
  reducers: {
    getUser(state, { payload }) {
      return { ...state, qtd: payload }
    }
  }
})

export const { getUser } = slice.actions

export const selectCard = (state: { cards: [] }) => state.cards

export default slice.reducer
