import dynamic from "next/dynamic";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function ContentOne() {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="promo-content-block fix section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-12">
						<div className="" >
							<img src="/img/about3.png" alt="travelthenations" />
							
						</div>
					</div>
					<div className="col-xl-6 col-12 ps-xl-5 mt-5 mt-xl-0 ">
						<div className="block-contents ms-xl-5">
							<div className="section-title mb-4">
								<h2 lassName="wow fadeInUp">providing  users with access to a wealth of information about our planet.
</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
									"Travel the Nations" aims to provide users with an immersive experience where they can seamlessly navigate through different regions, countries, and cultures, gaining insights into geography, economics, history, and more.

								</p>
								<p className="mt-3">
							Users can visually explore the globe, discovering landmarks, natural wonders, and cultural hotspots with just a few clicks. Real-time updates ensure that users stay informed about the latest developments, making their journey on the platform dynamic and engaging.


								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
