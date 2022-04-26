import React from "react";
import { Link, useLocation } from 'react-router-dom';
import {StyleSheet} from "react-native";
const NavigationSidebar = () => {
    const {pathname} = useLocation();

    return(
        <div className="rounded list-group" style={{ width: "25%", paddingTop: 20 }}>
            <Link to="/"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/login' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Home</span>
            </Link>
            <Link to="/signin"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/login' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Login</span>
            </Link>
            <Link to="/profile"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/login' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Profile</span>
            </Link>
        </div>
    );
}

// const styles = StyleSheet.create({
//      login:{
//          width: 50
//     }
// })
export default NavigationSidebar;
