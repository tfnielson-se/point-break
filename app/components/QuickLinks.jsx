import Link from "next/link";

const QuickLinks = () => {
	return (
		// <section className="flex flex-wrap">
			<section className="flex flex-wrap justify-around lg:w-3/4">
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-about m-3 shadow-md">
					<Link href="/about#the-company" className="my-1 px-2">
						The Company
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-solutions m-3 shadow-md">
					<Link
						href="/solutions#software-development"
						className="my-1 px-2"
					>
						Software Development
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-solutions m-3 shadow-md">
					<Link href="/solutions#ux-ui" className="my-1 px-2">
						UX/UI
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-solutions m-3 shadow-md">
					<Link
						href="/solutions#data-analytics"
						className="my-1 px-2"
					>
						Data Analytics
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-ourwork m-3 shadow-md">
					<Link href="/ourwork" className="my-1 px-2">
						Web Design
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-ourwork m-3 shadow-md">
					<Link href="/ourwork#kahilla" className="my-1 px-2">
						Automation
					</Link>
				</div>

				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-solutions m-3 shadow-md">
					<Link href="/solutions#aws-solutions" className="my-1 px-2">
						Cloud Solutions
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-about m-3 shadow-md">
					<Link href="/about#resources" className="my-1 px-2">
						Resources
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-ourwork m-3 shadow-md">
					<Link href="/ourwork" className="my-1 px-2">
						Clients
					</Link>
				</div>
				<div className="text-lg leading-loose border-2 border-stone-900 rounded-t-2xl rounded-bl-2xl nav-btn-contact m-3 shadow-md">
					<Link href="/contact" className="my-1 px-2">
						Contact Us
					</Link>
				</div>

			</section>
		// </section>
	);
};

export default QuickLinks;
