import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero-section">
        <img src={hero_banner} alt='hero_banner' className='hero-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt='hero_title' className='title-caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young
          man living in modern Istanbul embarks on a quest to save the
          city from an inmortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt='play_icon' />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt='info_icon' />More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
