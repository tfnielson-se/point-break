// [<0>]
import Link from "next/link";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Home = () => {
	return (
		<>
			<div className="text-center mt-20">
				<div className="">
					<p className=" home-title font-fourth-color text-center bg-transparent rounded-tl-l text-6xl">
						<strong className="bg-gray-800 px-4 tracking-widest">
							point.break
						</strong>
					</p>
				</div>
				<div className="flex flex-row justify-around w-full mt-1">
					<div>
						<p className="text-blue-600 text-4xl fourth-color px-3 italic">
							Software Engineering & Development
						</p>
					</div>
				</div>
            <button className="text-2xl mt-10 bg-gray-700 py-3 px-10 font-first-color second-color rounded-lg"> Explore </button>
			</div>
		</>
	);
};

export default Home;
