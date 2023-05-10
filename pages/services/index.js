import ServiceCard from "../ServiceCard";

const Services = () => {
	return (
		<>
			<div className="flex justify-around py-5">
				<ServiceCard
					title={"Software Engineering"}
					img={"/coding.jpg"}
					body={
						"Front End, Back End, & Full Stack Development using the best technology specific for your project."
					}
				/>
				<ServiceCard
					title={"Web Design"}
					img={"/creative.jpg"}
					body={
						"Your ideas made into reality and transformed into an unique user experience."
					}
				/>
				{/* <ServiceCard
					title={"Mobile Development"}
					img={"/mobile.jpg"}
					body={
						""
					}
				/> */}
			</div>
			<div className="flex justify-around py-3">
				<ServiceCard
					title={"SEO"}
					img={"/seo.jpg"}
					body={
						"Focusing on SEO best practices to make your business thrive."
					}
				/>
				<ServiceCard
					title={"Custom"}
					img={"/design.jpg"}
					body={
						"Using the best technologies available to help your ideas reach their full potential."
					}
				/>
			</div>
		</>
	);
};

export default Services;
