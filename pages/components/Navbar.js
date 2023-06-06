import Link from "next/link";
import { Cutive_Mono } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const Navbar = () => {
	return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
        >
		<nav className="hidden lg:flex flex-around my-2">
			<div className="">
				<Link href="/">
					<strong className="text-4xl mx-5 second-color font-fifth-color nav-btn">
						{" "}
						p.b{" "}
					</strong>
					{/* <h3 className="text-sm ml-6 pt-1">
						Software Engineering & Development
					</h3> */}
				</Link>
			</div>
			<div
				className={`${font.className} w-full flex flex-row justify-around m-auto text-2xl font-second-color`}
			>
				<Link href="/" className="nav-btn px-1">
					Home
				</Link>
				<span> | </span>
				<Link href="/about" className="nav-btn">
					About
				</Link>
				<span> | </span>
				<Link href="/projects" className="nav-btn">
					Projects
				</Link>
				<span> | </span>
				<Link href="/services" className="nav-btn">
					Services
				</Link>
				<span> | </span>
				<Link href="/contact" className="mr-3 nav-btn">
					Contact
				</Link>
			</div>
		</nav>
        </motion.div>
			</AnimatePresence>
	);
};

export default Navbar;
