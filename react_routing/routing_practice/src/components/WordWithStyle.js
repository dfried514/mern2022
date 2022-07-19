import { useParams } from "react-router";
    
const Word_With_Style = () => { 
  const { word, color, backgroundColor } = useParams();
    const wordStyle = {
        color: `${color}`,
        backgroundColor: `${backgroundColor}`
    }
  return (
    <h1 style={wordStyle}>The word is: { word }</h1>
  )
}
export default Word_With_Style;
