import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='back_arrow_icon' onClick={handleClick}/>
      <iframe width='90%' height='90%' 
      src='https://www.youtube.com/embed/K4g0icRflu4'
      title='' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>11/08/2024</p>
        <p>Una historia de amor de fititos ❤</p>
        <p>Happy Birthday my love🎁🎈</p>
      </div>
    </div>
  )
}

export default Player
