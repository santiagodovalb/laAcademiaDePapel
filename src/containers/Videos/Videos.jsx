import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import EachVideo from './EachVideo';
import './Videos.css'

// channelID = UCH08pslY37XMeJU3_fSyN1A
// uploads = UUH08pslY37XMeJU3_fSyN1A
// key: 'AIzaSyDrVniKxaskBE4AwBcoqscMGtDIf3LpyQQ'

export default function Videos() {

    const [videos, setVideos] = useState([]);
        
    const IDs = []

    const getVideos = (data, IDs = []) => {
        const dataIDs = data.items.map(item => item = item.contentDetails.videoId)
        IDs = [...IDs, ...dataIDs]
        
        if (data.nextPageToken) {
            axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&pageToken=CAUQAA&playlistId=UUH08pslY37XMeJU3_fSyN1A&key=AIzaSyDrVniKxaskBE4AwBcoqscMGtDIf3LpyQQ`)
            .then(res => res.data)
            .then(data => getVideos(data, IDs))
            .catch(err => console.log(err))
        }
        else setVideos(IDs)
    }
    

    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UUH08pslY37XMeJU3_fSyN1A&key=AIzaSyDrVniKxaskBE4AwBcoqscMGtDIf3LpyQQ')
        .then(res => res.data)
        .then(data => getVideos(data))
        .then(() => setVideos(IDs))
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <EachVideo videos={videos} />
        </div>
    )
}
