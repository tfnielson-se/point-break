import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
			>
				<nav className="hidden lg:flex flex-around py-2 fourth-color font-first-color">
					<div className="">
						<Link to="/">
							<img src="/logo_white.png" className="h-16 mx-5" />
						</Link>
					</div>
					<div
						className={`cutive-mono w-full flex flex-row justify-around m-auto text-2xl font-first-color`}
					>
						<Link to="/" className="nav-btn">
							Home
						</Link>
						<span> | </span>
						<Link to="/about" className="nav-btn">
							About
						</Link>
						<span> | </span>
						<Link to="/projects" className="nav-btn">
							Projects
						</Link>
						<span> | </span>
						<Link to="/services" className="nav-btn">
							Services
						</Link>
						<span> | </span>
						<Link to="/contact" className="mr-3 nav-btn">
							Contact
						</Link>
					</div>
				</nav>
			</motion.div>
		</AnimatePresence>
	);
};

export default Navbar;
