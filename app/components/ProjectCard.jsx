import { Share_Tech_Mono } from "next/font/google";

const font = Share_Tech_Mono({
	subsets: ["latin"],
	weight: "400",
});
const ProjectCard = ({ title, url, body, body1, body2 }) => {
	return (
		<div className={`max-w-lg rounded-sm py-5`}>
			<div className="">
				<h1 className="text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`${font.className}  px-2 cutive-mono first-color rounded-tl-xl rounded-br-xl`}
					>
						{title}
					</strong>
				</h1>
				<p className="my-1 text-xl tracking-wide px-4 py-2 underline">
					Project Scope:
				</p>
				<p className="first-color my-1 text-lg rounded-tl-3xl rounded-br-3xl tracking-wide px-4 py-2">
					{body}
				</p>
				<p className="my-1 tracking-wide px-4 py-2">{body1}</p>

				<p className="my-1 tracking-wide px-4 py-2">{body2}</p>
				<div className=" py-1 px-4">
					{url ? (
						<a
							href={`${url}`}
							className="text-2xl tracking-wide px-2 first-color border-4 border-stone-900 nav-btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							VIEW PROJECT
						</a>
					) : null}
				</div>
			</div>

			{/* <img className="object-cover" src={img} alt="service-image - veecteezy.com"/> */}
		</div>
	);
};

export default ProjectCard;
