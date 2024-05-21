import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0 mt-4">
							<div className="hero-contents">
								<h1>Ready to explore the wonders of our planet ?</h1>
								<p>
								Travel-the-Nations invites you on a captivating journey where every step unveils the richness of our Earth. From the towering mountains to the depths of the oceans, immerse yourself in a unique interactive experience that combines cutting-edge technology with the spirit of adventure.






								</p>
							 
							 <a href="/countries" className="app-download-btn">
									{/* <img src="img/android.png" alt="" /> */}
									
									<button  className="theme-btn btn-btn primary">Explore</button>
								</a> 
								<div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="" />
								</div> 
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0 hero-img">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img src="img/hero.png" alt="Travel the Nations"  />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
