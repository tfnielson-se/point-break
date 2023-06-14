import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
			>
				<section className="m-5">
					<div className="m-5 lg:m-10 lg:w-1/4">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Contact
						</p>
					</div>
					<div className="flex flex-wrap justify-around mx-10 my-10">
						<div className="flex font-first-color">
							<VscGithub className="text-6xl my-2" />
							{/* <span className="text-2xl">developer: </span> */}
							<a
								href="https://github.com/tfnielson-se"
								className="text-2xl nav-btn m-auto mx-3"
							>
								{" "}
								tfnielson-se
							</a>
						</div>
						<div className="flex font-first-color">
							<FaLinkedin className="text-6xl my-2" />
							<a
								href="https://www.linkedin.com/company/pointbreak-dev/"
								className="text-2xl nav-btn m-auto mx-3"
							>
								{" "}
								point.break
							</a>
						</div>
						<div className="flex font-first-color">
							<TfiEmail className="text-6xl my-2" />
							{/* <span className="text-2xl">e-mail: </span> */}
							<a
								href="mailto: pointbreak.se@gmail.com"
								className="text-2xl nav-btn m-auto mx-3"
							>
								{" "}
								pointbreak.se@gmail.com
							</a>
						</div>
					</div>
					<div className="flex justify around">
						{""}
						<section className="ml-2 w-5 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 second-color m-auto rounded"></section>

						<section className="w-full h-2 third-color m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 second-color m-auto rounded"></section>

						<section className="w-full h-2 third-color m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 second-color m-auto rounded"></section>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Contact;
