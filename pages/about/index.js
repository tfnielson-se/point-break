import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiElixir } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
					<div className="flex justify-center my-5">
						<div className="bring-up max-w-2xl overflow-hidden rounded-b-xl rounded-t-md ">
							<div className="second-color h-5"></div>

								<p className="font-fourth-color text-center bg-transparent rounded-tl-l text-6xl">
									<strong className="bg-gray-700 px-4 tracking-widest">
										point.break
									</strong>
								</p>

							<div className="p-6 second-color">
								<div>
									<p className="px-2 third-color">
										<strong className="text-2xl bg-gray-700 p-1">
											ABOUT US
										</strong>
									</p>
									<p className="mt-2 text-xl tracking-wide ">
										Our mission is to help businesses and
										individuals achieve their goals through
										the power of technology. We are
										committed to providing high-quality
										software development services that are
										tailored to meet our client&apos; unique
										needs and requirements. Our goal is to
										deliver reliable, efficient, and
										scalable solutions that drive business
										growth and success. We believe in
										building long-term relationships with
										our clients, based on trust,
										communication, and collaboration. Our
										passion for technology and commitment to
										excellence drives us to continuously
										learn and innovate, in order to provide
										the best possible service to our
										clients.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center text-center m-auto my-10 max-w-2xl">
						<div className="bring-up second-color w-full mx-3 rounded-b-xl rounded-t-md">
							<p className="text-2xl first mb-4">
								<strong className="bg-gray-700 p-2">
									STACKS
								</strong>
							</p>
							<p className="text-xl mx-5 third-color">
								{" "}
								Python / Django{" "}
								<span className="font-first-color">|</span>{" "}
								Elixir / Phoenix / LiveView{" "}
								<span className="font-first-color">|</span> Ruby
								on Rails{" "}
								<span className="font-first-color">|</span>{" "}
								JavaScript / React.js / Next.js{" "}
							</p>
							<p className="text-xl pb-5 tracking-wide">
								We utilize cutting-edge technologies that are
								highly regarded in the industry to deliver
								top-quality solutions to our clients.
							</p>
						</div>
					</div>
					<div className="flex justify-around pb-3">
						<FaPython className=" text-6xl mx-1" />
						<SiDjango className=" text-6xl mx-1" />
						<SiElixir className=" text-6xl mx-1" />
						<FaPhoenixFramework className=" text-6xl mx-1" />
						<SiRubyonrails className=" text-6xl mx-1" />
						<SiJavascript className=" text-6xl mx-1" />
						<SiReact className=" text-6xl mx-1" />
						<SiNextdotjs className=" text-6xl mx-1" />
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default About;
