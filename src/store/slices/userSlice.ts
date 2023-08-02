import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.name = action.payload.name
        },
        updateName(state, action) {
            state.name = action.payload.newName;
        },
    },
})

export const {setUser, updateName} = userSlice.actions
export default userSlice.reducer