// [<0>]
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
	const slogans = [
		"Simple Creative Solutions",
		"Business Software Architecture",
		"Simple Modern WebDesign",
	];

	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
					<div className="text-center mt-20">
						<div className="hidden lg:block">
							<p className="home-title third-color text-center text-6xl">
								<strong className="second-color font-fifth-color px-4 tracking-widest">
									point.break
								</strong>
							</p>
						</div>
						<div className="lg:hidden">
							<p className="home-title third-color text-center bg-transparent rounded-tl-l text-2xl my-10 ">
								<strong className="text-2xl second-color font-fifth-color px-4 tracking-widest">
									point.break
								</strong>
							</p>
						</div>
						<div className="flex flex-row justify-around w-full mt-1">
							<div>
								<p className="font-fifth-color text-4xl second-color px-3 italic border-4 border-red-400">
									Software Engineering
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap justify-around m-10 text-6xl font-first-color fifth-color leading-loose">
						<p>Simple Creative Solutions</p>
						<p>Business Software Architecture</p>
						<p>Modern WebDesign</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
