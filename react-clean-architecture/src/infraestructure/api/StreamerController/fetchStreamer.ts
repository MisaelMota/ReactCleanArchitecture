import { Streamers } from "../../../domain/entities/Streamer";

export async function fetchStreamers():Promise<Streamers[]>{
    const response = await fetch('http://localhost:5106/api/v1/Streamer');
    const data = await response.json();
    return data;
}