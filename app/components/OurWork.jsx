"use client";
import { VscGithub } from "react-icons/vsc";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Customers = () => {
	const projList = [
		{
			title: "TBWinder",
			body: "Real Estate Investments Company Rebranding and Website Redesign.",
            body2:"TBWinder is one-stop-shop real estate firm focusing on real estate sales, private asset based lending, passive investment opportunities, short term real estate development, and joint venture relationships to complete the capital stack for top-tier Real Estate investors throughout Greater Boston and New England, USA.",
			// body2: "Phase 2: Business Software Development, Data Analytic Dashboard, AWS Setup",
			url: "https://www.tbwinder.com/",
		},
	];
	const [items, setItems] = useState(projList);

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
				className=""
			>
				<section className="">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`w-max text-3xl lg:text-5xl p-1 bring-up m-auto`}
						>
							Our Work, your success.
						</p>
					</div>
					<section className="projects-bg m-3 rounded-3xl">
						<div className="flex flex-wrap">
							<div className="m-auto">
								{items.map((item) => (
									<ProjectCard
										key={item.title}
										title={item.title}
										body={item.body}
										body2={item.body2}
										url={item.url}
									/>
								))}
							</div>
							<div className="flex flex-wrap justify-around m-auto pb-5">
								<div>
									<img
										src="/tbwinder.png"
										className="object-cover lg:h-48 w-auto"
									/>
								</div>
								<div>
									<img
										src="/tbwinder-ipad.png"
										className="h-48 lg:h-48 w-auto shadow-xl rounded-2xl"
									/>
								</div>
								<div>
									<img
										src="/tbwinder-iphone.png"
										className="h-48 lg:h-48 w-auto shadow-xl rounded-2xl"
									/>
								</div>
							</div>
						</div>
					</section>
					<div className="flex flex-wrap justify-center border-y-8 border-stone-900 shadow-xl">
						<img
							src="/texture.jpg"
							className="object-cover lg:h-96 w-full"
						/>
					</div>
					<section className="about-bg m-3 rounded-3xl">
						<section className="flex flex-wrap">
							<div id={"kahilla"} className="m-auto ">
								<ProjectCard
									title={"Kahilla"}
									body={
										"AWS Solutions: IAM, S3, RDS, Lambda, CloudWatch, PostgreSQL. Development of Python Scrypt for automation of daily tasks."
									}
                                    body2={'Kahilla partners with top companies to bolster their Diversity and Learning & Development initiatives. As we look to the future, our community is united by a common goal: break down barriers that have long kept too many brilliant minds from taking their rightful seats at the highest levels of leadership.'}
								/>
							</div>
								<div className="flex flex-wrap justify-around m-auto">
									<div>
										<img
											src="/aws-scrypt.png"
											className="h-96 w-auto"
										/>
									</div>
								</div>
						</section>
					</section>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Customers;
