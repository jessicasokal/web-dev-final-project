import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/home-page';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
