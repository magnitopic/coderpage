import TitleImage from "../components/TitleImage";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import QA from "../components/Q&A";

export default function Home() {
	return (
		<>
			<Header />
			<TitleImage />
			<AboutUs />
			<QA />
			<Footer />
		</>
	);
}
