import App from "./App";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/CartPage/Cart";
import Error from "./pages/ErrorPage/Error";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/shop/:category",
				element: <Shop />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
];

export default routes;
