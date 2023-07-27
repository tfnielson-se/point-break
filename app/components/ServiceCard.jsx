import { Share_Tech_Mono } from "next/font/google";
import Image from "next/image";

const font = Share_Tech_Mono({
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
			className={`min-h-screen w-full flex flex-col justify-around text-center first-color my-5 py-5`}
		>
			<div className="">
				<div>
					<h1 className="text-5xl lg:text-6xl">
						<strong className={`${font.className}`}>{title}</strong>
					</h1>
				</div>
				<div className="flex flex-wrap justify-center my-5">
					<p
						className={`text-2xl tracking-wide px-4 py-1`}
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
				<ol className="underline text-2xl tracking-wide px-10 lg:px-10 py-2">
					<li className="py-2">{li1}</li>
					<li className="py-2">{li2}</li>
					<li className="py-2">{li3}</li>
					<li className="py-2">{li4}</li>
				</ol>
			</div>
			<div className="flex flex-col justify-center">
				{client1 ? (
					<div className="flex justify-center my-2 rounded">
						<Image
							src={client1}
							width={300}
							height={300}
							alt={"logo"}
							className="rounded"
						/>
					</div>
				) : null}
				{client1 ? (
					<div className="my-2">
						<h2 className="underline">Clients</h2>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ServiceCard;
