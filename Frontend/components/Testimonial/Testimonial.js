import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<section className="testimonial-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
						</div>
					</div>
				</div>
				<div className="col-12 col-xl-12">
					<div className="testimonial-carousel-active">
						<Slider {...settings}>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.png" }}
									></div>
									<div className="client-name">
										<h6>Scott Swanson</h6>
										<span>Account executive</span>
									</div>
								</div>
								<div className="feedback">
									“Travel the Nations has been my go-to platform for planning my adventures around the globe. From detailed country guides to insightful articles, it's been an invaluable resource for me. Thanks to Travel the Nations, I've been able to explore new destinations with confidence and curiosity.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/2.png" }}
									></div>
									<div className="client-name">
										<h6>Emily</h6>
										<span>Geography Student</span>
									</div>
								</div>
								<div className="feedback">
								"As a seasoned traveler, I'm always on the lookout for reliable information and inspiration. Travel the Nations delivers on both fronts, offering a wealth of knowledge about diverse cultures, histories, and landscapes. It's become my trusted companion on every journey."
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/3.png" }}
									></div>
									<div className="client-name">
										<h6>James

</h6>
										<span>Business Traveler</span>
									</div>
								</div>
								<div className="feedback">
								"I stumbled upon Travel the Nations while researching my next vacation destination, and I'm so glad I did! The platform's comprehensive country profiles and travel tips have made planning my trip a breeze. I can't wait to embark on my adventure armed with the insights I've gained."
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.png" }}
									></div>
									<div className="client-name">
										<h6>Scott Swanson</h6>
										<span>Account executive</span>
									</div>
								</div>
								<div className="feedback">
								"Travel the Nations has been an indispensable tool for me in my work as a travel agent. The platform's wealth of information, including detailed country profiles and practical travel tips, has helped me tailor unforgettable experiences for my clients. It's my secret weapon for crafting dream vacations."
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/2.png" }}
									></div>
									<div className="client-name">
										<h6>Karen Lynn</h6>
										<span>Software engineer</span>
									</div>
								</div>
								<div className="feedback">
								"As a solo traveler, safety is always a top priority for me. That's why I rely on Travel the Nations for up-to-date information and insights on travel advisories, local customs, and safety tips. With Travel the Nations by my side, I can explore the world with confidence and peace of mind.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/3.png" }}
									></div>
									<div className="client-name">
										<h6>Sean Jacobs</h6>
										<span>Financial analyst</span>
									</div>
								</div>
								<div className="feedback">
								"Travel the Nations has played a pivotal role in broadening my horizons and deepening my appreciation for different cultures. Whether I'm researching a new destination or learning about a country's history and traditions, the platform never fails to educate and inspire. It's a must-have for any avid traveler."
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
