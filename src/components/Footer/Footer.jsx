import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'


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
    }
    
    return (
        <div className='footer'>
            <p>la academia de papel ™</p>
            <div className='social'>
            <img src={instagram} onClick={handleClick} name='ig' alt='instagram' />
            <img src={facebook} onClick={handleClick} name='fb' alt='facebook' />
            <img src={twitter} onClick={handleClick} name='tw' alt='twitter' />
            </div>
        </div>
    )
}
