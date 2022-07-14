import React from 'react';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import { Wrapper } from './contexts/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  )
}
export default App;
