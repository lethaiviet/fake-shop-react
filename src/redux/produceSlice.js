import { createSlice } from '@reduxjs/toolkit'
import { getProduces } from './produceThunk'

const name = 'produces'

const initialState = {
    produces: [],
    produce: {},
    loading: false,
    errorMsg: null
}


export const produceSlice = createSlice({
    name, initialState,
    reducers: {
        setProduces(state, action) {
            state.produces.push(action.payload)
        }
    },
    extraReducers: {
        [getProduces.pending]: (state) => {
            state.loading = true
        },
        [getProduces.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.produces = payload
        },
        [getProduces.rejected]: (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
        },
    }
})

export const selectProduces = (state) => state.produce

export const { setProduces } = produceSlice.actions

export default produceSlice.reducer