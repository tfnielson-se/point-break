import { Cutive_Mono } from "@next/font/google";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});

const ProjectCard = ({ title, url, body }) => {
	return (
		<div
			className={`bring-up max-w-md rounded-sm second-color m-5`}
		>
			<div className="">
				<h1 className="fifth-color text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`px-2 ${font.className} font-second-color`}
					>
						{title}
					</strong>
				</h1>
				<p className="font-third-color mt-1 text-2xl tracking-wide px-4 py-2">
					{body}
				</p>
                <p className="font-fifth-color mt-1 text-2xl tracking-wide px-4 py-2">
					url:{url ? url : 'coming soon..'}
				</p>
			</div>

			{/* <img className="object-cover" src={img} alt="service-image - veecteezy.com"/> */}
		</div>
	);
};

export default ProjectCard;
