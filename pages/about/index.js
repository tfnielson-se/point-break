import { FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { SiElixir } from 'react-icons/si';
import {FaPhoenixFramework} from 'react-icons/fa';
import {SiRubyonrails} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import{SiReact} from 'react-icons/si';
import {SiNextdotjs} from 'react-icons/si';

const About = () => {
	return (
		<>
			<div className="bring-up flex justify-center my-5">
				<div className="max-w-2xl overflow-hidden rounded-b-xl rounded-t-md shadow-md ">
					<div className="second-color h-5"></div>
					<div>
						<p className="font-fourth-color text-center bg-transparent rounded-tl-l text-6xl">
							<strong className="bg-gray-800 px-4 tracking-widest">
								point.break
							</strong>
						</p>
					</div>
					<div className="p-6 second-color">
						<div>
							<span className="text-2xl font-medium font-fourth-color bg-gray-700 px-2">
								ABOUT US
							</span>
							<p className="mt-2 text-lg">
								Our mission is to help businesses and
								individuals achieve their goals through the
								power of technology. We are committed to
								providing high-quality software development
								services that are tailored to meet our clients'
								unique needs and requirements. Our goal is to
								deliver reliable, efficient, and scalable
								solutions that drive business growth and
								success. We believe in building long-term
								relationships with our clients, based on trust,
								communication, and collaboration. Our passion
								for technology and commitment to excellence
								drives us to continuously learn and innovate, in
								order to provide the best possible service to
								our clients.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center text-center m-auto my-10 max-w-2xl">
				<div className="bring-up second-color w-full mx-3 rounded-b-xl rounded-t-md">
					<p className="text-2xl first mb-5">
						<strong className="bg-gray-700 p-2">Stacks</strong>
					</p>
					<p className="text-xl pb-1">
						{" "}
						Python / Django{" "}
						<span className="font-first-color">|</span> Elixir /
						Phoenix / LiveView{" "}
						<span className="font-first-color">|</span> Ruby on Rails{" "}
						<span className="font-first-color">|</span> JavaScript /
						React.js / Next.js{" "}
					</p>
                    <p className="text-xl pb-5">
                    We utilize cutting-edge technologies that are highly regarded in the industry to deliver top-quality solutions to our clients.
                    </p>
                  
				</div>
			</div>
        <div className="flex justify-around pb-3">
            <FaPython className="text-6xl mx-1"/>
            <SiDjango className="text-6xl mx-1"/>
            <SiElixir className="text-6xl mx-1"/>
            <FaPhoenixFramework className="text-6xl mx-1"/>
            <SiRubyonrails className="text-6xl mx-1"/>
            <SiJavascript className="text-6xl mx-1"/>
            <SiReact className="text-6xl mx-1"/>
            <SiNextdotjs className="text-6xl mx-1"/>
        </div>
		</>
	);
};

export default About;
