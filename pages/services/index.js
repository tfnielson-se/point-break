import ServiceCard from "../ServiceCard";
import { motion, AnimatePresence } from "framer-motion";


const Services = () => {
	return (
		<>
                <AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ delay: 0.25 }}
				>
			<div className="flex flex-wrap justify-around">
				<ServiceCard
					title={"Software Engineering"}
					img={"/coding.jpg"}
					body={
						"Front End, Back End, & Full Stack Development using the best technology specific for your project."
					}
				/>
				<ServiceCard
					title={"Web Design"}
					img={"/creative.jpg"}
					body={
						"Your ideas made into reality and transformed into an unique user experience."
					}
				/>
				{/* <ServiceCard
					title={"Mobile Development"}
					img={"/mobile.jpg"}
					body={
						""
					}
				/> */}
			</div>
			<div className="flex flex-wrap justify-around">
				<ServiceCard
					title={"SEO"}
					img={"/seo.jpg"}
					body={
						"Focusing on SEO best practices to make your business thrive."
					}
				/>
				<ServiceCard
					title={"Custom"}
					img={"/design.jpg"}
					body={
						"Using the best technologies available to help your ideas reach their full potential."
					}
				/>
			</div>
            </motion.div>
            </AnimatePresence>
		</>
	);
};

export default Services;
