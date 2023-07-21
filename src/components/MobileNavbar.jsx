import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

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
				<nav className="lg:hidden">
					<div className="flex flex-row fourth-color py-2">
						<div className="w-1/3 text-6xl p-2">
							<a href="/" onClick={openMenu}>
								{" "}
								<img
									src="/logo_white.png"
									className="object-cover m-auto h-20"
								/>
							</a>
						</div>
						<div className="w-1/3 m-auto text-center">
							<p className="font-first-color md:text-3xl">
								Software Engineering
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
								className="fourth-color border-t-8"
							>
								<motion.div
									initial={{ opacity: 0, x: -15 }}
									animate={{ opacity: 1, x: -0 }}
									exit={{ opacity: 0, x: 15 }}
									transition={{
										ease: "easeInOut",
										delay: 0.5,
									}}
									className={`w-full flex flex-col justify-around font-first-color p-2 m-auto text-4xl cutive-mono`}
								>
									<Link
										to="/"
										className="nav-btn my-5"
										onClick={openMenu}
									>
										<p>Home</p>
									</Link>

									<Link
										to="/about"
										className="nav-btn my-5"
										onClick={openMenu}
									>
										About
									</Link>
									<Link
										to="/projects"
										className="nav-btn my-5"
										onClick={openMenu}
									>
										Projects
									</Link>
									<Link
										to="/services"
										className="nav-btn my-5"
										onClick={openMenu}
									>
										Services
									</Link>
									<Link
										to="/contact"
										className="nav-btn my-5"
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
