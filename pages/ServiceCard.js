const ServiceCard = ({title, img, body}) => {
    return(
        <div className="bring-up max-w-md overflow-hidden rounded-lg shadow-lg second-color">
				<div className="">
					<h1 className="fourth-color text-3xl font-bold text-gray-800 uppercase px-4 py-2">
						<strong className="bg-gray-700 px-2 py">{title}</strong>
					</h1>
					<p className="mt-1 text-lg tracking-wide px-4 py-2">
						{body}
					</p>
				</div>

				<img className="object-cover w-full h-64 mt-2" src={img} alt="service-image - veecteezy.com"/>
			</div>
    )
}

export default ServiceCard;