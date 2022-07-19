import { Routes, Route } from 'react-router-dom';
import Input from './components/Input';
import Resource from './components/Resource';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Input />
      <Routes>
        <Route exact path="/" element={null}/>
        <Route path="/:category/:id" element={<Resource />}/>
        <Route path="/error" element={<Error />}/>
      </Routes>
    </>
  )
}
export default App;
