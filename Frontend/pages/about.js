	import Head from "next/head";
	import ContentOne from "../components/AboutPage/ContentOne";
	import CallToAction from "../components/Common/CallToAction";
	import PageBanner from "../components/Common/PageBanner";
	import FeaturesThree from "../components/Features/FeaturesThree";
	import TeamTwo from "../components/Team/TeamTwo";
	import Testimonial from "../components/Testimonial/Testimonial";
	import ContentTwo from "./../components/AboutPage/ContentTwo";

	export default function about() {
		return (
			<>
				<Head>
					<title>About Page</title>
				</Head>
				<PageBanner
					title="About Us"
					content= "Travel the Nation  fosters a sense of global community by connecting explorers from all corners of the globe"
				/>
				<ContentOne />
				<FeaturesThree />
				<ContentTwo />
				{/* <Testimonial /> */}
				{/* <TeamTwo /> */}
				<CallToAction />
			</>
		);
	}
