import { NavLink } from "react-router-dom";

import { StyledCategoriesNavBar } from "./CategoriesNavBar.styled";

function CategoriesNavBar() {
	const categories = [
		{ id: 0, path: "/shop", name: "All Products" },
		{ id: 1, path: "/shop/men-clothes", name: "Men Clothes" },
		{ id: 2, path: "/shop/women-clothes", name: "Women Clothes" },
		{ id: 3, path: "/shop/jewelery", name: "Jewelry" },
		{ id: 4, path: "/shop/electronics", name: "Electronics" },
	];

	return (
		<StyledCategoriesNavBar>
			<ul>
				{categories.map((categorie) => (
					<li key={categorie.id}>
						<NavLink to={categorie.path} end>
							{categorie.name}
						</NavLink>
					</li>
				))}
			</ul>
		</StyledCategoriesNavBar>
	);
}
export default CategoriesNavBar;
