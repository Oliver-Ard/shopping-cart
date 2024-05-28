import { Outlet } from "react-router-dom";

import { useState } from "react";
import Header from "./components/Header/Header";
import { Container } from "./styles/shared/Utility.styled";

function App() {
	const [cartItems, setCartItems] = useState([]);
	console.log(cartItems);

	return (
		<>
			<Header data={cartItems} />
			<main>
				<Container>
					<Outlet context={[cartItems, setCartItems]} />
				</Container>
			</main>
		</>
	);
}

export default App;
