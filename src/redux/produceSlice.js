import { createSlice } from '@reduxjs/toolkit'
import { getProduces, getProduceById } from './produceThunk'

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
        //getProduces
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

        //getProduceById
        [getProduceById.pending]: (state) => {
            state.loading = true
        },
        [getProduceById.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.produce = payload
        },
        [getProduceById.rejected]: (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
        },
    }
})

export const selectProduces = (state) => state.produce

export const { setProduces } = produceSlice.actions

export default produceSlice.reducer