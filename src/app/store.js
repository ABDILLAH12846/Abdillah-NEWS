import { configureStore } from "@reduxjs/toolkit";
import artiReduc from '../redux/artredux.js'
import saveReduce from '../redux/saveredux.js'

export const store = configureStore({
    reducer: {
        arti: artiReduc,
        saved: saveReduce
    }
})