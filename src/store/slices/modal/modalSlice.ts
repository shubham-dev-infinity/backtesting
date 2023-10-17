import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    modal: 'login'
}

export const modalSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeModal: (state, action: PayloadAction<{ data: string }>) => {
            const modal = action.payload.data
            state.modal = modal
        },
    }
})

export const { changeModal } = modalSlice.actions
export default modalSlice.reducer