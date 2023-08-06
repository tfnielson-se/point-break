"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
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
							<div className="m-5">
								<p
									className={`bring-up ${share_tech.className} text-5xl lg:text-6xl font-fourth-color tracking-widest`}
								>
									{"Point.Break"}
								</p>
							</div>
							<div className="flex flex-wrap justify-center m-auto bring-up">
								<img
									src="/logo.png"
									className="object-cover h-24 lg:h-96"
								/>
							</div>
						</div>
					</div>

					<section className="flex flex-wrap m-5">
						<div className="flex m-3">
							<p className="py-1 px-5 text-xl leading-loose fourth-color font-first-color rounded-t-2xl rounded-br-2xl ">
								Quick Browse
							</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center">
							<QuickLinks />
							<div className="flex flex-col m-auto w-max p-3 text-left border-4 border-blue-400 rounded-3xl rounded-br-none">
								<p className="text-2xl lg:text-4xl py-1 nav-btn-about w-min">
									Simple.
								</p>
								<p className="text-3xl lg:text-5xl py-1 nav-btn-ourwork w-min">
									Creative.
								</p>
								<p className="text-4xl lg:text-6xl py-1 nav-btn-solutions w-min">
									Solutions!
								</p>
							</div>
						</div>
					</section>
                    <div className="text-center">
						<div className="p-5 lg:p-10 md:48 lg:h-96 title-bg flex flex-wrap text-center">
							{/* <div className="flex flex-wrap justify-center m-auto bring-up">
								<img
									src="/logo.png"
									className="object-cover h-24 lg:h-48"
								/>
							</div> */}
							<div className="m-auto">
								<p
									className={`bring-up ${share_tech.className} text-5xl lg:text-6xl font-fourth-color tracking-widest`}
								>
									{"Reach Your Full Potential."}
								</p>
							</div>
                            <Link href="/contact" className=" m-auto p-2 font-first-color fourth-color rounded-3xl rounded-br-none border-4 border-stone-900 tracking-widest nav-btn-contact shadow-md bring-up text-xl">
                                Contact Us
                            </Link>
						</div>
					</div>
					{/* <section className="flex flex-wrap m-5 ">
						<div className="flex justify-end m-3 lg:w-1/2 ">
							<p className="py-1 px-5 text-xl leading-loose fourth-color font-first-color rounded-2xl rounded-br-none">
								Solutions
							</p>
						</div>
						<div className="flex flex-col justify-center lg:w-1/2 ">
							<div className="flex justify-end p-3 ">
								<div className="p-3 ourwork-bg rounded-3xl rounded-br-none">
									<p className="text-lg lg:text-2xl py-1 w-min">
										Unique.
									</p>
									<p className="text-xl lg:text-3xl py-1 w-min">
										Inspiring.
									</p>
									<p className="text-2xl lg:text-4xl py-1 w-min">
										Experience.
									</p>
								</div>
							</div>
							<div className="flex justify-start p-3 text-left">
								<div className=" p-3 about-bg rounded-3xl rounded-bl-none">
									<p className="text-xl lg:text-3xl py-1 w-min">
										Data.
									</p>
									<p className="text-2xl lg:text-4xl py-1 w-min">
										Driven.
									</p>
									<p className="text-3xl lg:text-5xl py-1 w-min">
										Answers.
									</p>
								</div>
							</div>
							<div className="flex justify-end p-3 ">
								<div className=" p-3 solutions-bg rounded-3xl rounded-br-none">
									<p className="text-2xl lg:text-4xl py-1  w-min">
										A.I.
									</p>
									<p className="text-3xl lg:text-5xl py-1 w-min">
										Powered.
									</p>
									<p className="text-4xl lg:text-6xl py-1 w-min">
										Insights.
									</p>
								</div>
							</div>
						</div>
					</section> */}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
