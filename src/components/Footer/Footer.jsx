import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt='facebook_icon' />
        <img src={instagram_icon} alt='instagram_icon' />
        <img src={twitter_icon} alt='twitter_icon' />
        <img src={youtube_icon} alt='youtube_icon' />
      </div>
      <ul>
        <li>Audio descriptivo</li>
        <li>Relaciones con inversionistas</li>
        <li>Avisos legales</li>
        <li>Centro de ayuda</li>
        <li>Empleo</li>
        <li>Preferencias de cookies</li>
        <li>Tarjetas de regalo</li>
        <li>Términos de uso</li>
        <li>Información corporativa</li>
        <li>Prensa</li>
        <li>Privacidad</li>
        <li>Contáctanos</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
