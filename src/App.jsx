// [<0>]

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<section className={`flex flex-col`}>
			<div className="flex-none">
				<Navbar />
				<MobileNavbar />
				<hr className=""></hr>
			</div>
			<main className={`min-h-screen grow`}>
				<Routes>
					<Route exact path="/" element={<Home />}>
						<Route exact path="about" element={<About />} />
						<Route exact path="projects" element={<Projects />} />
						<Route exact path="services" element={<Services />} />
						<Route exact path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</main>
			<div className="flex-none">
				<Footer />
			</div>
		</section>
	);
}

export default App;
