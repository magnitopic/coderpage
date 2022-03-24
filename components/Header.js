import Link from "next/link";
import styles from "../styles/Header.module.css";
import Logo from "./ui/Logo";

const Header = () => {
	return (
		<div id={styles.mainHeader}>
			<Link href="/" passHref>
				<a id={styles.logo}>
					<Logo />
					<h3 id={styles.pageName}>CoderDojo Majadahonda</h3>
				</a>
			</Link>
			<div id={styles.links}>
				<Link href="/#AboutUs" passHref>
					<p className={styles.links}>¿Quienes somos?</p>
				</Link>
				<Link href="/#Contacto" passHref>
					<p className={styles.links}>Contacto</p>
				</Link>
				<Link href="" passHref>
					<h4 className={styles.links}>Noticias</h4>
				</Link>
			</div>
		</div>
	);
};

export default Header;
