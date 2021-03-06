import styles from "../styles/AboutUs.module.css";
import Image from "next/image";

function AboutUs() {
	return (
		<>
		<a id="AboutUs" className="anchor"></a>
		<div className={styles.main} >
			<div className={styles.content}>
				<div>
					<p id={styles.titulo} className="title">
						¿Quienes somos?
					</p>
					<p id={styles.text}>
						¡Somos CoderDojo Majadahonda!
						<br />
						Un club de programación en el que participan niños y niñas de
						entre 7 y 17 años. Un sitio con un buen ambiente para compratir
						conocimientos tecnologicos.
					</p>
				</div>
				<div>
				<p id={styles.titulo} className="title">
					¿Que es CoderDojo?
				</p>
				<p id={styles.text}>
					CoderDojo es una iniciativa para acercar la tecnología a los
					jóvenes. Empezó en Irlanda el 23 de Julio 2011. Desde entonces
					se ha expandido por todo el mundo, a más de 100 países. Ya es
					todo un fenómeno global.
				</p>
				</div>
			</div>
			<Image
				src="/group.png"
				alt="Group Image"
				width="400"
				height="213"
			/>
		</div>
		</>
	);
}

export default AboutUs;
