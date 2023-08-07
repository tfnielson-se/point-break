"use client";
import { FaPython } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { DiRubyRough } from "react-icons/di";
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
			>
				<section className="">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`text-3xl lg:text-5xl p-1 bring-up m-auto`}
						>
							About us, our focus, and commitment to your success.
						</p>
					</div>

					<div
						id={"the-company"}
						className="flex flex-row flex-wrap justify-around about-bg rounded-tl-3xl rounded-br-3xl my-5 px-3 max-w-7xl lg:my-5 lg:m-auto"
					>
						<div className="flex flex-col justify-center m-auto">
							<img
								src="/logo-white-bg.png"
								className="object-cover h-64 m-3"
							/>
							<p className="text-center py-2 font-first-color tracking-widest">
								SIMPLE.CREATIVE.SOLUTIONS
							</p>
						</div>
						<div className=" flex justify-center m-5 max-w-xl first-color shadow-2xl rounded-tl-2xl rounded-br-2xl">
							<div className="m-3">
								<p className="text-4xl first-color rounded py-1 px-3 lg:w-2/3 underline">
									<strong className={`${font.className}`}>
										THE COMPANY
									</strong>
								</p>
								<div>
									<p className="text-xl tracking-wide leading-relaxed text-left p-3">
										{"Simple.Creative.Solutions"}
									</p>
									<hr className="border-blue-400 mx-10"></hr>
									<p className="text-lg tracking-wide leading-relaxed text-left p-3">
										{
											"Founded in 2023 in Denver, CO, Point.Break has left a innovative imprint on the software development industry working with top FinTech, E-Learnign and E-Commerce companies increasing growth, engagement and revenue. Every project is approached with an open mind and without limitations to empower our developer's creativity and innovation."
										}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-around max-w-7xl m-auto">
						<div
							id="our-focus"
							className="border-4 border-stone-900 flex justify-center my-3 mx-5 max-w-lg first-color shadow-2xl rounded-3xl rounded-bl-none"
						>
							<div className="my-5">
								<p
									className={`${font.className} text-4xl w-3/4 lg:w-1/2 contact-bg p-2 rounded-r-full`}
								>
									OUR FOCUS
								</p>
								<div>
									<p className="text-lg tracking-wide leading-relaxed text-left p-3">
										{
											"From Software Development, to Data Analytics and Cloud Solutions, our focus is to enable businesses reach their full potential. Using state-of-the-art software technology and A.I tools. We deliver unparalleled Web and Mobile Apps, unique user experiences, and insightful data analytics solutions specific to your business."
										}
									</p>
								</div>
							</div>
						</div>
						<div
							id={"resources"}
							className="flex justify-left m-auto max-w-lg w-full my-5 mx-5 border-4 border-stone-900 first-color rounded-3xl rounded-br-none shadow-2xl"
						>
							<div className="my-3">
								<p
									className={`${font.className} text-4xl w-3/4 lg:w-1/2 ourwork-bg p-2 rounded-r-full my-3`}
								>
									RESOURCES
								</p>

								<p className="text-lg text-left px-3 tracking-wide leading-relaxed">
									{
										"At Point.Break we work with a dynamic stack of programming languages and platforms that allows us to tailor each solution to fit your business vision."
									}
								</p>
								<div className="flex flex-col my-1">
									<p className="ourwork-bg py-1 px-2 rounded-r-full w-fit">
										Software Development:
									</p>{" "}
									<p className="text-sm text-left tracking-wide leading-relaxed px-5">
										Elixir, Ruby, React
									</p>
									<p className="ourwork-bg py-1 px-2 rounded-r-full w-fit">
										Data Analytics:
									</p>{" "}
									<p className="text-sm text-left tracking-wide leading-relaxed px-5">
										Elixir, Python
									</p>
									<p className="ourwork-bg py-1 px-2 rounded-r-full w-fit">
										Cloud Solutions:
									</p>{" "}
									<p className="text-sm text-left tracking-wide leading-relaxed px-5">
										AWS, Azure, Google Cloud Platform
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="solutions-bg p-3 mt-5">
					<div className="flex justify-left m-auto my-3 max-w-lg mx-5 border-4 border-stone-900 first-color shadow-2xl rounded-3xl rounded-bl-none lg:m-auto lg:my-3">
						<div className=" flex flex-row">
							<div className="flex flex-col w-3/4">
								<p className="text-3xl px-2 m-3">
									<strong className={`p-1 ${font.className}`}>
										ELIXIR
									</strong>
								</p>
								<p className="text-md px-3 m-2 tracking-wide leading-relaxed">
									{
										"Elixir/Phoenix is our language of choice. Offering unparalleled concurrency, scalability, fault tolerance, and performance Elixir is the ideal candidate for real-time applications, communication platforms, and now data analytics."
									}
								</p>
							</div>
							<div className="flex flex-col rounded-br-xl w-1/4 border-l-8 border-yellow-400 h-3/4 m-auto">
								<div className="flex flex-col m-auto">
									<SiElixir className="text-7xl flex m-auto px-1 my-10 text-violet-900" />
									<FaPhoenixFramework className="text-7xl flex m-auto px-1 my-10 text-orange-700" />
								</div>
							</div>
						</div>
					</div>
				</section>
					<div className="flex flex-wrap justify-around p-3 contact-bg">
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
			</motion.div>
		</AnimatePresence>
	);
};

export default About;
