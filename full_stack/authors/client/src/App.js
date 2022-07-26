import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

const App = () => {
  const [authorsUpdated, setAuthorsUpdated] = useState(false);

  return (
    <>
      <Routes>
        <Route element={<Main 
          authorsUpdated={authorsUpdated} 
          setAuthorsUpdated={setAuthorsUpdated}
        />} path="/" />
        <Route element={<New
          setAuthorsUpdated={setAuthorsUpdated}
        />} path="/new" />
        <Route element={<Update
          setAuthorsUpdated={setAuthorsUpdated}
        />} path="/edit/:id" />
      </Routes>
    </>
  )
}
export default App;
