import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>Discover  every corner of the globe with Travel the Nations</h2>
							<p>Unveil the richness of our world with Travel the Nations  an interactive portal that transforms your curiosity into a dynamic exploration of global marvels and untold narratives</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
								<BiLockAlt />
								
							</div>
							<h3>Cultural Tapestry</h3>
							<p>Immerse yourself in the intricate threads of our global cultural tapestry, where every click reveals the vibrant stories woven into the fabric of humanity	</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
								<AiOutlineBarChart />
							</div>
							<h3>Real-Time Updates</h3>
							<p>Stay in the know with real-time updates, ensuring your journey reflects the ever-evolving beauty and diversity of our world</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<FiSend />
							</div>
							<h3>Global Community</h3>
							<p>Ignite a global connection as 'Walk the World' brings explorers together in a harmonious symphony, uniting hearts and minds across the diverse landscapes of our shared planet</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
