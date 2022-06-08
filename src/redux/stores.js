import { configureStore } from '@reduxjs/toolkit'
import produceReducer from './produceSlice'

export default configureStore({
    reducer: {
        produce: produceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})