import { Cutive_Mono } from "@next/font/google";
import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});
const Footer = () => {
	return (
		<section className="mt-5 flex flex-wrap lg:flex-row justify-around fourth-color font-first-color">
			<div
				className={`${font.className} flex flex-row justify-around p-2`}
			>
				<div className="lg:mx-5">
					<h2 className="text-center">MENU</h2>
					<hr></hr>
					<div className="flex flex-row">
						<div className="flex flex-col">
							<Link href="/" className="px-3">
								Home
							</Link>
							<Link href="/about" className="px-3">
								About
							</Link>
							<Link href="/projects" className="px-3">
								Projects
							</Link>
						</div>
						<div className="flex flex-col">
							<Link href="/services" className="px-3">
								Services
							</Link>
							<Link href="/contact" className="px-3">
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
								href="https://www.linkedin.com/company/pointbreak-dev/"
								className="text-3xl m-auto mx-3"
							>
								{" "}
								<FaLinkedin className="my-2" />
							</a>
						</div>
						<div className="flex">
							<a
								href="mailto: pointbreak.se@gmail.com"
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
