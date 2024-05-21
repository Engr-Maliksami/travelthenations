import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
	{
		id: 1,
		question: "What can I explore on 'Travel  The Nations'?",
		answer: "Travel  The Nations' offers a diverse exploration of global cultures, landmarks, and natural wonders. Dive into the rich tapestry of our planet, uncovering hidden gems and untold stories.",
	},
	{
		id: 2,
		question: "How can I contribute to the global challenges on the platform?",
		answer: "Engaging with global challenges on 'Travel  The Nations' is simple. Participate in initiatives, share your insights, and become a part of a community dedicated to positive change",
	},
	{
		id: 3,
		question: "Is there a specific theme to the curated educational experiences?",
		answer: "Yes, 'Travel  The Nations' introduces thematic educational journeys. Whether it's history, geography, or cultural studies, these curated experiences offer a dynamic fusion of exploration and in-depth knowledge on specific aspects of our global heritage!",
	},
];
export default function FaqWithVideoModal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className="faq-video-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 pe-xl-5 col-12">

						
						
					<img src="img/hero1.png" alt="earth" width={"600px"} />



					</div>
					<div className="col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5">
						<div className="block-contents ms-xl-4">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>If you want to know anything, ask us</h2>
							</div>
						</div>
						<div className="faq-accordion ms-xl-4 me-xl-4">
							<div className="accordion" id="mainaccordion">
								<Accordion content={faqsData} />
							</div>
						</div>
						<div
							className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".9s"
						>
							<span>Still have questions?</span>
							<Link href="/contact">
								<a>Get in touch</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
