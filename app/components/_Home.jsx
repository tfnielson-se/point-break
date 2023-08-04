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
				>
					<div className="text-center">
						<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex flex-wrap text-center">
							<p className="home-title text-2xl bring-up">
								<strong
									className={` ${share_tech.className} text-5xl lg:text-6xl font-fourth-color tracking-widest`}
								>
									{"Point.Break"}
								</strong>
							</p>
							<div className="flex flex-wrap justify-center m-auto bring-up">
								<img
									src="/logo.png"
									className="object-cover h-24 lg:h-96"
								/>
							</div>
						</div>
						{/* <div className="lg:hidden">
							<p className="font-fourth-color text-2xl lg:text-4xl my-1 px-2 italic">
								Simple Creative Solutions
							</p>
						</div> */}
					</div>

					<section className="flex flex-wrap my-5">
						<div className="flex text-xl leading-loose fourth-color font-first-color rounded-t-2xl rounded-br-2xl m-3">
							<p className="my-1 px-5">Quick Links About Us</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center">
							<QuickLinks />
							<div className="flex flex-col m-auto w-min border-4 border-blue-400 rounded-3xl rounded-br-none p-3 text-right">
								<p className="text-3xl lg:text-4xl py-1">
									Simple.
								</p>
                                <p className="text-4xl lg:text-5xl py-1">
									Creative.
								</p>
                                <p className="text-5xl lg:text-6xl py-1">
									Solutions!
								</p>
							</div>
						</div>
					</section>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
