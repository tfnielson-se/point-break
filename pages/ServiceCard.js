import { Cutive_Mono } from "@next/font/google";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const ServiceCard = ({title, img, body}) => {
    return(
        <div className={`bring-up max-w-md overflow-hidden rounded-sm second-color m-5`}>
				<div className="">
					<h1 className="fourth-color text-3xl font-bold text-gray-800 uppercase px-4 py-2">
						<strong className={`px-2 ${font.className} font-fourth-color`}>{title}</strong>
					</h1>
					<p className="mt-1 text-xl tracking-wide px-4 py-2">
						{body}
					</p>
				</div>

				<img className="object-cover w-full h-64 mt-2" src={img} alt="service-image - veecteezy.com"/>
			</div>
    )
}

export default ServiceCard;