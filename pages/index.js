// [<0>]
import Link from "next/link";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiElixir } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Home = () => {
	return (
		<>
			<div className="text-center mt-20">
				<div className="">
					<p className=" home-title third-color text-center bg-transparent rounded-tl-l text-6xl">
						<strong className="bg-gray-700 px-4 tracking-widest">
							point.break
						</strong>
					</p>
				</div>
				<div className="flex flex-row justify-around w-full mt-1">
					<div>
						<p className="font-second-color text-4xl fourth-color px-3 italic">
							Software Engineering & Development
						</p>
					</div>
				</div>
            <button className="bring-up text-2xl mt-10 py-3 px-10 font-third-color hover:bg-cyan-100 rounded-lg tracking-wide hover:tracking-widest"> Experience </button>
            <div className="flex justify-around pb-3">
				<FaPython className="hover:text-sky-600 text-6xl mx-1" />
				<SiDjango className="hover:text-emerald-600 text-6xl mx-1" />
				<SiElixir className="hover:text-violet-500 text-6xl mx-1" />
				<FaPhoenixFramework className="hover:text-orange-500 text-6xl mx-1" />
				<SiRubyonrails className="hover:text-red-500 text-6xl mx-1" />
				<SiJavascript className="hover:text-yellow-400 text-6xl mx-1" />
				<SiReact className="hover:text-cyan-400 text-6xl mx-1" />
				<SiNextdotjs className="hover:text-stone-800 text-6xl mx-1" />
			</div>
			</div>
		</>
	);
};

export default Home;
