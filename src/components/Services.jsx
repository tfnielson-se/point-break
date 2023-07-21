import ServiceCard from "../components/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
			>
				<section className="">
					<div className="m-5 lg:m-10 lg:w-1/4">
						<p
							className={`first-color font-third-color text-5xl p-1 bring-up`}
						>
							Services
						</p>
					</div>
					<div className="flex flex-wrap justify-around">
						<ServiceCard
							title={"Software Development Solutions"}
							img={"/coding.jpg"}
							body={
								"Front End, Back End, and Full Stack Development. We employ cutting-edge technologies to craft a tailored solution that precisely aligns with your vision."
							}
						/>
						<ServiceCard
							title={"Business Software Architecture"}
							img={"/seo.jpg"}
							body={
								"Maximize your business potential, streamline operations, enhance efficiency, and drive sustainable success with a Software thought for your business."
							}
						/>
                        <ServiceCard
							title={"AWS Solutions"}
							img={"/creative.jpg"}
							body={
								"IAM, S3, EC2, RDS, Custom Python Scripting, Database Management and Data Analysis. Experience seamless migration, scalable applications, and cost-efficiency."
							}
						/>
					</div>
					<div className="flex flex-wrap justify-center font-fifth-color lg:m-5 text-5xl lg:text-6xl shadow-xl border-y-8 lg:border-8 border-stone-900">
						<img
							src="/servers.jpg"
							className="object-cover lg:h-96 w-full"
						/>
					</div>
					<div className="flex flex-wrap justify-around">
						<ServiceCard
							title={"Mobile Development"}
							img={"/mobile.jpg"}
							body={
								"Seamless user experiences, unparalleled success approaching every project with a mobile-first focus."
							}
						/>
						<ServiceCard
							title={"Web Design"}
							img={"/creative.jpg"}
							body={
								"Provide unique user experience with our professional web design services. Our team is dedicated to transforming your ideas into a captivating website that sets you apart."
							}
						/>
						{/* <ServiceCard
							title={"Custom"}
							img={"/design.jpg"}
							body={
								"Using the best technologies available to help your ideas reach their full potential."
							}
						/> */}
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Services;
