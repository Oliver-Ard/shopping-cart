import { useParams } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import CategoriesNavBar from "../../components/CategoriesNavBar/CategoriesNavBar";
import CardsGrid from "../../components/CardsGrid/CardsGrid";

function Shop() {
	const { category } = useParams();

	const validCategories = [
		"men-clothes",
		"women-clothes",
		"jewelery",
		"electronics",
	];

	if (category && !validCategories.includes(category)) {
		return <ErrorPage path="/shop" locationName="Shop" />;
	}

	return (
		<>
			<CategoriesNavBar />
			<CardsGrid category={category} />
		</>
	);
}
export default Shop;
