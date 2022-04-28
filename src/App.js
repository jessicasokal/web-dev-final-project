import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './components/home';
import Signin from "./components/login-registration/signin.js";
import Signup from "./components/login-registration/signup.js";
import PrivacyPolicy from "./components/privacy-policy";
import Results from "./components/search-results/results";
import Profile from "./components/profile";
import EditProfile from "./components/profile/edit-profile";
import MyProfile from "./components/profile/my-profile";
import SecureRoute from "./services/secure-route";
import Search from './components/search';

function App() {
  return (
      <BrowserRouter>
          <div className={'container p-5'}>
              <div>
                  <Routes>
                      <Route path={'/'}>
                          <Route path={''}
                                 element={<HomePage/>}/>
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
