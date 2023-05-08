import "@/styles/globals.css";
import { Rajdhani } from "@next/font/google";
import Link from "next/link";

const raj = Rajdhani({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-raj",
});

export default function App({ Component, pageProps }) {
	return (
        <>
		<main className={raj.className}>
			<nav className="flex flex-around my-2">
				<div className="">
                    <Link href="/">
					<strong className="text-4xl tracking-widest ml-5 px-2 bg-gray-800">
						{" "}
						point.break {" "}
					</strong>
					<h3 className="text-sm ml-6 pt-1">
						Software Engineering & Development
					</h3>
                    </Link>
				</div>
				<div className="w-full flex flex-row justify-around m-auto text-xl">
                <Link href="/" className="nav-btn">Home</Link>
                    <span> | </span>
					<Link href="/about" className="nav-btn">About</Link>
                    <span> | </span>
					<Link href="/projects" className="nav-btn">Projects</Link>
                    <span> | </span>
                    <Link href="/services" className="nav-btn">Services</Link>
                    <span> | </span>
                    <Link href="/contact" className="mr-3 nav-btn">Contact</Link>
				</div>
			</nav>
			<hr></hr>
			<Component {...pageProps} />
		</main>
        </>
	);
}
