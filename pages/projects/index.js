import { motion, AnimatePresence } from "framer-motion";


const Projects = () => {
	return (
        <AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
		<div className="text-center mt-20">
			<div className="">
				<p className=" home-title third-color text-center bg-transparent rounded-tl-l text-4xl">
					<strong className="text-6xl bg-gray-700 px-4 tracking-widest">
						🚧 ... work in progress
					</strong>
				</p>
			</div>
		</div>
        </motion.div>
        </AnimatePresence>

	);
};

export default Projects;
