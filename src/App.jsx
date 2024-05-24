import { Outlet } from "react-router-dom";

import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<>
			<Header data={cartItems} />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
