import {configureStore} from "@reduxjs/toolkit"
import { colorSlice } from "./ColorChange"
import { TodoSlice } from "./Todos"


export const store = configureStore({
    reducer:{
        'color':colorSlice.reducer,
        [TodoSlice.name]:TodoSlice.reducer
    }
}) 