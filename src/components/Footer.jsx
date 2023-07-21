import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className="mt-5 flex flex-wrap lg:flex-row justify-around fourth-color font-first-color">
			<div
				className={`cutive-mono flex flex-row justify-around p-2 w-2/3`}
			>
				<div className="lg:mx-5">
					<h2 className="text-center">MENU</h2>
					<hr></hr>
					<div className="flex flex-row">
						<div className="flex flex-col">
							<Link to="/" className="px-3">
								Home
							</Link>
							<Link to="/about" className="px-3">
								About
							</Link>
							<Link to="/projects" className="px-3">
								Projects
							</Link>
						</div>
						<div className="flex flex-col">
							<Link to="/services" className="px-3">
								Services
							</Link>
							<Link to="/contact" className="px-3">
								Contact
							</Link>{" "}
						</div>
					</div>
				</div>
				<div className="mx-5">
					<h2 className="text-center">CONTACT</h2>
					<hr></hr>
					<div className="flex">
						<div className="flex flex-col">
							<a
								to="https://www.linkedin.com/company/pointbreak-dev/"
								className="text-3xl m-auto mx-3"
							>
								{" "}
								<FaLinkedin className="my-2" />
							</a>
						</div>
						<div className="flex">
							<a
								to="mailto: pointbreak.se@gmail.com"
								className="text-3xl m-auto mx-3"
							>
								{" "}
								<TfiEmail className="my-2" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-start my-auto p-2">
				<hr></hr>
				<img src="/logo_white.png" className="object-cover h-12 mx-5" />
				<div className="flex flex-col text-center">
					<p className="text-md">Point Break</p>
					<p className="text-sm">Software Engineering LLC, 2023</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
