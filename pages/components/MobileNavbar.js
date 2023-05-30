"use clients";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
	const [hideMenu, setHideMenu] = useState(true);
	const openMenu = () => {
		setHideMenu((hideMenu) => !hideMenu);
	};
    const closeMenu = () => {
		setHideMenu((hideMenu) => !hideMenu);
	};
	return (
		<nav className="flex flex-col flex-around lg:hidden my-2 font-second-color">
			<div className="flex flex-row justify-between p-1">
				<Link href="/">
					<strong className="text-4xl tracking-wide mx-10 second-color font-fifth-color px-2">
						{" "}
						p.b{" "}
					</strong>
				</Link>
				<div className="font-second-color third-color mx-10 rounded-lg">
					<button onClick={openMenu} className="text-4xl p-1">
						{" "}
						{"Menu"}{" "}
					</button>
				</div>
			</div>

			{hideMenu ? null : (
				<div className="w-full flex flex-col justify-around m-auto text-4xl">
					<Link href="/" className="nav-btn" onClick={closeMenu}>
						Home
					</Link>

					<Link href="/about" className="nav-btn" onClick={closeMenu}>
						About
					</Link>
					<Link href="/projects" className="nav-btn" onClick={closeMenu}>
						Projects
					</Link>
					<Link href="/services" className="nav-btn" onClick={closeMenu}>
						Services
					</Link>
					<Link href="/contact" className="lg:mr-3 nav-btn" onClick={closeMenu}>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default MobileNavbar;
