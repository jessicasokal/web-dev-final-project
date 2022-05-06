import React from "react";
import { Link, useLocation } from 'react-router-dom';


const NavigationSidebar = () => {
    const {pathname} = useLocation();

    return(
        <div className="rounded list-group list-group-horizontal" style={{ width: "25%", paddingTop: 20}}>
            <Link to="/"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Home</span>
            </Link>
            <Link to="/search"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/search' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Search</span>
            </Link>
            <Link to="/upcoming"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/upcoming' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Upcoming</span>
            </Link>
            <Link to="/login"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/login' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Login</span>
            </Link>
            <Link to="/register"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/register' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Register</span>
            </Link>
            <Link to="/profile"
                  className={`d-flex list-group-item list-group-item-action justify-content-center ${pathname === '/profile' ? 'active' : ''}`}>
                <span className="d-none d-xl-block">Profile</span>
            </Link>
            <Link to="/adminuse"
                  className={`d-flex list-group-item list-group-item-action justify-content-center`}>
                <span className="d-none d-xl-block">Admin</span>
            </Link>
        </div>
    );
}

export default NavigationSidebar;

