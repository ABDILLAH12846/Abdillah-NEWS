import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saved : []
}


const saveSlice = createSlice({
    name: 'saved',
    initialState,
    reducers:{
        addSaved : (state,action)=>{
            state.saved.push(action.payload)
            console.log(action.payload);
        },
        deleteSaved : (state,action)=>{
            const index = state.saved.findIndex((val)=>val.url === action.payload)
            state.saved.splice(index,1)
            console.log(action.payload);
        }
    }
})

export const{addSaved,deleteSaved} = saveSlice.actions

export default saveSlice.reducer