import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/player')
  }

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero-section">
        <img src={hero_banner} alt='hero_banner' className='hero-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt='hero_title' className='title-caption-img'/>
          <p>Dos almas destinadas a encontrarse, un amor que desafia la distancia.
          Descubre la historia de Lili y Kevin y su viaje hacia un Sí, quiero. Que
          cambiará sus vidas para siempre.</p>
          <div className="hero-btns">
            <button className='btn' onClick={handleClick}><img src={play_icon} alt='play_icon' />Reproducir</button>
            <button className='btn dark-btn'><img src={info_icon} alt='info_icon' />Más información</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Series de EE.UU."}/>
        <TitleCards title={"Tu próxima historia"}/>
        <TitleCards title={"Continuar viendo"}/>
        <TitleCards title={"Lo nuevo en Netflix"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
