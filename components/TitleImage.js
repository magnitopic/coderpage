import styles from "../styles/TitleImage.module.css";


const TitleImage = () => {
	return (
		<div id={styles.image}>
			<div id={styles.imageText} className="title">CoderDojo Majadahonda</div>
		</div>
	);
};

export default TitleImage;
