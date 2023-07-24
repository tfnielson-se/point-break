import { Cutive_Mono } from "next/font/google";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});
const ServiceCard = ({ title, body, li1, li2, li3, li4, li5 }) => {
	return (
		<div
			className={`bring-up max-w-md fourth-color rounded-sm m-5 border-l-8 border-b-8 border-r-8 border-stone-900`}
		>
				<h1 className="first-color text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`${font.className} px-2 cutive-mono font-first-color fourth-color rounded`}
					>{title}
					</strong>
				</h1>
                <div className="flex flex-col lg:flex-row">
                <p className={`first-color text-2xl tracking-wide px-4 py-1`}>
					{body}
				</p>
				<ol className="list-disc mt- text-2xl tracking-wide px-10 lg:px-10 py-2 font-first-color border-l-8 border-t-8 border-t-gray-300 border-l-gray-400">
					<li className="py-1">{li1}</li>
					<li className="py-1">{li2}</li>
					<li className="py-1">{li3}</li>
					<li className="py-1">{li4}</li>
					{/* <li className="py-1">{li5}</li> */}
				</ol>
				
                </div>
			</div>
	);
};

export default ServiceCard;
