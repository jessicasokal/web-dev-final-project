import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home';
import Login from "./components/login-registration/login";
import Register from "./components/login-registration/register";
import PrivacyPolicy from "./components/privacy-policy";
import Results from "./components/search-results/results";
import ProfilePage from "./components/profile";
import EditProfile from "./components/profile/edit-profile";

function App() {
  return (
      <BrowserRouter>
          <div className={'container p-5'}>
              <div>
                  <Routes>
                      <Route path={'/'}>
                          <Route path={''}
                                 element={<Home/>}/>
                          <Route path={'login'}
                                 element={<Login/>}/>
                          <Route path={'register'}
                                 element={<Register/>}/>
                          <Route path={'results'}
                                 element={<Results/>}/>
                          <Route path={'privacy-policy'}
                                 element={<PrivacyPolicy/>}/>
                          <Route path={'profile/'}
                                 element={<ProfilePage/>}>
                              <Route path={'edit-profile'}
                                     element={EditProfile}/>
                          </Route>
                      </Route>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
