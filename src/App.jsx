import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CBook from './pages/CBook';
import EditBook from './pages/EditBook';
import DBook from './pages/DBook';
import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DBook/>} />
      <Route path='/books/details/:id' element={<ShowBooks/>} />
      
    </Routes>
  )
}

export default App

