import { createSlice } from '@reduxjs/toolkit'
import Item from '../components/Item'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
        let item = new Item(action.payload)
        state.value = [...state.value, item]

    },
    deleteItem: (state, action) => {
        state.value = state.value.filter(item=> item.id !== action.payload)
    },
    doneItem: (state, action) => {
        state.value = state.value.map(item=>{
            if(item.id === action.payload){
                item.done = !item.done
            }

            return item
        })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, doneItem } = listSlice.actions

export default listSlice.reducer


