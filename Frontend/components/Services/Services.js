import { servicesData } from "./servicesData";
import SingleService from "./SingleService";

export default function Services() {
	return (
		<section className="services-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Discover the Beauty of Each Nation

</h2>
							<p>
							From the bustling metropolises to the serene countryside, each country holds its own unique charm and allure. Immerse yourself in the sights, sounds, and flavors of distant lands as you navigate through our curated collection of destinations.


							</p>
<br /><br />
							<h3>Serach Country Here  You want
</h3>
						</div>
					</div>
				</div>

				{/* <div className="row text-center text-lg-start">
					{servicesData.map((service) => (
						<div className="col-md-6 col-xl-4 col-12" key={service.id}>
							<SingleService service={service} />
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
}
 