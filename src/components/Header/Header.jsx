import React from "react";

import "./header.css";

const nav__links = [
	{
		path: "#home",
		display: "Home",
	},

	{
		path: "#about",
		display: "About",
	},
	{
		path: "#services",
		display: "Services",
	},
	{
		path: "#projects",
		display: "Projects",
	},
];

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="nav__wrapper">
					<div className="logo">
						<h2>Freon Solutions Ltd</h2>
						{/* <p>Leader in the Supplies Business</p> */}
					</div>

					{/* =============== navigation ================ */}
					<div className="navigation">
						<ul className="menu">
							{nav__links.map((item, index) => (
								<li className="menu__item">
									<a href={item.path} className="menu__link">
										{item.display}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* ============== light mode ============== */}
					<div className="light__mode">
						<span>
							<i class="ri-lightbulb-flash-line"></i>Light Mode
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
