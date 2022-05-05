// Import libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/navbar"

// Import pages
import Home from "./pages/home";
import Collections from "./pages/collections";

function Test() {
	return (
		<>
			<div style="height: 100px;">

			</div>
		</>
	)
}

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="collections" element={<Collections />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
