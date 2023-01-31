import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/Logistics-rafiki.svg";

const Hero = () => {
	return (
		<section className="hero__section">
			<div className="container">
				<div className="hero__wrapper">
					<div className="hero__content">
						<div>
							<h2> A Respected</h2>
							<h2>and Dependable </h2>
							<h2 className="highlight">Trading Company </h2>
						</div>
						<p className="description">
							Providing general supplies services since July 2017 with deep
							focus on technology and customer oriented mechanism.
						</p>
						<div className="hero__btns">
							<button className="primary__btn">Get Started Now</button>
							<button className="secondary__btn">Discover More</button>
						</div>
					</div>
					<div className="hero__img">
						<img src={heroDarkImg} alt="hero-img" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
