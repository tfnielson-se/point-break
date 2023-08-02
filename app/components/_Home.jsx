"use client"
import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

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
					<div className="text-center lg:my-10">
						<div className="hidden lg:block">
							<p className="home-title text-center">
								<strong className={`${share_tech.className} font-fourth-color px-4 tracking-widest`}>
									Point.Break
								</strong>
							</p>
						</div>
						<div className="lg:hidden">
							<p className="home-title text-center text-2xl">
								<strong className="text-5xl font-fourth-color tracking-widest">
									Point.Break
								</strong>
							</p>
								<p className="lg:hidden font-fourth-color text-xl my-5 px-3 italic">
									Software Engineering
								</p>
						</div>
						<div className="flex flex-row justify-around w-full">
							<div>
								<p className="font-fourth-color text-2xl lg:text-4xl my-1 px-2 italic">
									Simple Creative Solutions
								</p>
								{/* <p className="lg:hidden font-fourth-color text-2xl my-5 px-3 italic">
									Business Software Architecture
								</p>
								<p className="lg:hidden font-fourth-color text-2xl my-5 px-3 italic">
									UX/UI WebDesign
								</p> */}
							</div>
						</div>
					</div>
					<section className="flex justify-between">
						<div className="hidden lg:block justify-around m-auto text-3xl leading-loose">
							<p className="my-1 px-2">
								Software Engineering
							</p>
							<p className="my-1 px-2">
								Business Software Architecture
							</p>
							<p className="my-1 px-2">UX/UI WebDesign</p>
                            <p className="my-1 px-2">AWS Solutions</p>
						</div>
						<div className="flex flex-wrap justify-center m-auto">
							<img
								src="/logo-white-bg.png"
								className="object-cover h-96"
							/>
						</div>
					</section>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
