import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import Error from "../ErrorPage/Error";

function Shop() {
	const { category } = useParams();
	const { products, error, isLoading } = useFetch(
		"https://fakestoreapi.com/products"
	);

	const validCategories = [
		"men's-clothing",
		"women's-clothing",
		"jewelery",
		"electronics",
	];

	if (category && !validCategories.includes(category)) {
		return <Error />;
	}

	return (
		<>
			<h1>Shop Page</h1>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			{
				// eslint-disable-next-line
				category === "men's-clothing" ? (
					<p>Men Clothes</p>
				) : category === "women's-clothing" ? (
					<p>Women Clothes</p>
				) : (
					products.map((product) => <p key={product.id}>{product.title}</p>)
				)
			}

			<br />
			<Link to="/shop/men's-clothing">Men Clothes</Link>
			<br />
			<Link to="/shop/women's-clothing">Women Clothes</Link>
			<br />
			<Link to="/">Home</Link>
		</>
	);
}
export default Shop;
