"use client";
import { VscGithub } from "react-icons/vsc";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

const Projects = () => {
	const projList = [
		{
			title: "TBWinder",
			body: "Real Estate Investments",
		},
		{
			title: "Airio Pet Services",
			body: "Dog Walking and Pet Care Services",
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
                <section className="m-5">
                 <div className="m-5 lg:m-10 lg:w-1/4">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Live Websites
						</p>
					</div>
					<div className="my-5">
						{items.map((item) => (
							<ProjectCard key={item.title} title={item.title} body={item.body} />
						))}
					</div>
				<div className="flex flex-wrap">
					<div className="m-5 lg:m-10">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Own Projects
						</p>
						<ProjectCard
							title={"TBD"}
							body={"Coming soon..."}
						/>
						{/* <ProjectCard
							title={""}
							body={""}
						/> */}
                    <div className="flex jusitfy-center font-first-color">
							<VscGithub className="text-6xl m-5" />
							{/* <span className="text-2xl">developer: </span> */}
							<a
								href="https://github.com/tfnielson-se"
								className="text-2xl nav-btn m-auto mx-3"
							>
								{" "}
								tfnielson-se
							</a>
						</div>
					</div>
				</div>
                </section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Projects;
