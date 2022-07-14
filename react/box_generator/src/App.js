import { useState } from  'react';
import Input from "./components/Input";
import Boxes from "./components/Boxes";

const App = () => {
  const [boxDimentions, setBoxDimentions] = useState([]);

  const onAddBox = (color, width) => {
    setBoxDimentions([...boxDimentions, { color, width }]);
  }
  return (
    <>
      <Input onAddBox = { onAddBox }/>
      <Boxes boxDimentions = { boxDimentions }/>
    </>
  );
};

export default App;
