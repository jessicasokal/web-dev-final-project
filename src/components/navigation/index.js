import React, {useEffect, useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import {StyleSheet} from "react-native";
import isLoggedIn from "../../global/variables";
import axios from "axios";

const api = axios.create({
    withCredentials: true
});

const NavigationSidebar = () => {
    const {pathname} = useLocation();

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            // no user logged in
        }
    }

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
            <Link to="/login"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/login' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Signin</span>
            </Link>
            <Link to="/register"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/register' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Signup</span>
            </Link>
            <Link to="/profile"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/profile' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Profile</span>
            </Link>
            {console.log(currentUser)}
            { currentUser.isAdmin && isLoggedIn.LOGGED_IN && <Link to="/adminonly"
                  className={`d-flex list-group-item list-group-item-action ${pathname === '/adminonly' ? 'active' : ''}`}>
                <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
                <span className="d-none d-xl-block">Admin</span>
            </Link> }
        </div>
    );
}

export default NavigationSidebar;

