import React from 'react'
import './Appdownload.css'
import playstore from '../../assets/playstore.png'
import applestore from '../../assets/applestore.png'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>for better experience download <br/>tomato app</p>
        <div className="app-download-platforms">
            <img src={playstore} alt="" />
            <img src={applestore} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload;
