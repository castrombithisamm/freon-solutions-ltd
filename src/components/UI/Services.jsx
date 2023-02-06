import React from "react";
import "../../styles/services.css";
const serviceData = [
	{
		icon: "ri-fridge-fill",
		title: "Office Furniture",
		description:
			"Explore our solutions for working, healing, and learning. We feature the highest-quality office furniture solution, project just for you.",
	},
	{
		icon: "ri-printer-fill",
		title: "Office Stationery",
		description:
			"If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.",
	},
	{
		icon: "ri-computer-line",
		title: "Computers and Accessories",
		description:
			"We supply high-quality, affordable and a wide range of pc accessories ranging from computer cables, desktop accessories, drives, and storage devices to keyboards.",
	},
	{
		icon: "ri-building-2-line",
		title: "Office Partitions and Fittings",
		description:
			"Our premium quality office partitioning services are a great option for designing an office, and they usually come with a wide variety of incredible options for your walls and doors.",
	},
	{
		icon: "ri-fridge-fill",
		title: "General Hardware & Building Materials",
		description:
			"Everything for your Builders, Plumbers, Trades and Renovators. We offer an extensive range of building supplies products and services.",
	},
	{
		icon: "ri-battery-line",
		title: "Lubricants/Tyres and Batteries",
		description:
			"Leading supplier of automobile tyres and batteries. Dealing in various brands and qualities of tyres and batteries for all types of vehicles.",
	},

	{
		icon: "ri-service-line",
		title: "Laboratory Reagents",
		description:
			"Suppliers of laboratory chemicals, consumables and equipment covering and Eastern Africa.",
	},
	{
		icon: "ri-fridge-fill",
		title: "Dry Food Stuffs & Beverages",
		description:
			"Renowned supplier of all types of Dry foods in Kenya. Rich nutritional value are some of the features of our dry foods that distinguish our products in the market.",
	},
	{
		icon: "ri-creative-commons-nc-line",
		title: "Fresh Vegetables and Fruits",
		description:
			"We supply high quality fresh fruits, vegetables and flowers from Kenya.",
	},
];

const Services = () => {
	return (
		<section className="service">
			<div className="container">
				<div className="services__top-content">
					<h6 className="subtitle">Our Services</h6>
					<h2>We have the personal touch, strength,</h2>
					<h2>resources, experience and a capable team to provide</h2>
					<h2 className="highlight">
						personalised services required to meet the needs of our clients.
					</h2>
				</div>
				<div className="service__item-wrapper">
					{serviceData.map((item, index) => (
						<div className="services__item" key={index}>
							<span className="service__icon">
								<i class={item.icon}></i>
							</span>
							<h3 className="service__title">{item.title}</h3>
							<p className="description">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
