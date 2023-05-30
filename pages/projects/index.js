"use client";

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
				<div className="flex flex-wrap">
					<div className="m-5 lg:m-10">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Live Websites
						</p>
						{items.map((item) => (
							<ProjectCard title={item.title} body={item.body} />
						))}
					</div>
					<div className="m-5 lg:m-10">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Own Projects
						</p>
						<ProjectCard
							title={"River Log"}
							body={"Coming soon... A river journal app"}
						/>
						{/* <ProjectCard
							title={""}
							body={""}
						/> */}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Projects;
