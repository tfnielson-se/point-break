"use client";
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
				<section className="">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`text-3xl lg:text-5xl p-1 bring-up m-auto`}
						>
							We never shy away from a challenge, reach out. We
							have solutions.
						</p>
					</div>
					<section className="flex flex-wrap max-w-7xl lg:m-auto">
						<div className="flex flex-wrap justify-around m-auto my-5">
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
                    <div className="flex flex-col justify-end h-48 my-10">
						<p className="w-1/2 rounded-r-full ourwork-bg p-2 my-1 text-3xl lg:text-center">
							Simple.
						</p>
						<p className="w-2/3 rounded-r-full about-bg p-2 my-1 text-4xl lg:text-center">
							Creative.
						</p>
						<p className="w-5/6 rounded-r-full contact-bg p-2 my-1 text-5xl lg:text-center">
							Solutions.
						</p>
					</div>
					<div className="flex my-10">
						{""}
						<section className="ml-2 w-5 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 bg-violet-500 m-auto rounded"></section>

						<section className="w-full h-2 bg-blue-500 m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 third-color m-auto rounded"></section>

						{/* <section className="w-full h-2 bg-blue-500 m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 bg-violet-500 m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 bg-violet-500 m-auto rounded"></section> */}
					</div>
					<div className="flex justify around my-5">
						{""}
						<section className="ml-2 w-5 h-2 third-color m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 third-color m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 third-color m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 third-color m-auto rounded"></section>

						<section className="w-full h-2 bg-violet-500 m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 bg-blue-500 m-auto rounded"></section>

						<section className="w-full h-2 bg-violet-500 m-auto mx-5 rounded"></section>
						{/* <section className="mr-2 w-40 h-2 third-color m-auto rounded"></section>
						<section className="mr-2 w-20 h-2 third-color m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 third-color m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 third-color m-auto rounded"></section> */}
					</div>
					<div className="flex justify around my-10">
						{""}
						<section className="ml-2 w-5 h-2 bg-blue-500 m-auto rounded"></section>
						<section className="ml-2 w-10 h-2 bg-blue-500 m-auto rounded"></section>
						<section className="ml-2 w-20 h-2 bg-blue-500 m-auto rounded"></section>
						<section className="ml-2 w-40 h-2 bg-blue-500 m-auto rounded"></section>

						<section className="w-full h-2 third-color m-auto mx-5 rounded "></section>
						<section className="w-1/4 h-2 bg-violet-500 m-auto rounded"></section>

						<section className="w-full h-2 third-color m-auto mx-5 rounded"></section>
						<section className="mr-2 w-40 h-2 bg-blue-500 m-auto rounded"></section>
						{/* <section className="mr-2 w-20 h-2 bg-blue-500 m-auto rounded"></section>
						<section className="mr-2 w-10 h-2 bg-blue-500 m-auto rounded"></section>
						<section className="mr-2 w-5 h-2 bg-blue-500 m-auto rounded"></section> */}
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Contact;
