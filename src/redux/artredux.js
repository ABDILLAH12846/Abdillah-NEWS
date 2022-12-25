import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const USER_URL = 'https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=9e5f9785232c458cbd9016f5816d05a8'
const initialState = {
    entities: [],
    loading: false,
    error: ''
}

export const fetchUs = createAsyncThunk('article/fetchUs', async (hay) => {
    const response = await axios.get(hay)
    return response.data.articles
})

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        clearing: (state) => {
            state.entities = []
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUs.fulfilled, (state, action) => {
            state.entities = []
            state.entities.push(...action.payload)
            state.loading = false
            console.log(action.payload);

        })
        .addCase(fetchUs.pending, (state)=>{
            return{...state, loading : true}
        })
        .addCase(fetchUs.rejected, (state,action)=>{
            return{...state,loading:false,error:action.error.message}
        })
    }
})

export const { clearing } = articleSlice.actions

export default articleSlice.reducer