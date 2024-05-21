import React from 'react';

export default function CallToAction() {
  return (
		<section className="cta-banner-wrapper style-1 section-padding pt-0">
			<div className="container">
				<div className="cta-banner text-white">
					<div className="row">
						<div className="col-xxl-6 text-center text-xxl-start offset-xxl-1">
							<div className="cta-contents text-center" sty>
								<h2 className="wow fadeInUp">Explore the our  world By Travel the Nations</h2>
								<p className="wow fadeInUp" data-wow-delay=".3s">
								Start exploring the world's wonders today with Travel The Nations
								</p>
								{/* <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s">
									<img src="/img/apple.png" alt="" />
								</a>
								<img src="/img/android.png" alt="" />`````
								<a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".8s">
								</a> */}
								<div className="tri-arrow wow fadeInRight d-none d-md-inline-block" data-wow-delay="1s">
									<img src="/img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xxl-5 pe-xxl-5">
							<div className="cta-mobile-app wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.2">
								<img src="img/hero1.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
