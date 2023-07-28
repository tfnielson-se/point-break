import { Cutive_Mono } from "next/font/google"

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});
const ProjectCard = ({ title, url, body, body2 }) => {
	return (
		<div
			className={`max-w-lg rounded-sm my-5`}
		>
			<div className="">
				<h1 className="fifth-color text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`${font.className}  px-2 cutive-mono first-color rounded`}
					>
						{title}
					</strong>
				</h1>
                <p className="font-third-colo my-1 text-2xl tracking-wide px-4 py-2 underline">
					Project Scope:
				</p>
				<p className="font-third-colo my-1 text-2xl tracking-wide px-4 py-2">
					{body}
				</p>
                <p className="font-third-colo my-1 text-2xl tracking-wide px-4 py-2">
					{body2}
				</p>
				<div className="w-full py-1 px-4">
					<a
						href={`${url}`}
						className="text-2xl tracking-wide px-2 nav-btn second-color p-3 rounded-2xl"
						target="_blank"
						rel="noopener noreferrer"
					>
						{url ? "VIEW PROJECT" : "[N/A...]"}
					</a>
				</div>
			</div>

			{/* <img className="object-cover" src={img} alt="service-image - veecteezy.com"/> */}
		</div>
	);
};

export default ProjectCard;
