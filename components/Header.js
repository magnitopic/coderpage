import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div id={styles.mainHeader}>
			<Link href="/" passHref>
				<a id={styles.logo}>
					<Image
						src="/CoderNautsLogo.svg"
						alt="Picture of the author"
						width="45"
						height="45"
					/>
					<h3 id={styles.pageName}>CoderDojo Majadahonda</h3>
				</a>
			</Link>
			<div id={styles.links}>
				<Link href="" passHref>
					<p className={styles.links}>¿Quienes somos?</p>
				</Link>
				<Link href="" passHref>
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
