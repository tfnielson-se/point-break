// [<0>]
import { motion, AnimatePresence } from "framer-motion";

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
			<div className="text-center mt-20">
				<div className="hidden lg:block">
					<p className="home-title third-color text-center bg-transparent rounded-tl-l text-6xl">
						<strong className="second-color font-fourth-color px-4 tracking-widest">
							point.break
						</strong>
					</p>
				</div>
                <div className="lg:hidden">
					<p className="home-title third-color text-center bg-transparent rounded-tl-l text-6xl my-10 ">
						<strong className="second-color font-fourth-color px-4 tracking-widest">
							p.b
						</strong>
					</p>
				</div>
				<div className="flex flex-row justify-around w-full mt-1">
					<div>
						<p className="font-third-color text-4xl fourth-color px-3 italic">
							Software Engineering & Development
						</p>
					</div>
				</div>
				{/* <button className=" text-2xl mt-10 py-3 px-10 font-third-color hover:bg-cyan-100 rounded-lg tracking-wide hover:tracking-widest"> Experience </button> */}
				{/* <div className="flex justify-around pb-3">
				<FaPython className="hover:text-sky-600 text-6xl mx-1" />
				<SiDjango className="hover:text-emerald-600 text-6xl mx-1" />
				<SiElixir className="hover:text-violet-500 text-6xl mx-1" />
				<FaPhoenixFramework className="hover:text-orange-500 text-6xl mx-1" />
				<SiRubyonrails className="hover:text-red-500 text-6xl mx-1" />
				<SiJavascript className="hover:text-yellow-400 text-6xl mx-1" />
				<SiReact className="hover:text-cyan-400 text-6xl mx-1" />
				<SiNextdotjs className="hover:text-stone-800 text-6xl mx-1" />
			</div> */}
			</div>
            </motion.div>
            </AnimatePresence>
            
		</>
	);
};

export default Home;
