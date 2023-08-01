import { Miriam_Libre } from "next/font/google";
import Image from "next/image";

const font = Miriam_Libre({
	subsets: ["latin"],
	weight: "400",
});
const ServiceCard = ({
	title,
	body,
	li1,
	li2,
	li3,
	li4,
	icon1,
	icon2,
	icon3,
	client1,
	client2,
	client3,
}) => {
	return (
		<div
			className={`flex flex-col lg:w-1/3 justify-around text-center first-color border-4 border-green-300 m-5 shadow-xl rounded-3xl`}
		>
			<div className="">
				<div className="p-3">
					<h1 className="text-3xl lg:text-4xl">
						<strong className={`${font.className}`}>{title}</strong>
					</h1>
				</div>
				<div className="flex flex-wrap justify-center my-5">
					<p
						className={`text-lg tracking-wide px-4 py-1`}
					>
						{body}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-center my-5 text-blue-400">
				<p className="text-6xl text-center tracking-wide leading-relaxed px-3">
					{icon1}
				</p>
				<p className="font-first-color my-auto">|</p>{" "}
				<p className="text-6xl text-center tracking-wide leading-relaxed px-3">
					{" "}
					{icon2}
				</p>
				<p className="font-first-color my-auto">|</p>{" "}
				<p className="text-6xl text-center tracking-wide leading-relaxed px-3 ">
					{icon3}
				</p>
			</div>
			<div>
				<ol className="underline text-xl tracking-wide px-10 lg:px-10 py-2">
					<li className="py-2">{li1}</li>
					<li className="py-2">{li2}</li>
					<li className="py-2">{li3}</li>
					<li className="py-2">{li4}</li>
				</ol>
			</div>
		</div>
	);
};

export default ServiceCard;
