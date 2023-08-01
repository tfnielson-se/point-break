"use client"
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { Cutive_Mono } from "next/font/google"

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const MobileNavbar = () => {
	const [hideMenu, setHideMenu] = useState(true);
	const openMenu = () => {
		setHideMenu((hideMenu) => !hideMenu);
	};

	return (
		<AnimatePresence>
			<motion.div
				key={"navbar"}
				initial={{ opacity: 0, x: -15 }}
				animate={{ opacity: 1, x: -0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ ease: "easeInOut", delay: 0.1 }}
			>
				<nav className="lg:hidden ">
					<div className="flex flex-row first-color py-2">
						<div className="w-1/3 text-6xl p-2">
							<a href="/" onClick={openMenu}>
								{" "}
								<img
									src="/logo.png"
									className="object-cover m-auto h-20"
								/>
							</a>
						</div>
						<div className="w-1/3 m-auto text-center">
							<p className=" text-xl md:text-3xl">
								point.break
							</p>
                            <p className="text-xs md:text-xl rounded-2xl">
								software engineering
							</p>
						</div>
						<div className={" w-1/4 flex justify-center"}>
							<button
								onClick={openMenu}
								className="rounded p-1.5 text-5xl"
>
										{ hideMenu ? <GrMenu className="first-color rounded p-2 text-5xl" /> : <GrClose className="first-color rounded p-2 text-5xl"/>}
				
								{""}
							</button>
						</div>
					</div>

					{hideMenu ? null : (
						<AnimatePresence>
							<motion.div
								initial={{ opacity: 0, y: -15 }}
								animate={{ opacity: 1, y: -0 }}
								exit={{ opacity: 0, y: 15 }}
								transition={{ ease: "easeInOut", delay: 0.1 }}
								className="first-color border-y-8"
							>
								<motion.div
									initial={{ opacity: 0, x: -15 }}
									animate={{ opacity: 1, x: -0 }}
									exit={{ opacity: 0, x: 15 }}
									transition={{
										ease: "easeInOut",
										delay: 0.5,
									}}
									className={`${font.className} w-full flex flex-col justify-end p-2 m-auto text-4xl text-left`}
								>
									<Link
										href="/"
										className="my-5"
										onClick={openMenu}
									>
										Home
									</Link>

									<Link
										href="/about"
										className="my-5"
										onClick={openMenu}
									>
										About
									</Link>
									<Link
										href="/solutions"
										className="my-5"
										onClick={openMenu}
									>
										Solutions
									</Link>
									<Link
										href="/customers"
										className="my-5"
										onClick={openMenu}
									>
										Customers
									</Link>
									<Link
										href="/contact"
										className="my-5"
										onClick={openMenu}
									>
										Contact
									</Link>
								</motion.div>
							</motion.div>
						</AnimatePresence>
					)}
				</nav>
			</motion.div>
		</AnimatePresence>
	);
};

export default MobileNavbar;
