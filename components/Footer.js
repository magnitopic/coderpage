import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Logo from "./ui/Logo";

const Footer = () => {
	return (
		<div id={styles.main}>
			<Logo id={styles.logo}/>© All rights reserved 2021
			<div id={styles.socials}>
				<div className={styles.links}>
					<div className={styles.logos}>
						<Logo />
						<Logo />
						<Logo />
					</div>
					<div id={styles.socialLinks}>
						<p>Twitter</p>
						<p>YouTube</p>
						<p>GitHub</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
