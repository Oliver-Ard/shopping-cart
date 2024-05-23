import { useState, useEffect } from "react";

function useFetch(url) {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("No products found!");
				}

				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	return { products, error, isLoading };
}
export default useFetch;
