import App from "./App";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/CartPage/Cart";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage path="/" locationName="Home" />,
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
