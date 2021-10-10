import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import user from '../../images/user.png'
const Header = () => {
    return (
        <div className="header">
            <Link to="/"className="headerContainer">
            <div className="logo" >Movie App</div>
            <div className="user-image">
            <img src={user} alt="user" />
            </div>
            </Link>
        </div>
    )
}

export default Header
