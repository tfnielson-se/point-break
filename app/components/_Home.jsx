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
							<p className=" px-5 text-xl leading-loose fourth-color font-first-color rounded-t-2xl rounded-br-2xl shadow-md">
								Quick Browse
							</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center">
							<QuickLinks />
							<div className="flex flex-col m-auto lg:w-1/3 borde w-2/3">
								<div className="flex justify-end">
									<p className="py-1 my-2 border-blue-400 border-2 rounded-3xl rounded-br-none p-3 text-right lg:text-2xl text-2xl shadow-md">
										Simple.
									</p>
								</div>{" "}
								<div className="flex justify-start">
									<p className="py-1 my-2 w-min border-purple-400 border-2 rounded-3xl rounded-bl-none p-3 text-left lg:text-2xl text-2xl shadow-md">
										Creative.
									</p>
								</div>{" "}
								<div className="flex justify-end">
									<p className="py-1 my-2 w-min border-green-400 border-2 rounded-3xl rounded-br-none p-3 text-right lg:text-2xl text-2xl shadow-md">
										Solutions.
									</p>
								</div>
                                <div className="flex flex-row justify-start">
									<p className="py-1 my-2 border-yellow-400 border-2 rounded-3xl rounded-bl-none p-3 text-left lg:text-4xl text-3xl shadow-md">
										💡
									</p>
								</div>{" "}
							</div>
						</div>
					</section>
					<div className="text-center">
						<div className="px-5 lg:p-10 flex flex-wrap text-center">
							<div className="">
								<p
									className={`bring-up ${share_tech.className} text-3xl lg:text-5xl font-fourth-color tracking-widest about-bg mb-5 p-2 rounded-full rounded-br-none shadow-lg`}
								>
									{"Deliver Unparallel User Experience."}
								</p>
								<p
									className={`bring-up ${share_tech.className} text-3xl lg:text-5xl font-fourth-color tracking-widest solutions-bg my-5 p-2 rounded-full rounded-bl-none shadow-lg`}
								>
									{"Reach Your Full Potential."}
								</p>
								<p
									className={`bring-up ${share_tech.className} text-3xl lg:text-5xl font-fourth-color tracking-widest ourwork-bg my-5 p-2 rounded-full rounded-br-none shadow-lg`}
								>
									{"Drive Growth With Data Insight."}
								</p>
							</div>
							<div className="flex">
								<Link
									href="/contact"
									className="my-5 p-2 font-first-color fourth-color rounded-3xl rounded-bl-none tracking-widest nav-btn-contact shadow-md bring-up text-4xl"
								>
									Contact Us
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
