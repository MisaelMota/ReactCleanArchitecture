
import axios,{AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit"
import { Streamers } from "../../../../domain/entities/Streamer";
const apiUrl= import.meta.env.VITE_BASE_URL;
const endpoint = import.meta.env.VITE_STREAMER_ENDPOINT

// export async function fetchStreamers():Promise<Streamers[]>{
//    console.log(apiUrl)
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
// }

export async function AxiosfetchStreamers():Promise<Streamers>{
    try {
      const response: AxiosResponse = await axios.get(`${apiUrl}${endpoint}`);
      const responseData: Streamers = await response.data;
      return responseData //devuelve un arreglo por eso se envuelve entre corchetes;
  
    } catch (error) {
      console.log(error)
      return Promise.reject(error); // se debe devolver un catch como promesa para evitar el error de de "undefined error"
    }
  }

export const fetchStreamers = createAsyncThunk('streamers/fetchStreamers', async () => {
  console.log("nitido")
  const response = await axios.get(`${apiUrl}${endpoint}`)
  return response.data
});