import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";

function Header() {
    function changeWidth() {
        document.getElementById("bar-width").style.color = "red";
      }

    return(
        <div className="header-pro">
        <div className='header'>
        <Link to='/home'><img className="header-icon" src='https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png' 
        alt=""/></Link>
        
        <div className="header-center">
            <input type="text"/>
            <SearchIcon className="search-icon"/>
            <ShoppingBasketIcon className="card-icon"/>
            <h6>Card ($)</h6>
            <PersonIcon className="person-icon" />
            <Link to='/login'><button in="bar-width" type="button" class="btn btn-light" onClick={() => { console.log('worked'); }}><h5>Sign-in</h5></button>
           </Link> 
           </div>
        </div>
    </div>
    );
}
export default Header;