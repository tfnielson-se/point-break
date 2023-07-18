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
		<nav className="hidden lg:flex flex-around  py-2 fourth-color font-first-color">
			<div className="">
				<Link href="/">
                        <img src="/logo_white.png" className="h-16 mx-5"/>
					{/* <strong className="text-4xl mx-5 second-color font-fifth-color nav-btn">
						{" "}
						p.b{" "}
					</strong> */}
				</Link>
			</div>
			<div
				className={`${font.className} w-full flex flex-row justify-around m-auto text-2xl font-first-color`}
			>
				<Link href="/" className="nav-btn">
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
