"use client";
import ServiceCard from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

import { TbDatabase } from "react-icons/tb";
import {
	MdComputer,
	MdOutlineDesignServices,
	MdMobileFriendly,
	MdAccessibility,
	MdOutlineDataset,
	MdOutlineSpaceDashboard,
	MdConnectWithoutContact,
	MdOutlineSupport,
} from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { PiGraphDuotone } from "react-icons/pi";
import { DiAws } from "react-icons/di";

const Services = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.25 }}
				className=""
			>
				<section className="">
					<div className="p-5 lg:p-10 md:h-48 lg:h-96 title-bg flex text-center">
						<p
							className={`w-max text-3xl lg:text-5xl p-1 bring-up tracking-wider m-auto`}
						>
							Simple creative solutions to help your business stay
							relevant.
						</p>
					</div>
					<div className="flex flex-wrap justify-around lg:m-3 services-bg lg:rounded-t-3xl rounded-bl-3xl">
						<ServiceCard
							title={"Software Development"}
							icon1={<MdOutlineDesignServices />}
							icon2={<TbDatabase />}
							icon3={<MdComputer />}
							li1={"Frontend"}
							li2={"Backend"}
							li3={"Full Stack Development"}
							li4={"Business Software Architecture"}
							client1={"/tbWinder_black_high-res.png"}
							body={
								"Tailored  that precisely aligns with your vision."
							}
						/>
						<img
							src="/webdev.jpg"
							className="object-cover md:w-1/3 lg:w-1/2 lg:h-96 m-auto shadow-2xl rounded-tr-2xl rounded-bl-3xl"
						/>
					</div>
					<div className="flex flex-wrap justify-around m-3 rounded-b-3xl rounded-tr-3xl">
						<img
							src="/webdesign.jpg"
							className="hidden md:block lg:block object-cover w-full md:w-1/3 lg:w-1/2 lg:h-96 m-auto shadow-2xl border-4 border-blue-400 rounded-tl-2xl rounded-br-3xl"
						/>
						<ServiceCard
							title={"UX/UI"}
							icon1={<MdMobileFriendly />}
							icon2={<MdAccessibility />}
							icon3={<BiWorld />}
							li1={"Mobile First"}
							li2={"Responsive"}
							li3={"Multilingual Accessibility"}
							li4={"ADA Compliant"}
							client1={"/tbWinder_black_high-res.png"}
							body={
								"Seamless user experiences, unparalleled success."
							}
						/>
					</div>
					<div className="flex flex-wrap justify-around about-bg lg:m-3 lg:rounded-t-3xl rounded-br-3xl">
						<ServiceCard
							title={"Data Analytics"}
							icon1={<MdOutlineDataset />}
							icon2={<PiGraphDuotone />}
							icon3={<MdOutlineSpaceDashboard />}
							li1={"Data Extraction, Cleaning, and Processing"}
							li2={"Data Analysis"}
							li3={"Data Visualization"}
							li4={"Dashboard Development"}
							client1={"/kahilla.png"}
							body={
								"Drive your growth with Data driven decisions."
							}
						/>
						<img
							src="/data.jpg"
							className="object-cover md:w-1/3 lg:w-1/2 lg:h-96 m-auto shadow-2xl rounded-tl-2xl rounded-br-3xl"
						/>
					</div>
					<div className="flex flex-wrap justify-around m-3 ">
						<img
							src="/cloud.jpg"
							className="hidden md:block lg:block object-cover w-full md:w-1/3 lg:w-1/2 lg:h-96 m-auto shadow-2xl border-4 border-blue-400 rounded-tl-2xl rounded-br-3xl"
						/>
						<ServiceCard
							title={"AWS Solutions"}
							icon1={<MdConnectWithoutContact />}
							icon2={<DiAws />}
							icon3={<MdOutlineSupport />}
							li1={"IAM, S3, EC2, RDS, Setup and Management"}
							li2={"Custom Python Scripting"}
							li3={"Database Management"}
							li4={"Integration Support"}
							client1={"/kahilla.png"}
							body={
								"Experience seamless migration, scalable applications, and cost-efficiency."
							}
						/>
					</div>
					{/* <div className="flex flex-wrap justify-center shadow-xl ">
						<img
							src="/servers.jpg"
							className="object-cover lg:h-96 w-full m-5"
						/>
					</div> */}
				</section>
			</motion.div>
		</AnimatePresence>
	);
};

export default Services;
