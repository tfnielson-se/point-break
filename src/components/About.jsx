import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiElixir } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import {FaAws} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
			>
				<section className="m-5">
					<div className="m-5 rounded lg:m-10 lg:w-1/4">
						<p className={`first-color text-5xl p-1 bring-up`}>
							About
						</p>
					</div>
					<div className="flex flex-row flex-wrap justify-around">
						<div className="bring-up border-8 border-stone-900 flex justify-center m-1 my-5 lg:m-5 max-w-3xl">
							<div className="m-5">
								<p className="text-3xl first-color rounded py-1 px-3 lg:w-2/3">
									<strong className="">OUR FOCUS</strong>
								</p>
								<div>
									<p className="text-2xl tracking-wide leading-relaxed text-left p-3">
										Our focus is to help businesses and
										individuals achieve their goals through
										the power of technology. We do this by
										building long-term relationships with
										our clients, based on trust,
										communication, and collaboration.
									</p>
									<hr className="border-4 second-color w-2/3 text"></hr>
									<p className="text-2xl tracking-wide leading-relaxed text-left p-3">
										Our passion for technology and
										commitment to excellence drives us to
										continuously learn and innovate, in
										order to provide the best possible
										service to our clients.
									</p>
								</div>
							</div>
						</div>
						<div className="flex justify-left m-auto my-10 max-w-xl bring-up w-full mx-3 border-8 border-stone-900 rounded">
							<div className="">
								<p className="text-3xl first-color rounded px-2 m-5 lg:w-2/3">
									<strong className="p-1">RESOURCES</strong>
								</p>
								<div className="flex flex-wrap justify-center fifth-color mx-5">
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 python-color">
										Python{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 elixir-color">
										{" "}
										Elixir{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 ruby-color">
										Ruby on Rails{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 react-color">
										React.js{" "}
									</p>
                                    <p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 aws-color">
										AWS{" "}
									</p>
                                    <p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-2xl text-center tracking-wide leading-relaxed py-1 px-3 sql-color">
										PostgreSQL{" "}
									</p>
								</div>
								<p className="text-2xl text-left p-3 m-2 tracking-wide leading-relaxed">
									We utilize cutting-edge technologies that
									are highly regarded in the industry to
									deliver top-quality solutions to our
									clients.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-around p-3">
						<FaPython className="font-fifth-color text-6xl mx-1 my-2" />
						{/* <SiDjango className="font-fifth-color text-6xl mx-1 my-2" /> */}
						<SiElixir className="font-fifth-color text-6xl mx-1 my-2" />
						{/* <FaPhoenixFramework className="font-fifth-color text-6xl mx-1 my-2" /> */}
						<SiRubyonrails className="font-fifth-color text-6xl mx-1 my-2" />
						{/* <SiJavascript className="font-fifth-color text-6xl mx-1 my-2" /> */}
						<SiReact className="font-fifth-color text-6xl mx-1 my-2" />
						<FaAws className="font-fifth-color text-6xl mx-1 my-2" />
                        <BiLogoPostgresql className="font-fifth-color text-6xl mx-1 my-2" />
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default About;
