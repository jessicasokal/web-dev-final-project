import React from "react";
import { Link, useLocation } from 'react-router-dom';
import {StyleSheet} from "react-native";
import isLoggedIn from "../../global/variables";

const NavigationSidebar = () => {
    const {pathname} = useLocation();

    return(
        <div className="rounded list-group list-group-horizontal" style={{ width: "25%", paddingTop: 20}}>
            <Link to="/"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block" >Home</span>
            </Link>
            <Link to="/search"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/search' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block" >Search</span>
            </Link>
            { isLoggedIn.LOGGED_IN && <Link to="/upcoming"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/search' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block" >Upcoming</span>
            </Link>}
            <Link to="/signin"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/signin' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Signin</span>
            </Link>
            <Link to="/signup"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/signup' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Signup</span>
            </Link>
            <Link to="/profile"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/profile' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Profile</span>
            </Link>
            { isLoggedIn.LOGGED_IN && <Link to="/adminonly"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/adminonly' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Admin Use</span>
            </Link> }
        </div>
    );
}

// const styles = StyleSheet.create({
//      login:{
//          width: 50
//     }
// })
export default NavigationSidebar;

