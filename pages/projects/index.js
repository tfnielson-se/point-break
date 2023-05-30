import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
	return (
        <AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
        <div className="lg:m-10">
            <ProjectCard title={"TBWinder"} body={"Real Estate Investements"}/>
            <ProjectCard title={"Airio Pet Services"} body={"Dog Walking and Pet Care & Services"}/>

        </div>
        </motion.div>
        </AnimatePresence>

	);
};

export default Projects;
