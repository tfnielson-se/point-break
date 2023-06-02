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
					<div className="text-center my-10">
						<div className="hidden lg:block">
							<p className="home-title fifth-color text-center text-6xl">
								<strong className="second-color font-fifth-color pb-2 px-4 tracking-widest">
									point.break
								</strong>
							</p>
						</div>
						<div className="lg:hidden">
							<p className="home-title third-color text-center bg-transparent rounded-tl-l text-2xl my-10 ">
								<strong className="text-5xl pb-1 second-color font-fifth-color px-4 tracking-widest mx-2">
									point.break
								</strong>
							</p>
						</div>
						<div className="flex flex-row justify-around w-full">
							<div>
								<p className="font-fifth-color text-4xl my-1 fifth-colo px-3 italic border-4 bring-up">
									Software Engineering
								</p>
								<p className="lg:hidden font-first-color text-2xl my-5 px-3 italic border-4 border-red-400 fifth-color">
									Simple Creative Solutions
								</p>
								<p className="lg:hidden font-first-color text-2xl my-5 px-3 italic border-4 border-red-400 fifth-color">
									Modern WebDesign
								</p>
								<p className="lg:hidden font-first-color text-2xl my-5 px-3 italic border-4 border-red-400 fifth-color">
									Business Software Architecture
								</p>
							</div>
						</div>
					</div>

					{/* <div className="hidden lg:block justify-around m-10 text-3xl font-first-color leading-loose">
						<p className="fifth-color my-1 px-2 border-8 border-red-400 w-3/4">
							Business Software Architecture
						</p>
						<p className="fifth-color my-1 px-2 border-8 border-red-400 w-2/3">
							Simple Creative Solutions
						</p>
						<p className="fifth-color my-1 px-2 border-8 border-red-400 w-1/2">
							Modern WebDesign
						</p>
					</div> */}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Home;
