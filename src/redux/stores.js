import { configureStore } from '@reduxjs/toolkit'
import produceReducer from './produceSlice'

export default configureStore({
    reducer: {
        produce: produceReducer,
        middleware: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    }
})