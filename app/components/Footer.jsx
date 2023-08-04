"use client";
import { Inconsolata } from "next/font/google";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const font = Inconsolata({
	subsets: ["latin"],
	weight: "400",
});

const Footer = () => {
	return (
		<section className="flex flex-wrap justify-around fourth-color font-first-color mt-3">
			<div
				className={`${font.className} flex flex-row justify-around p-3 mx-auto w-full`}
			>
				<div className="mx-auto">
					<h2 className="text-center">MENU</h2>
					<hr></hr>
					<div className="flex flex-col">
						<Link href="/" className="p-1">
							Home
						</Link>
						<Link href="/about" className="p-1">
							About
						</Link>
						<Link href="/solutions" className="p-1">
							Solutions
						</Link>
						<Link href="/ourwork" className="p-1">
							Our Work
						</Link>
						<Link href="/contact" className="p-1">
							Contact
						</Link>{" "}
					</div>
				</div>
				<div className="mx-auto">
					<h2 className="text-center">SOLUTIONS</h2>
					<hr></hr>
					<div className="flex flex-col text-center">
						<Link
							href="/solutions#software-development"
							className="p-1"
						>
							Software Development
						</Link>
						<Link href="/solutions#ux-ui" className="p-1">
							UX/UI
						</Link>
						<Link href="/solutions#data-analytics" className="p-1">
							Data Analytics
						</Link>
						<Link href="/solutions#cloud-solutions" className="p-1">
							Cloud Solutions
						</Link>
						<Link href="/contact" className="p-1">
							Contact
						</Link>{" "}
					</div>
				</div>
				<div className="mx-auto">
					<h2 className="text-center">CONTACT</h2>
					<hr></hr>
					<div className="flex justify-around">
						<div className="flex flex-col">
							<a
								to="https://www.linkedin.com/company/pointbreak-dev/"
								className="text-3xl m-auto mx-3"
							>
								{" "}
								<FaLinkedin className="my-2" />
							</a>
						</div>
						<div className="flex">
							<a
								to="mailto: pointbreak.se@gmail.com"
								className="text-3xl m-auto mx-3"
							>
								{" "}
								<TfiEmail className="my-2" />
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-end">
						<div className="flex justify-end">
							<p className="lg:text-lg py-1 my-1 w-min border-blue-400 border-2 rounded-3xl rounded-br-none p-3 text-right ">
								Simple.
							</p>
						</div>{" "}
						<div className="flex justify-start">
							<p className="lg:text-xl py-1 my-1 w-min border-purple-400 border-2 rounded-3xl rounded-bl-none p-3 text-left ">
								Creative.
							</p>
						</div>{" "}
						<div className="flex justify-end">
							<p className="lg:text-2xl py-1 my-1 w-min border-green-400 border-2 rounded-3xl rounded-br-none p-3 text-right ">
								Solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center m-auto p-2">
				<img src="/logo_white.png" className="object-cover h-12 mx-5" />
				<div className="flex flex-col text-center">
					<p className="text-md">Point.Break</p>
					<p className="text-sm">Software Engineering LLC, 2023</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
