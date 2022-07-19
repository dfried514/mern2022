import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WordWithStyle from './components/WordWithStyle';
import WordOrNumber from './components/WordOrNumber';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/:word/:color/:backgroundColor" element={ <WordWithStyle /> }/>
      <Route path="/:x" element={ <WordOrNumber /> }/>
    </Routes>
  )
}
export default App;
