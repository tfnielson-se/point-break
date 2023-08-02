"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";

const share_tech = Share_Tech_Mono({
	subsets: ["latin"],
	weight: "400",
});

const Home = () => {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
					<div className="text-center">
						<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex flex-wrap text-center">
							<p className="home-title text-2xl bring-up">
								<strong
									className={` ${share_tech.className} text-5xl lg:text-6xl font-fourth-color tracking-widest`}
								>
									Point.Break
								</strong>
							</p>
							<div className="flex flex-wrap justify-center m-auto bring-up">
								<img
									src="/logo.png"
									className="object-cover h-24 lg:h-96"
								/>
							</div>
						</div>
						<div className="lg:hidden">
							<p className="font-fourth-color text-2xl lg:text-4xl my-1 px-2 italic">
								Simple Creative Solutions
							</p>
						</div>
					</div>
					{/* <div className="m-5">
						<p className="text-xl text-center leading-loose rounded-t-2xl rounded-br-2xl m-3">
							Quick links
						</p>
					</div> */}
					<section className="flex flex-wrap">
						<section className="flex flex-wrap justify-around lg:w-1/2 m-5">
							<div className="text-xl leading-loose about-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/about#the-company"
									className="my-1 px-2"
								>
									The Company
								</Link>
							</div>
							<div className="text-xl leading-loose services-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/solutions#software-development"
									className="my-1 px-2"
								>
									Software Development
								</Link>
							</div>
							<div className="text-xl leading-loose services-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/solutions#ux-ui"
									className="my-1 px-2"
								>
									UX/UI
								</Link>
							</div>
							<div className="text-xl leading-loose services-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/solutions#data-analytics"
									className="my-1 px-2"
								>
									Data Analytics
								</Link>
							</div>
							
							<div className="text-xl leading-loose projects-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link href="/ourwork" className="my-1 px-2">
									Clients
								</Link>
							</div>
							<div className="text-xl leading-loose about-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link href="/contact" className="my-1 px-2">
									Contact Us
								</Link>
							</div>

							<div className="text-xl leading-loose projects-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/solutions#software-development"
									className="my-1 px-2"
								>
									Website Redesign
								</Link>
							</div>
							<div className="text-xl leading-loose projects-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/ourwork#kahilla"
									className="my-1 px-2"
								>
									Automation
								</Link>
							</div>
                            <div className="text-xl leading-loose services-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/solutions#aws-solutions"
									className="my-1 px-2"
								>
									AWS Solutions
								</Link>
							</div>
							<div className="text-xl leading-loose about-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link
									href="/about#resources"
									className="my-1 px-2"
								>
									Resources
								</Link>
							</div>
							<div className="text-xl leading-loose projects-bg rounded-t-2xl rounded-br-2xl nav-btn m-3">
								<Link href="/contact" className="my-1 px-2">
									Social Media
								</Link>
							</div>
						</section>
					</section>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
