import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TUserBasic = {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    isBlock: boolean;
    countryCode: string;
}

type TUserAuth = {
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: TUserBasic & TUserAuth = {
    _id: "652bc350656bbdc971df435d",
    name: "king is back",
    email: "kingback@gmail.com",
    phoneNumber: "9879868333",
    countryCode: "+91",
    isBlock: false,
    isLoggedIn: false,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initializeUser: (state, action: PayloadAction<{ data: { userBasic: TUserBasic, token: string } }>) => {
            const { userBasic, token } = action.payload.data
            const { _id, name, email, phoneNumber, countryCode, isBlock } = userBasic
            state._id = _id;
            state.name = name
            state.email = email;
            state.phoneNumber = phoneNumber;
            state.countryCode = countryCode;
            state.isBlock = isBlock;
            state.isLoggedIn = true;
            state.token = token
        },
    }
})

export const { initializeUser } = userSlice.actions
export default userSlice.reducer