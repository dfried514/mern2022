import { useParams } from "react-router";
    
const Word_OR_Number = () => { 
  const { x } = useParams();
    
  return (
    isNaN(x)
    ? (<h1>The word is: { x }</h1>)
    : (<h1>The number is: { x } </h1>) 
  );
}
export default Word_OR_Number;
