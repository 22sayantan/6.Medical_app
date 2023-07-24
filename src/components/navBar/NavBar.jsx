import { useEffect } from 'react'
import './navbar.css'

import {BsFillCartFill} from 'react-icons/bs'


import {Link } from 'react-router-dom';

function NavBar() {

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/categories">categories</Link></li>
                    <li><Link to="/cart"><BsFillCartFill className='cart-icon'/></Link></li>
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
