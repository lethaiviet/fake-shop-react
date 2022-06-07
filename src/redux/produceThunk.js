import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = 'https://fakestoreapi.com'
const GET_PRODUCES_API = BASE_URL + "/products/"


const getProduces = createAsyncThunk(
    'produce/getProduces',
    async () => {
        const res = await axios.get(GET_PRODUCES_API)
        return res.data
    }
)

export { getProduces }