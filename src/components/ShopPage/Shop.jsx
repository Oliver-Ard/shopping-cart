import { Link, useParams } from "react-router-dom";
import Men from "./Categories/Men";
import Women from "./Categories/Women";

import useFetch from "../../hooks/useFetch";

function Shop() {
	const { category } = useParams();
	const { products, error, isLoading } = useFetch(
		"https://fakestoreapi.com/products"
	);

	return (
		<>
			<h1>Shop Page</h1>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			{!category &&
				!error &&
				products.map((product) => <p key={product.id}>{product.title}</p>)}

			{category === "men" && <Men />}
			{category === "women" && <Women />}

			<br />
			<Link to="/shop/men">Men Clothes</Link>
			<br />
			<Link to="/shop/women">Women Clothes</Link>
			<br />
			<Link to="/">Home</Link>
		</>
	);
}
export default Shop;
