import TitleImage from "../components/TitleImage";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import QA from "../components/Q&A";

export default function Home() {
	return (
		<>
			<Header />
			<TitleImage />
			<AboutUs />
			<QA />
			<Contact />
			<Footer />
		</>
	);
}
