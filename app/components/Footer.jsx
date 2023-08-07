"use client";
import { Inconsolata } from "next/font/google";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const font = Inconsolata({
	subsets: ["latin"],
	weight: "400",
});

const Footer = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
				className="fourth-color border-t-8 border-yellow-400"
			>
				<section className="flex flex-wrap justify-around font-first-color max-w-7xl m-auto">
					<div
						className={`${font.className} flex flex-wrap justify-between p-3 w-full m-10`}
					>
						<div className="lg:mx-auto my-2">
							<h2 className="text-center border rounded-3xl rounded-bl-none ">
								MENU
							</h2>
							{/* <hr></hr> */}
							<div className="flex flex-col text-center">
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
						<div className="lg:mx-auto my-2">
							<h2 className="text-center border  rounded-3xl rounded-bl-none ">
								ABOUT
							</h2>
							{/* <hr></hr> */}
							<div className="flex flex-col text-center">
								<Link href="/about#the-company" className="p-1">
									The Company
								</Link>
								<Link href="/about#our-focus" className="p-1">
									Our Focus
								</Link>
								<Link href="/about#resources" className="p-1">
									Resources
								</Link>
								<Link
									href="/solutions#aws-solutions"
									className="p-1"
								></Link>
							</div>
						</div>
						<div className="lg:mx-auto my-2">
							<h2 className="text-center border bo rounded-3xl rounded-bl-none ">
								SOLUTIONS
							</h2>
							{/* <hr></hr> */}
							<div className="flex flex-col text-center">
								<Link
									href="/solutions#software-development"
									className="p-1"
								>
									Development
								</Link>
								<Link href="/solutions#ux-ui" className="p-1">
									UX/UI
								</Link>
								<Link
									href="/solutions#data-analytics"
									className="p-1"
								>
									Data Analytics
								</Link>
								<Link
									href="/solutions#aws-solutions"
									className="p-1"
								>
									Cloud Solutions
								</Link>
							</div>
						</div>
						<div className="lg:mx-auto my-2">
							<h2 className="text-center border b rounded-3xl rounded-bl-none ">
								OUR WORK
							</h2>
							{/* <hr></hr> */}
							<div className="flex flex-col text-center">
								<Link
									href="/solutions#software-development"
									className="p-1"
								>
									Development
								</Link>
								<Link href="/solutions#ux-ui" className="p-1">
									Automation
								</Link>
							</div>
						</div>
						<div className="lg:mx-auto my-2">
							<h2 className="text-center border rounded-3xl rounded-bl-none ">
								CONTACT
							</h2>
							{/* <hr></hr> */}
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
									<p className="py-1 my-1 w-min border-blue-400 border-2 rounded-3xl rounded-br-none p-3 text-right ">
										Simple.
									</p>
								</div>{" "}
								<div className="flex justify-start">
									<p className="py-1 my-1 w-min border-purple-400 border-2 rounded-3xl rounded-bl-none p-3 text-left ">
										Creative.
									</p>
								</div>{" "}
								<div className="flex justify-end">
									<p className="py-1 my-1 w-min border-green-400 border-2 rounded-3xl rounded-br-none p-3 text-right ">
										Solutions.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-around m-auto p-3">
						<img
							src="/logo_white.png"
							className="object-cover h-12 mx-3"
						/>
						<div className="flex flex-col text-center m-auto">
							<p className="text-md">Point.Break</p>
							<p className="text-sm">
								Software Engineering
							</p>
                            <p className="text-xs font-first-color py-1 text-center ">© 2023 All rights reserved. </p>
						</div>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Footer;
