import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Register from "./components/login-registration/register.js";
import Profile from "./components/profile/profile.js";
import Login from "./components/login-registration/login.js";
import {ProfileProvider} from "./contexts/profile-context";
import SecureRoute from "./components/secure/secure-route";
import NavigationSidebar from "./components/navigation/navigation-bar";
import Home from "./components/home/home";
import GenericProfile from "./components/profile/generic-profile";

function App() {
    return (
        <ProfileProvider>
                <BrowserRouter>
                    <div className="container p-5">
                        <NavigationSidebar/>
                        <div>
                            <Routes>
                                <Route path="/">
                                    <Route path={''} element={<Home/>}
                                    />
                                    <Route path="/profile/">
                                        <Route path='' element={
                                            <SecureRoute>
                                                <Profile/>
                                            </SecureRoute>
                                        }/>
                                        <Route path=":id" element={<GenericProfile/>}/>
                                    </Route>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/register" element={<Register/>}/>
                                </Route>
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;