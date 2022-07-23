import { Link } from "react-router-dom";

const Home = () => {
    return (
        <h1>
            <Link to={'/products/'}>Go To Product List</Link>
        </h1>
    )
}
export default Home;
