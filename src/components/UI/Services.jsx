import React from "react";
import "../../styles/services.css";
const serviceData= [
    {
        icon: 'ri-fridge-fill',
        title: 'Office Furniture',
        description: 'If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.'
    },
    {
        icon: 'ri-fridge-fill',
        title: 'Office Stationery',
        description: 'If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.'
    },
    {
        icon: 'ri-fridge-fill',
        title: 'Office Stationery',
        description: 'If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.'
    },
    {
        icon: 'ri-fridge-fill',
        title: 'Office Stationery',
        description: 'If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.'
    },
    {
        icon: 'ri-fridge-fill',
        title: 'Office Stationery',
        description: 'If you’re thinking paper, inks and toners say no more because it’s already done. What your business needs is a supplier that can provide the best of office products and supplies at great prices and convenience. What your business needs is Freon Solutions Ltd.'
    },
]

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
					<div className="services__item">
						<span className="service__icon">
							<i class="ri-fridge-fill"></i>
						</span>
						<h3 className="service__title">Office Stationery</h3>
						<p className="description">
							If you’re thinking paper, inks and toners say no more because it’s
							already done. What your business needs is a supplier that can
							provide the best of office products and supplies at great prices
							and convenience. What your business needs is Freon Solutions Ltd.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
