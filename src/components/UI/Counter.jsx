import React from "react";
import "../../styles/counter.css";

const counterData = [
	{
		number: "5k+",
		text: "Clients",
	},

	{
		number: '100k+',
		text: "Supplied Products",
	},

	{
		number: '40+',
		text: "County Reach",
	},
];

const Counter = () => {
	return (
		<section className="counter" id="projects">
			<div className="container">
				<div className="counter__wrapper">
					{counterData.map((item, index) => (
						<div className="counter__item" key={index}>
              <h3 className="counter__number">{item.number}</h3>
							<h4 className="counter__title">{item.text}</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Counter;
