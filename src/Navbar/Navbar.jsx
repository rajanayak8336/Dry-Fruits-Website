import { BrowserRouter, Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <div>
            <div className="navbar">
                <Link to="/"><img src="./logo.png" alt="" className='logo' /></Link>
                <ul className='navbar-menu'>
                    
                        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</Link>
                        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} >Menu</a>
                        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >Mobile-app</a>
                        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""} >Contact</a>
                    
                    
                </ul>
                <div className="navbar-right">
                    <img src="./search_icon.png" alt="" />
                    <div className="navbar-search-icon">
                        <Link to="/cart"><img src="./basket_icon.png" alt="" /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)} >Sign In</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
