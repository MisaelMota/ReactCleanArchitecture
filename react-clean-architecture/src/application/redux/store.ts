import streamerSlice from "./slices/streamerSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store= configureStore({
    reducer:{
        streamers:streamerSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
