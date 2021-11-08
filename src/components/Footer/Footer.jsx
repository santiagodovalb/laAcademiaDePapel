import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube2.png'

export default function Footer() {

    const handleClick = (e) => {
        if(e.target.name === 'ig') {
            window.open('https://www.instagram.com/laacademiadepapel/', '_blank')
        }

        if(e.target.name === 'fb') {
            window.open('https://www.facebook.com/academiadepapel', '_blank')
        }

        if(e.target.name === 'tw') {
            window.open('https://twitter.com/academiadpapel', '_blank')
        }

        if(e.target.name === 'yt') {
            window.open('https://www.youtube.com/channel/UCH08pslY37XMeJU3_fSyN1A', '_blank')
        }
    }
    
    return (
        <div className='footer'>
            <div id='footerText'>
                <p>la academia de papel™</p>
                <a href='https://www.linkedin.com/in/santiagodovalb/' rel="noreferrer" target='_blank' id='webBy'>
                    <p id='webBy'>web: Santiago Doval</p>
                </a>
            </div>
            <div className='social'>
            <img src={youtube} onClick={handleClick} name='yt' alt='youtube' />
            <img src={instagram} onClick={handleClick} name='ig' alt='instagram' />
            <img src={facebook} onClick={handleClick} name='fb' alt='facebook' />
            <img src={twitter} onClick={handleClick} name='tw' alt='twitter' />
            </div>
        </div>
    )
}
