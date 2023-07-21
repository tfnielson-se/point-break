
const ProjectCard = ({ title, url, body }) => {
	return (
		<div
			className={`bring-up max-w-lg rounded-sm m-5 border-l-8 border-b-8 border-r-8 border-stone-900`}
		>
			<div className="">
				<h1 className="fifth-color text-3xl font-bold uppercase px-4 py-2">
					<strong
						className={`px-2 cutive-mono first-color rounded`}
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
				<div className="first-color w-full py-1">
					<a
						href={`${url}`}
						className="font-third-color text-2xl tracking-wide px-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						url:{url ? "[view]" : "[coming soon...]"}
					</a>
				</div>
			</div>

			{/* <img className="object-cover" src={img} alt="service-image - veecteezy.com"/> */}
		</div>
	);
};

export default ProjectCard;
