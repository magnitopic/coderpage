import styles from "../styles/Second.module.css";

function Second() {
	return (
		<>
		<div id={styles.main}>
			<div className={styles.separator} id={styles.separator}></div>
			<p id={styles.titulo} className="title">Que es CoderDojo?</p>
			<p id={styles.text}>
				CoderDojo es una iniciativa sin ánimo de lucro nacida en Irlanda
				en 2011, que promueve el despliegue de clubes de programación,
				donde los ninjas (niños y niñas, chicas y chicos de entre 7 y 17
				años), aprenden a programar en un entorno abierto e informal, de
				acuerdo a sus propios intereses, y siguiendo su ritmo de
				aprendizaje.
			</p>
			<p id={styles.text}>
				Los clubes son organizados y gestionados por voluntarios y
				voluntarias (conocidos como champions), y cuentan con la
				participación de mentores, personas con conocimientos de
				lenguajes y herramientas de programación, que desinteresadamente
				dedican parte de su tiempo libre para guiar a los ninjas en el
				aprendizaje de las diferentes disciplinas, y lenguajes.
			</p>
		</div>
		{/* <div className={styles.spacer}></div> */}
		</>
	);
}

export default Second;
