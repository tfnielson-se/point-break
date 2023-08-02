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
					<div className="text-center">
                    <div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
                    <p className="home-title text-2xl bring-up">
								<strong className="text-5xl font-fourth-color tracking-widest">
									Point.Break
								</strong>
							</p>
                            <div className="hidden lg:flex flex-wrap justify-center m-auto bring-up">
							<img
								src="/logo-white-bg.png"
								className="object-cover h-96"
							/>
						</div>
					</div>
						<div className="lg:hidden">
								<p className="font-fourth-color text-2xl lg:text-4xl my-1 px-2 italic">
									Simple Creative Solutions
								</p>
						</div>
					</div>
					<section className="flex justify-between services-bg m-3">
						<div className="justify-around text-xl leading-loose">
							<p className="my-1 px-2">
								Software Engineering
							</p>
							<p className="my-1 px-2">
								Business Software Architecture
							</p>
							<p className="my-1 px-2">UX/UI WebDesign</p>
                            <p className="my-1 px-2">AWS Solutions</p>
						</div>
						
					</section>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
