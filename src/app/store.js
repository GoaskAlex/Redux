import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feats/counterSlice'


export default configureStore({
reducer:{
    counter:counterReducer
}

})