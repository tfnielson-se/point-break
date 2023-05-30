import Link from "next/link";
import { Cutive_Mono } from "@next/font/google";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const Navbar = () => {
	return (
		<nav className="hidden lg:flex flex-around my-2">
			<div className="">
				<Link href="/">
					<strong className="text-4xl tracking-wide m-5 px-2 second-color font-fifth-color">
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
	);
};

export default Navbar;
