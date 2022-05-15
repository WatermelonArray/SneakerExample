// Import libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import { Navbar, cartCallback } from "./components/navbar"

// Import pages
import Home from "./pages/home";
import Collections from "./pages/collections";
import ItemView from "./pages/itemView"

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="collections" element={<Collections />} />
					<Route path="itemView" element={<ItemView callback={cartCallback} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
