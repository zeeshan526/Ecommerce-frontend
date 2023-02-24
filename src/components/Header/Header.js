import React from 'react'
import '../Header/Header.css'
import logo from '../../images/logo.png'
function Header() {
  return (
    <div className='head-container'>
        <div className='head-wraper'>
        <div className='head-wrapper-child'>
        <div className='logo'><img src={logo} alt='logo'/></div>
            <div className='head-list'> 
                <ul >
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </div>
        </div>
            
            <div className='cart'><a href='#'>Cart</a></div>

        </div>
    </div>
  )
}

export default Header