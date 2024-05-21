import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
// import PricingContent from "../components/Pricing/PricingContent";
import Services from "../components/Services/Services";

export default function services() {
	return (
		<>
			<Head>
				<title>countries Page</title>
			</Head>
			<PageBanner
				title="Explore the World with Travel the Nations" 
				content="We believe in celebrating the diversity of our world Learn about the languages spoken, traditions observed, and customs practiced in every corner of the globe"
			/>
			<Services />
			<FaqWithVideoModal />
		</>
	);
}
