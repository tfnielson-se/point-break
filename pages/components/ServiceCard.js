import { Cutive_Mono } from "@next/font/google";
import { Share_Tech_Mono } from "@next/font/google";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});



const ServiceCard = ({ title, img, body }) => {
	return (
		<div
			className={`bring-up max-w-md rounded-sm fifth-color m-5`}
		>
			<div className="">
				<h1 className="second-color text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`px-2 ${font.className} font-fifth-color`}
					>
						{title}
					</strong>
				</h1>
				<p className={`font-second-color mt-1 text-2xl tracking-wide px-4 py-2`}>
					{body}
				</p>
			</div>

			{/* <img className="object-cover" src={img} alt="service-image - veecteezy.com"/> */}
		</div>
	);
};

export default ServiceCard;
