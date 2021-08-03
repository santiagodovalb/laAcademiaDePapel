import React, { useState, useEffect } from 'react'
import './Home.css'
import latestVid from '../../assets/latestVid.png'
import axios from 'axios'

export default function Home() {

    const [video, setVideo] = useState('')

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCH08pslY37XMeJU3_fSyN1A&maxResults=1&order=date&type=video&key=AIzaSyDrVniKxaskBE4AwBcoqscMGtDIf3LpyQQ')
        .then(res => res.data)
        .then(video => setVideo(video.items[0].id.videoId))
        .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        window.open(`https://youtu.be/${video}`, '_blank')
    }

    return (
        <div className='home'>
            {console.log('VIDEO', video)}
            <h1>¡Bienvenidxs al portal de La Academia de Papel!</h1>
            <img src={latestVid} alt='latestVid' onClick={handleClick} />
        </div>
    )
}
