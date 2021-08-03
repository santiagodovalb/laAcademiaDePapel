import React from 'react'
import './Videos.css'

export default function EachVideo({ videos }) {
    return (
        <div>
            {videos.map (video => {
                return (
                    <div className='videoDiv'>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                )
            })}
        </div>
    )
}
