import React from 'react'
import './Footer.css'
import { asset } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src="./logo.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil aliquid adipisci similique. Aut cum maiores porro repellat ipsam enim? Quam, rem vitae? Nulla architecto excepturi sequi perferendis quaerat!</p>
                <div className="footer-social-icons">
                    <img src={asset.facebook_icon} alt="" />
                    <img src={asset.twitter_icon} alt="" />
                    <img src={asset.linkedin_icon} alt="" />
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
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>8519950530</li>
                    <li>contact@dryfruit.com</li>
                  </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2025 © MJ-DryFruits.com - All Right Reserved.
        </p>
        
    </div>
  )
}

export default Footer
