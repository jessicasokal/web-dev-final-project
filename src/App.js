import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home';
import Search from './components/search';
import Signin from "./components/login-registration/signin.js";
import Signup from "./components/login-registration/signup.js";
import PrivacyPolicy from "./components/privacy-policy";
import Results from "./components/search-results/results";
import Profile from "./components/profile";
import EditProfile from "./components/profile/edit-profile";
import MyProfile from "./components/profile/my-profile";
import Navigation from "./components/navigation"
import "./App.css"
function App() {
  return (
      <BrowserRouter>
          <div className={'container p-5'}>
              <Navigation></Navigation>
              <div>
                  <Routes>
                      <Route path={'/'}>
                          <Route path={''}
                                 element={<Home/>}/>
                          <Route path={'search'}
                                 element={<Search/>}/>
                          <Route path={'signin'}
                                 element={<Signin/>}/>
                          <Route path={'signup'}
                                 element={<Signup/>}/>
                          <Route path={'results'}
                                 element={<Results/>}/>
                          <Route path={'privacy-policy'}
                                 element={<PrivacyPolicy/>}/>
                          <Route path={'profiles/'}>
                              <Route path={'edit-profile'}
                                     element={<EditProfile/>}/>
                              <Route path={'profile'}
                                     element={
                                             <Profile/>
                                     }/>
                          </Route>
                      </Route>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
