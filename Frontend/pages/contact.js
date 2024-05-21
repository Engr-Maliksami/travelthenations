import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact Page</title>
			</Head>
			<PageBanner
				title="Contact Us"
				content="Reach out to us anytime with questions or needs via phone or email"
			/>
			<ContactContent />
		</>
	);
}
