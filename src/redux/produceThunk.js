import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = 'https://fakestoreapi.com'
const GET_PRODUCES_API = BASE_URL + "/products/"


const getProduces = createAsyncThunk(
    'produce/getProduces',

    async (_, thunkApi) => {
        try {
            const res = await axios.get(GET_PRODUCES_API)
            return res.data
        }
        catch (err) {
            return thunkApi.rejectWithValue(err.response.data)
        }
    }

)

export { getProduces }