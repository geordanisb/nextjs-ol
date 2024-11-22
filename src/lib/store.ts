import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/lib/features/counter/counterSlice";
import { mapSlice } from "@/lib/features/map/mapSlice";

export const makeStore = ()=>{
    return configureStore({reducer:{
        counter:counterSlice.reducer,
        map:mapSlice.reducer
    }});
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;