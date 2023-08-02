"use client";
import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
			>
				<section className="lg:min-h-screen">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`w-max text-3xl lg:text-5xl p-1 bring-up m-auto`}
						>
							We never shy away from a challenge, reach out. We
							have solutions.
						</p>
					</div>
					<section className="flex flex-wrap m-5 w-full">
						<div className="flex flex-wrap justify-around m-auto border-b-4 border-stone-900">
							<ContactForm />
						</div>
						<div className="flex flex-col justify-around m-auto">
							<div className="">
								<FaLinkedin className="text-6xl my-2" />
								<a
									href="https://www.linkedin.com/company/pointbreak-dev/"
									className="text-2xl nav-btn m-auto mx-3"
								>
									{" "}
									Point.Break
								</a>
							</div>
							<div className="">
								<TfiEmail className="text-5xl lg:text-6xl my-2" />
								{/* <span className="text-2xl">e-mail: </span> */}
								<a
									href="mailto: thomas.nielson@pbse.io"
									className="text-2xl nav-btn m-auto mx-3"
								>
									{" "}
									info@pbse.io
								</a>
							</div>
						</div>
					</section>
					<div className="flex justify around">
						{""}
						<section className="ml-2 w-5 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 second-color m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 second-color m-auto rounded"></section>

						<section className="w-full h-2 fourth-color m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 first-color m-auto rounded"></section>

						<section className="w-full h-2 fourth-color m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 second-color m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 second-color m-auto rounded"></section>
					</div>
					<div className="flex justify around my-10">
						{""}
						<section className="ml-2 w-5 h-2 first-color m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 first-color m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 first-color m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 first-color m-auto rounded"></section>

						<section className="w-full h-2 second-color m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 fourth-color m-auto rounded"></section>

						<section className="w-full h-2 second-color m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 first-color m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 first-color m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 first-color m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 first-color m-auto rounded"></section>
					</div>
					<div className="flex justify around">
						{""}
						<section className="ml-2 w-5 h-2 fourth-color m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 fourth-color m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 fourth-color m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 fourth-color m-auto rounded"></section>

						<section className="w-full h-2 first-color m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 second-color m-auto rounded"></section>

						<section className="w-full h-2 first-color m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 fourth-color m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 fourth-color m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 fourth-color m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 fourth-color m-auto rounded"></section>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Contact;
