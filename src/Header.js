import React from "react";
import "./Header.css";
import {  FaSearch } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header(){
  const [ {basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if(user){
        auth.signOut(); 
      }
  }
    return(
    <div className='header'>
        <Link to="/">
        <img alt="logo"
         className="header__logo" src="/img1.jpg" />
        
        </Link>
         

        <div className="header__search">
            <input
            className="header__searchInput" type="text" />
           {/* <SearchIcon className="header__searchIcon" /> */}
           <FaSearch className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <Link to={!user && '/login'}>
            <div  onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div></Link>
            {/* <div className="header__option">
                <span 
                className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div> */}
            <div className="header__option">
                <span className="header__optionLineOne"></span>
                <span className="header__optionLineTwo"></span>
                
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
            {/* <ShoppingBasketIcon />*/}
            <MdShoppingBasket className="header__basketCount"/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
       </div>
    </div>
);}export default Header
