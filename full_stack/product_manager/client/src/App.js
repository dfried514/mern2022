import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Main reloaded={false}/>} path="/products" />
        <Route element={<Details/>} path="/products/:id" />
        <Route element={<Update/>} path="/products/:id/edit" />
      </Routes>
    </>
  )
}
export default App;
