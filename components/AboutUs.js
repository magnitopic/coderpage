import styles from "../styles/AboutUs.module.css";

function AboutUs() {
	return (
		<>
		<div id={styles.main}>
			<p id={styles.titulo} className="title">
				¿Quienes somos?
			</p>
			<p id={styles.text}>
				¡Somos CoderDojo Majadahonda!<br/>Un club de programación en el que participan niños y
				niñas de entre 7 y 17 años. Un sitio con un buen ambiente para compratir conocimientos
				tecnologicos
			</p>
			<p id={styles.titulo} className="title">
				¿Que es CoderDojo?
			</p>
			<p id={styles.text}>
				Los clubes son organizados y gestionados por voluntarios y
				voluntarias (conocidos como champions), y cuentan con la
				participación de mentores, personas con conocimientos de
				lenguajes y herramientas de programación, que
				desinteresadamente dedican parte de su tiempo libre para
				guiar a los ninjas en el aprendizaje de las diferentes
				disciplinas, y lenguajes.
			</p>
		</div>
		{/* <div className={styles.spacer}></div> */}
		</>
	);
}

export default AboutUs;
