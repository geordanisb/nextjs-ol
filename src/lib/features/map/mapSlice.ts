import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const zoom = 12;
const center = [-4283202.755223371,-1456844.4667397817];

interface MapState{
    zoom:number,
    center:number[],
}

const initialState:MapState = {
    zoom,
    center
}
export const mapSlice = createSlice({
    name:'map',
    initialState,
    reducers:{
        setZoom:(state,action:PayloadAction<number>)=>{debugger;
            state.zoom=action.payload;
        }
    }
});