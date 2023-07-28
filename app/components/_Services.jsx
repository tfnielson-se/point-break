"use client"
import ServiceCard from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

import {TbDatabase} from 'react-icons/tb'
import {MdComputer, MdOutlineDesignServices, MdMobileFriendly, MdAccessibility, MdOutlineDataset, MdOutlineSpaceDashboard, MdConnectWithoutContact, MdOutlineSupport} from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'
import {PiGraphDuotone} from 'react-icons/pi'
import {DiAws} from 'react-icons/di'


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
                            icon1={<MdOutlineDesignServices/>}
                            icon2={<TbDatabase/>}
                            icon3={<MdComputer/>}
                            li1={"Frontend"}
                            li2={"Backend"}
                            li3={"Full Stack Development"}
                            li4={"Business Software Architecture"}
                            client1={'/tbWinder_black_high-res.png'}
							body={
								"Tailored solutions that precisely aligns with your vision."
							}
						/><ServiceCard
							title={"UX/UI"}
                            icon1={<MdMobileFriendly/>}
                            icon2={<MdAccessibility/>}
                            icon3={<BiWorld/>}
                            li1={"Mobile First"}
                            li2={"Responsive"}
                            li3={"Multilingual Accessibility"}
                            li4={"ADA Compliant"}
                            client1={'/tbWinder_black_high-res.png'}
							body={
								"Seamless user experiences, unparalleled success."
							}
						/>
					</div>
					<div className="flex flex-wrap justify-center shadow-xl ">
						<img
							src="/plan.jpg"
							className="object-cover lg:h-96 w-full "
						/>
					</div>
					<div className="flex flex-wrap justify-around">
                        <ServiceCard
							title={"Data Analytics"}
                            icon1={<MdOutlineDataset/>}
                            icon2={<PiGraphDuotone/>}
                            icon3={<MdOutlineSpaceDashboard/>}
                            li1={"Data Extraction, Cleaning, and Processing"}
                            li2={"Data Analysis"}
                            li3={"Data Visualization"}
                            li4={"Dashboard Development"}
                            client1={'/kahilla.png'}
							body={
								"Drive your growth with Data driven decisions."
							}
						/>
                         <ServiceCard
							title={"AWS"}
                            icon1={<MdConnectWithoutContact/>}
                            icon2={<DiAws/>}
                            icon3={<MdOutlineSupport/>}
                            li1={"IAM, S3, EC2, RDS, Setup and Solutions"}
                            li2={"Custom Python Scripting"}
                            li3={"Database Management"}
                            li4={"Integration Support"}
                            client1={'/kahilla.png'}
							body={
								"Experience seamless migration, scalable applications, and cost-efficiency."
							}
						/>
					</div>
                    <div className="flex flex-wrap justify-center shadow-xl ">
						<img
							src="/servers.jpg"
							className="object-cover lg:h-96 w-full"
						/>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Services;
