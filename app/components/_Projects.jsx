"use client"
import { VscGithub } from "react-icons/vsc";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {
	const projList = [
		{
			title: "TBWinder",
			body: "Phase 1: Real Estate Investments Company Rebranding and Front-End Website Redesign.",
            body2: "Phase 2: Business Software Development, Data Analytic Dashboard, AWS Setup",
            url: "https://www.tbwinder.com/"
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
			>
				<section className="flex flex-wrap">
					<section>
						<div className="m-5 lg:m-10 lg:w-2/3">
							<p
								className={`first-color font-third-color text-5xl p-1 bring-up`}
							>
								Development
							</p>
						</div>
						<div className="lg:px-20">
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
					</section>
					<section>
							<section className="">
                                <div className="m-5 lg:m-10 lg:w-2/3">
								<p
									className={`first-color font-third-color text-5xl p-1 bring-up`}
								>
Solutions
								</p>
                                </div>
								<div className="lg:px-20">
									<ProjectCard
										title={"Kahilla"}
										body={"AWS Solutions: IAM, S3, RDS, Lambda, CloudWatch, PostgreSQL"}
                                        // url={"https://www.kahilla.com/"}
									/>
							</div>
						</section>
					</section>
				</section>
                <div className="flex flex-wrap justify-center font-fifth-color lg:m-5 text-5xl lg:text-6xl shadow-xl border-y-8 lg:border-8 border-stone-900 rounded">
						<img
							src="/texture.jpg"
							className="object-cover w-full"
						/>
					</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Projects;
