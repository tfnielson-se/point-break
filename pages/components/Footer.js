import { Cutive_Mono } from "@next/font/google";
import Link from "next/link";

const font = Cutive_Mono({
	subsets: ["latin"],
	weight: "400",
});
const Footer = () => {
	return (
		<section className="pt-5">
        <hr></hr>
			<div
				className={`${font.className} flex justify-around p-2 fourth-color font-first-color`}
			>
				<div className="mx-5 flex flex-col ">
					<h2 className="text-center">MENU</h2>
                    <hr></hr>
					<Link href="/" className="">
						Home
					</Link>
					<Link href="/about" className="">
						About
					</Link>
					<Link href="/projects" className="">
						Projects
					</Link>
					<Link href="/services" className="">
						Services
					</Link>
					<Link href="/contact" className="">
						Contact
					</Link>{" "}
				</div>
				<div className="mx-5">
					<h2 className="text-center">SERVICES</h2>
                    <hr></hr>
				</div>
				<div className="mx-5 flex flex-col">
					<h2 className="text-center">CONTACT</h2>
                    <hr></hr>
                    <a
								href="https://github.com/tfnielson-se"
								className=""
							>
								{" "}
								tfnielson-se
							</a>
                            <a
								href="https://www.linkedin.com/company/pointbreak-dev/"
								className=""
							>
								{" "}
								point.break
							</a>
                            <a
								href="mailto: pointbreak.se@gmail.com"
								className=""
							>
								{" "}
								pointbreak.se@gmail.com
							</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
