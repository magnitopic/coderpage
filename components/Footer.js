import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Logo from "./ui/Logo";

const Footer = () => {
	return (
		<div id={styles.main}>
			<div><Logo /></div>
			<p>© All rights reserved 2021</p>
			<div className={styles.socials}>
				<Link href="https://twitter.com/codernauts_es" passHref>
					<div className={styles.link}>
						<a className="fa fa-twitter" id={styles.twitter}/>
						<p>Twitter</p>
					</div>
				</Link>
				<div className={styles.link}>
					<a className="fa fa-youtube-play" id={styles.youtube}/>
					<p>YouTube</p>
				</div>
				<div className={styles.link}>
					<a className="fa fa-github" id={styles.github}/>
					<p>GitHub</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
