"use client"
import ServiceCard from "./ServiceCard";
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
							title={"Software Development"}
                            li1={"Front-End"}
                            li2={"Back-End"}
                            li3={"Full Stack Development"}
                            li4={"Business Software Architecture"}
							body={
								"Tailored solutions that precisely aligns with your vision."
							}
						/><ServiceCard
							title={"Web Development"}
                            li1={"Mobile First"}
                            li2={"ADA Compliant"}
                            li3={"UX/UI Focused"}
                            li4={"Responsive"}
							body={
								"Seamless user experiences, unparalleled success."
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
							title={"Data Analytics"}
                            li1={"Data Extraction, Cleaning, and Processing"}
                            li2={"Data Analysis"}
                            li3={"Data Visualization"}
                            li4={"Dashboard Development"}
							body={
								"Drive your growth with Data driven decisions"
							}
						/>
                         <ServiceCard
							title={"AWS"}
                            li1={"IAM, S3, EC2, RDS, Setup and Solutions"}
                            li2={"Custom Python Scripting"}
                            li3={"Database Management"}
                            li4={"Data Analysis"}
							body={
								"Experience seamless migration, scalable applications, and cost-efficiency."
							}
						/>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Services;
