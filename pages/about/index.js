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
		<section className="m-5 about-bg">
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
					<div className="flex justify-center m-2 lg:m-5">
						<div className="bring-up max-w-2xl">
							<div className="second-color h-5"></div>

							<p className="font-fifth-color text-center bg-transparent text-5xl ;lg:text-6xl">
								<strong className="fifth-color font-first-color py-1 px-4 tracking-widest">
									ABOUT US
								</strong>
							</p>

							<div className="p-5 second-color">
								<div>
									<p className="px-2 third-color lg:w-2/3">
										<strong className="text-3xl font-second-color py-1 px-3">
											OUR FOCUS
										</strong>
									</p>
									<p className="m-2 text-2xl tracking-wide leading-normal font-fifth-color">
										... is to help businesses and
										individuals achieve their goals through
										the power of technology. We believe in
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
					<div className="flex justify-center m-auto my-10 max-w-2xl">
						<div className="bring-up second-color w-full mx-3">
							<p className="text-3xl third-color px-2 m-5 font-second-color lg:w-2/3">
								<strong className="p-1">STACKS</strong>
							</p>
							<div className="flex flex-wrap justify-center fifth-color mx-5">
								<p className="text-2xl text-center fifth-color font-first-color tracking-wide leading-relaxed py-1 px-3 elixir-color">
									{" "}
									Elixir{" "}
								</p>
								<p className="font-first-color my-auto">|</p>{" "}
								<p className="text-2xl text-center fifth-color font-first-color tracking-wide leading-relaxed py-1 px-3 python-color">
									Python{" "}
								</p>
								<p className="font-first-color my-auto">|</p>{" "}
								<p className="text-2xl text-center fifth-color font-first-color tracking-wide leading-relaxed py-1 px-3 ruby-color">
									Ruby on Rails{" "}
								</p>
								<p className="font-first-color my-auto">|</p>{" "}
								<p className="text-2xl text-center second-color tracking-wide leading-relaxed py-1 px-3 react-color">
									React.js{" "}
								</p>
							</div>
							<p className="text-2xl text-left p-3 m-2 tracking-wide leading-relaxed font-fifth-color">
								We utilize cutting-edge technologies that are
								highly regarded in the industry to deliver
								top-quality solutions to our clients.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-around pb-3">
						<FaPython className="font-fifth-color text-6xl mx-1" />
						<SiDjango className="font-fifth-color text-6xl mx-1" />
						<SiElixir className="font-fifth-color text-6xl mx-1" />
						<FaPhoenixFramework className="font-fifth-color text-6xl mx-1" />
						<SiRubyonrails className="font-fifth-color text-6xl mx-1" />
						<SiJavascript className="font-fifth-color text-6xl mx-1" />
						<SiReact className="font-fifth-color text-6xl mx-1" />
						<SiNextdotjs className="font-fifth-color text-6xl mx-1" />
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default About;
