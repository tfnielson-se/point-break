"use clients";
import Link from "next/link";
import { useState } from "react";
import { Cutive_Mono } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const MobileNavbar = () => {
	const [hideMenu, setHideMenu] = useState(true);
	const openMenu = () => {
		setHideMenu((hideMenu) => !hideMenu);
	};
	const closeMenu = () => {
		setHideMenu((hideMenu) => !hideMenu);
	};
	return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
        >
		<nav className="flex flex-col flex-around lg:hidden my-2 font-second-color">
			<div className="flex flex-row justify-between">
				<p className="text-6xl mx-5 second-color font-fifth-color m-auto p-2 nav-btn">
					<Link href="/"> p.b </Link>
				</p>
				<div className={`font-fifth-color mx-5 ${font.className}`}>
					<button
						onClick={openMenu}
						className={`flex flex-col text-5xl ${
							hideMenu ? "second-color font-second-color" : "third-color font-fifth-color"
						} p-1.5 border-4 border-purple-900`}
					>
						{" "}
						{"💾"}
						{""}
						<span className="text-sm m-auto third-color w-full">
							MENU
						</span>
					</button>
				</div>
			</div>

			{hideMenu ? null : (
				<div
					className={`w-full flex flex-col justify-around fifth-color p-2 m-auto text-4xl ${font.className}`}
				>
					<Link href="/" className="nav-btn" onClick={closeMenu}>
						<p>Home</p>
					</Link>

					<Link href="/about" className="nav-btn" onClick={closeMenu}>
						About
					</Link>
					<Link
						href="/projects"
						className="nav-btn"
						onClick={closeMenu}
					>
						Projects
					</Link>
					<Link
						href="/services"
						className="nav-btn"
						onClick={closeMenu}
					>
						Services
					</Link>
					<Link
						href="/contact"
						className="lg:mr-3 nav-btn"
						onClick={closeMenu}
					>
						Contact
					</Link>
				</div>
			)}
		</nav>
        </motion.div>
			</AnimatePresence>
	);
};

export default MobileNavbar;
