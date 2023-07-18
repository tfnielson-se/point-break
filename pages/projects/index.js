"use client";
import { VscGithub } from "react-icons/vsc";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

const Projects = () => {
	const projList = [
		{
			title: "TBWinder",
			body: "Real Estate Investments Company Rebranding and Website Design.",
            url: "https://www.tbwinder.com/"
		},
		// {
		// 	title: "Airio Pet Services",
		// 	body: "Dog Walking and Pet Care Services",
		// },
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
								Websites
							</p>
						</div>
						<div className="lg:px-20">
							{items.map((item) => (
								<ProjectCard
									key={item.title}
									title={item.title}
									body={item.body}
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
									Our Work
								</p>
                                </div>
								<div className="lg:px-20">
									<ProjectCard
										title={"Kahilla"}
										body={"AWS Solutions: IAM, S3, RDS, Lambda, CloudWatch"}
                                        url={"https://www.kahilla.com/"}
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
