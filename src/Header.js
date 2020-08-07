import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketRounded'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket,user}, dispatch] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    };

    return (
        <nav className='header'>
            {/* logo  */}
            <Link to="/">
                <img className="header_logo" 
                src="log.png"
                alt="Logo"/>
            </Link>
            
            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
                
           
            {/* 3 links */}
            <div className="header_nav">
                {/* 1 link */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className = "header_option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"} </span>
                    </div>
                </Link>
                {/* 2 link */}
                <Link to="/" className="header_link">
                    <div className = "header_option">
                        <span className="header_optionLineOne">Return</span>
                        <span className="header_optionLineTwo">& Order</span>
                    </div>
                </Link>
                {/* 3 link */}
                <Link to="/" className="header_link">
                    <div className = "header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link >
            </div>            
            {/* basket icon */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

                </div>
            
            </Link>

        </nav>
    )
}

export default Header
