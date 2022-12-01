import React from "react";
import LoginPage from "./components/login";
import MainPage from "./components/main";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// https://dummyjson.com/docs/auth

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
