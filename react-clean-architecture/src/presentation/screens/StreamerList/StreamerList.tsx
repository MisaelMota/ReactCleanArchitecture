"use client";
import React, { useEffect, useState } from 'react';
import { Streamers } from '../../../domain/entities/Streamer';
import { fetchStreamers } from '../../../infraestructure/api/StreamerController/fetchStreamer';

export type StreamerListProps = {
	// types...
}

const StreamerList: React.FC<StreamerListProps>  = ({}) => {
	const [streamer,setStreamer]= useState<Streamers[]>([]);
	useEffect(()=>{
		fetchStreamers().then((data)=>setStreamer(data))
	},[])

	console.log(streamer)

	return (
		<div>
 			StreamerList works!
 		</div>
	);
};

export default StreamerList;
