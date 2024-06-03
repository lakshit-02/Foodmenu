import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import whatsapp from '../../assets/whatsapp.png'
import insta from '../../assets/insta.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img  className='logo' src={logo} alt=''/>
               <p>Lorem is simply dummy text of the industry</p>
            
            <div className="footer-social-icons">
                <img src={whatsapp} alt=''/>
                <img src={insta} alt=''/>
            </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
                  <h2>get in touch</h2>
                  <ul>
                    <li>648651656</li>
                    <li>contact@gmail.com</li>
                  </ul>
            </div>
        </div>
         <hr/>
         <p className='footer-copyright'>Copyright 2024 tomato.com</p>
    </div>
  )
}

export default Footer;
