import React from 'react'
import "./Footer.css"
import { assets } from "../../assets/frontend_assets/assets"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, harum distinctio omnis totam ipsam quisquam quia! Quod inventore autem fugit, adipisci doloribus facere esse vel soluta dolore debitis ipsum necessitatibus!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Privacy-policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7240453567</li>
            <li>dilshan72404@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© Copyright 2024 Tomato.com - All Right Reserved to <Link to={"https://dilshan-woad.vercel.app/"}>dilshan.d3</Link></p>
    </div>
  )
}

export default Footer