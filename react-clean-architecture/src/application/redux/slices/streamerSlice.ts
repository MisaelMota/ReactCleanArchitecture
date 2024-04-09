import {createSlice} from "@reduxjs/toolkit"
import { fetchStreamers } from "../../../infraestructure/api/Service/StreamerController/Streamer";
import { Streamers } from "../../../domain/entities/Streamer";

//const initialState: Streamers[] = [];
const streamers: Streamers[] = [];

// Slice de Redux
export const streamerSlice = createSlice({
    name: 'streamerSlice',
    initialState:{
      streamers,
      status:'idle',
      error: null
    },
    reducers: {
      //  setStreamers: (state, action: PayloadAction<Streamers[]>) => {
      //    return action.payload;
      //  }
    },
    extraReducers: (builder) => {
       builder
         .addCase(fetchStreamers.pending, (state) => {
           // Puedes manejar el estado de carga aquí si lo necesitas
           state.status="loading"
           console.log("cargando")
         })
         .addCase(fetchStreamers.fulfilled, (state, action) => {
           // Actualiza el estado con los datos recibidos
           state.status = 'succeeded';
           state.streamers= action.payload;   
         })
         .addCase(fetchStreamers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
         });
    },
   });

//export const { setStreamers } = streamerSlice.actions;
export default streamerSlice.reducer;