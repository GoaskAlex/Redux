import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    //initial state value
    name:'counter',
    initialState:{value:0},
    //reducer/actions

    reducers:{
        increment:(state, action)=>{
            state.value+=action.payload
        },
        decrement:(state, action)=>{
            state.value-=action.payload
        },

        reset:(state)=>{
            state.value=0
        }

    }

})

export const{increment,decrement, reset}=counterSlice.actions

export default counterSlice.reducer

export const selectCount= (state)=>state.counter.value