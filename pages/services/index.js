import ServiceCard from "../components/ServiceCard";
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
						"Fuel your project's success with our proficiency in Front End, Back End, and Full Stack Development. We employ state-of-the-art technologies to craft a tailored digital solution that precisely aligns with your requirements.."
					}
				/>
				<ServiceCard
					title={"Web Design"}
					img={"/creative.jpg"}
					body={
						"Translate your concepts into reality and cultivate a unique user experience with our professional web design services. Our team is dedicated to transforming your ideas into a captivating website that sets you apart."
					}
				/>
				<ServiceCard
					title={"Mobile Development"}
					img={"/mobile.jpg"}
					body={
						"Reach the full potential of your mobile presence with our expert mobile development services, ensuring seamless user experiences and unparalleled success."
					}
				/>
			</div>
			<div className="flex flex-wrap justify-around">
				<ServiceCard
					title={"SEO"}
					img={"/seo.jpg"}
					body={
						"Maximize your business's potential for success by harnessing the power of SEO best practices with our expert services.."
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
