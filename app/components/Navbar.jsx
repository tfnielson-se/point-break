"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Inconsolata } from "next/font/google";
import { Share_Tech_Mono } from "next/font/google";

const font = Inconsolata({
	subsets: ["latin"],
	weight: "400",
});

const share_tech = Share_Tech_Mono({
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
                className="first-color"
			>
				<nav className={`hidden lg:flex justify-between py-3  max-w-7xl m-auto`}>
					<div className="w-1/3 flex justify-center">
						<Link href="/">
							<img src="/logo.png" className="h-16 mx-5" />
						</Link>
						<div className="text-center my-auto">
							<p
								className={`${share_tech.className} text-2xl`}
							>
								{"Point.Break"}
							</p>

							{/* <p className={`${share_tech.className}`}>
								Simple.Creative.Solutions
							</p> */}
						</div>
					</div>
					<div
						className={` ${font.className} w-1/2 flex flex-row justify-around m-auto text-lg font-fist-color`}
					>
						<Link href="/" className="nav-btn px-2">
							Home
						</Link>
						<Link href="/about" className="nav-btn-about px-2">
							About
						</Link>
						<Link href="/solutions" className="nav-btn-solutions px-2">
							Solutions
						</Link>
						<Link href="/ourwork" className="nav-btn-ourwork px-2">
							Our Work
						</Link>
						<Link href="/contact" className="mr-3 nav-btn-contact px-2">
							Contact
						</Link>
					</div>
				</nav>
			</motion.div>
		</AnimatePresence>
	);
};

export default Navbar;
