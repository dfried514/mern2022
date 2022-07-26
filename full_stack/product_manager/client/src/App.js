import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

const App = () => {
  const [productsUpdated, setProductsUpdated] = useState(false);

  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Main 
          productsUpdated={productsUpdated} 
          setProductsUpdated={setProductsUpdated}
        />} path="/products" />
        <Route element={<Details
          setProductsUpdated={setProductsUpdated}
        />} path="/products/:id" />
        <Route element={<Update
          setProductsUpdated={setProductsUpdated}
        />} path="/products/:id/edit" />
      </Routes>
    </>
  )
}
export default App;
