"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import { SiElixir } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { DiRubyRough } from "react-icons/di";


import Link from "next/link";
import QuickLinks from "./QuickLinks";

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
					className=""
				>
					<div className="text-center">
						<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex flex-wrap text-center">
							<div className="flex flex-wrap justify-center m-auto bring-up">
								<img
									src="/logo.png"
									className="object-cover h-24 lg:h-96"
								/>
							</div>
							<div className="m-5">
								<p
									className={`bring-up ${share_tech.className} text-5xl lg:text-6xl font-fourth-color tracking-widest`}
								>
									{"Point.Break"}
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start h-48 my-10">
						{/* <p className="hidden lg:block m-auto text-6xl">Simple.Creative.Solutions</p> */}
						<p className="w-1/2 rounded-r-full ourwork-bg p-2 my-1 text-3xl lg:text-center">
							Simple.
						</p>
						<p className="w-2/3 rounded-r-full about-bg p-2 my-1 text-4xl lg:text-center">
							Creative.
						</p>
						<p className="w-5/6 rounded-r-full contact-bg p-2 my-1 text-5xl lg:text-center">
							Solutions.
						</p>
					</div>
					<section className="flex flex-col my-10 max-w-6xl lg:m-auto">
						<div className="flex">
							<p className="px-5 text-xl leading-loose fourth-color font-first-color rounded-t-2xl rounded-br-2xl shadow-md w-max mx-5">
								Quick Browse
							</p>
						</div>
						<div className="flex flex-wrap justify-around">
							<QuickLinks />
						</div>
					</section>
					<div className="flex justify-end my-5">
                        <div className="flex flex-wrap bg-black w-1/5">
                            <SiElixir className="font-first-color text-5xl flex m-auto px-1"/>
                            <SiReact className="font-first-color text-5xl flex m-auto px-1"/>
                            <FaPython className="font-first-color text-5xl flex m-auto px-1" />
                            <DiRubyRough className="font-first-color text-5xl flex m-auto px-1" />
                        </div>
						<div className="w-5/6 flex flex-col justify-end py-5 lg:py-10 solutions-bg">
							<div className="flex justify-end pl-2">
								<p
									className={`px-3 py-2 text-lg lg:text-xl tracking-widest first-color rounded-l-full text-right`}
								>
									{
										"Build Custom Web and Mobile Applications Delivering Unique User Experience."
									}
								</p>
							</div>
							<div className="flex justify-end pl-2">
								<p
									className={`px-3 py-2 text-lg lg:text-xl tracking-wide ourwork-bg my-3 rounded-l-full text-right`}
								>
									{
										"Help You Achieve Insightful Answers with Data Analysis and Drive Growth."
									}
								</p>
							</div>
							<div className="flex justify-end pl-2">
								<p
									className={`px-3 py-2 text-lg lg:text-xl tracking-widest contact-bg rounded-l-full text-right`}
								>
									{"Provide Unparalleled Support and Collaboration Along the Way."}
								</p>
							</div>
						</div>
					</div>

					<div className="text-center">
						<div className="px-5 lg:p-10 flex flex-wrap text-center">
							<div className="flex flex-col m-auto">
								<p
									className={`bring-up py-2 text-lg font-fourth-color tracking-widest`}
								>
									{"Reach Your Full Potential Today."}
								</p>
								<Link
									href="/contact"
									className="my-5 p-2 px-5 font-first-color fourth-color rounded-3xl rounded-bl-none tracking-widest nav-btn-contact shadow-md bring-up text-xl"
								>
									Get In Touch{" "}
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
