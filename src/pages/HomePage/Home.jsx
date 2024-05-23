import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<h1>Home Page</h1>
			<Link to="/shop">Products</Link>
			<br />
			<Link to="/cart">Cart</Link>
		</>
	);
}
export default Home;
