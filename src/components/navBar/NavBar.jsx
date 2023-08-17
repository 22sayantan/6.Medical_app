import { useState, useEffect } from 'react'
import './navbar.css'

import {BsFillCartFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'


import {Link } from 'react-router-dom';

function NavBar() {
    const [activeNavItem, setActiveNavItem] = useState('home');

    const handleNavItemClick = (itemName) => {
        setActiveNavItem(itemName);
      };

    useEffect(() => {
        var hamburger = document.querySelector('#hamburger');
        const vertical_menu = document.querySelector('.vertical-menu');

        const handleClick = () => {
            {
                hamburger.classList.toggle('fa-xmark');
                hamburger.style.marginRight = '10px';
                hamburger.style.fontSize = '24px';
                hamburger.style.padding = '5px';
        
                vertical_menu.classList.toggle('vertical');
        
                if(hamburger.className.split(' ').includes('fa-xmark')){
                    console.log('opened');
                }else{
                    console.log('closed');
                }
            }
        };
    
        const button = document.querySelector('#hamburger');
        button.addEventListener('click', handleClick);

        return () => {
            button.removeEventListener('click', handleClick);
          };
        }, []);

  return (
    <>
        <nav className="myNav">
            <div className="left">
                <img src="" alt="logo" />
            </div>

            <div className="center">
                <ul className="navList">
                    <li className={`nav-item ${activeNavItem === 'home' ? 'active' : ''}`}>
                        <Link to="/" onClick={() => handleNavItemClick('home')}>Home</Link>
                    </li>
                    <li className={`nav-item ${activeNavItem === 'about' ? 'active' : ''}`}>
                        <Link to="/about" onClick={() => handleNavItemClick('about')}>About</Link>
                    </li>
    
                    <li className={`nav-item ${activeNavItem === 'cart' ? 'active' : ''}`}>
                        <Link to="/cart" className='cart-icon' onClick={() => handleNavItemClick('cart')}><BsFillCartFill className='cart-icon'/></Link>
                    </li>
                    <li className={`nav-item ${activeNavItem === 'signin' ? 'active' : ''}`}>
                        <Link to="/signin" onClick={() => handleNavItemClick('signin')}><CgProfile className='userProfile'/></Link>
                    </li>
                </ul>
            </div>

            <div className="right">
            <i className="hamburger fa-solid fa-bars" id="hamburger"></i>

            </div>
        </nav>

        <div className="vertical-menu">
            <ul className="vertical-list">
                <li>LogIn/SignUp</li>
                <li>Home </li>
                <li>About</li>
                <li>Wish List</li>
                <li>Favourites</li>
                <li>Dash Board</li>
                <li>LogOut</li>
            </ul>
        </div>
    </>
  )
}

export default NavBar
