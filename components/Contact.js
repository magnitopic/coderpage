import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.content}>
					<iframe
						id={styles.map}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.038259984537!2d-3.86855358418593!3d40.474418579358506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418489f366583f%3A0xe6ed3ae6ca81ad8!2sCentro%20Juvenil%20Pr%C3%ADncipe%20de%20Asturias!5e0!3m2!1ses!2ses!4v1647441643382!5m2!1ses!2ses"
						allowFullScreen=""
						loading="lazy"
					></iframe>
					<div id={styles.list}>
						<li>Lugar: Centro Juvenil Príncipe de Asturias</li>
						<li>
							Dirección: Calle del Dr Calero, 37, 28221
							Majadahonda, Madrid
						</li>
						<li>Telefono: +34 916349120</li>
						<li>E-mail: majadahonda.es@coderdojo.com</li>
						<li>
							<Link
								href="https://twitter.com/codernauts_es"
								passHref={true}
							>
								Twitter
							</Link>
						</li>
						<li>
							<Link
								href="https://zen.coderdojo.com/dojos/es/majadahonda/majadahonda-centro-juvenil-principe-de-asturias"
								passHref={true}
							>
								CoderDojo Zen
							</Link>
						</li>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
