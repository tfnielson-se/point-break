"use client";
import { FaPython } from "react-icons/fa";

import { SiElixir } from "react-icons/si";

import { SiRubyonrails } from "react-icons/si";

import { SiReact } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

const font = Share_Tech_Mono({
	subsets: ["latin"],
	weight: "400",
});

const About = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
				// className="about-bg"
			>
				<section className="">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`text-3xl lg:text-5xl p-1 bring-up m-auto`}
						>
							About us, our focus, and commitment to your success.
						</p>
					</div>
                    
					<div id={"the-company"} className="flex flex-row flex-wrap justify-around about-bg rounded-t-3xl rounded-br-3xl my-2 mx-3 max-w-7xl m-auto">
						<div className="flex flex-col justify-center my-auto ">
							<img
								src="/logo-white-bg.png"
								className="object-cover h-64 m-3"
							/>
                            <p className="text-center py-2 font-first-color tracking-widest">SIMPLE.CREATIVE.SOLUTIONS</p>
						</div>
						<div className=" flex justify-center m-5 max-w-xl first-color shadow-2xl rounded-tl-2xl rounded-br-2xl">
							<div  className="m-3">
								<p className="text-4xl first-color rounded py-1 px-3 lg:w-2/3 underline">
									<strong className={`${font.className}`}>
										THE COMPANY
									</strong>
								</p>
								<div>
									<p className="text-xl tracking-wide leading-relaxed text-left p-3">
										{"Simple Creative Solutions to real world Software Engineering problems."}
									</p>
                                    <hr className="border-blue-400 mx-10"></hr>
                                    <p className="text-xl tracking-wide leading-relaxed text-left p-3">
										{"Founded in 2023 in Denver, CO, Point.Break has left a innovative imprint on the software development industry. By harnessing state-of-the-art technology and A.I tools, we deliver unparalleled functionalities, user experiences, and insightful data analytics solutions."}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row flex-wrap justify-around max-w-7xl m-auto">
						<div id="our-focus" className="border-4 border-stone-900 flex justify-center m-5 max-w-lg first-color shadow-2xl rounded-t-2xl">
							<div className=" m-3">
								<p className="text-4xl first-color rounded py-1 px-3 underline">
									<strong className={`${font.className}`}>
										OUR FOCUS
									</strong>
								</p>
								<div>
									<p className="text-xl tracking-wide leading-relaxed text-left p-3">
										{"From Software Development, to Data Analytics and AWS Solutions, our focus is to enable businesses and achieve their full potential through the power of technology. We achieve this by building long-term relationships with our clients, based on trust,communication, and seamless collaboration."}
									</p>
								</div>
							</div>
						</div>
						<div id={"resources"} className="flex justify-left m-auto max-w-lg w-full mx-5 border-4 border-stone-900 first-color shadow-2xl rounded-b-2xl">
							<div className="">
								<p className="text-4xl first-color px-2 m-5 underline">
									<strong className={`p-1 ${font.className}`}>
										RESOURCES
									</strong>
								</p>

								<p className="text-xl text-left p-3 m-2 tracking-wide leading-relaxed">
									{"At Point.Break we work with a dynamic stack of programming languages and platforms to tailor each solution to fit your business needs."}
								</p>
								<div className="flex flex-wrap justify-center fourth-color font-first-color rounded-b">
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 python-color">
										Python{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 elixir-color">
										{" "}
										Elixir{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 ruby-color">
										Ruby on Rails{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 react-color">
										React.js{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 aws-color">
										AWS{" "}
									</p>
									<p className="font-first-color my-auto">
										|
									</p>{" "}
									<p className="text-sm text-center tracking-wide leading-relaxed py-1 px-3 sql-color">
										PostgreSQL{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-around p-3 ">
						<FaPython className="font-fifth-color text-4xl mx-1 my-2" />
						{/* <SiDjango className="font-fifth-color text-4xl mx-1 my-2" /> */}
						<SiElixir className="font-fifth-color text-4xl mx-1 my-2" />
						{/* <FaPhoenixFramework className="font-fifth-color text-4xl mx-1 my-2" /> */}
						<SiRubyonrails className="font-fifth-color text-4xl mx-1 my-2" />
						{/* <SiJavascript className="font-fifth-color text-4xl mx-1 my-2" /> */}
						<SiReact className="font-fifth-color text-4xl mx-1 my-2" />
						<FaAws className="font-fifth-color text-4xl mx-1 my-2" />
						<BiLogoPostgresql className="font-fifth-color text-4xl mx-1 my-2" />
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default About;
