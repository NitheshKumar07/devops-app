import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Signin from './components/Signin';
import AuthProvider from './components/AuthProvider';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signin />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
