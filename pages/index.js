import TitleImage from "../components/TitleImage";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FQA from "../components/FQA";

export default function Home() {
	return (
		<>
			<Header />
			<TitleImage />
			<AboutUs />
			<Contact />
			<FQA />
			<Footer />
		</>
	);
}
