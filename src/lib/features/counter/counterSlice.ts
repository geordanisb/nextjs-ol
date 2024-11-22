import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState{
    value:number;
    status:'idle'|'loading'|'failed'
}
const initialState:CounterState = {
    value:0,
    status:'idle'
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: state=>{state.value+=1;},
        decrement: state=>{state.value-=1;},
        incrementByPayload: (state,action:PayloadAction<number>)=>{
            state.value+=action.payload;
        }
    }
});