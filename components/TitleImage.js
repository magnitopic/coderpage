import styles from "../styles/TitleImage.module.css";

const TitleImage = () => {
	const image = "image" + Math.round(Math.random() * 1);

	return (
		<>
			<style jsx>{`
				#image0 {
					background-image: url(/dojo0.jpg);
				}

				#image1 {
					background-image: url(/dojo1.jpg);
				}
			`}</style>
			<div id={image} className={styles.image}>
				<div id={styles.imageText} className="title">
					CoderDojo Majadahonda
				</div>
			</div>
		</>
	);
};

export default TitleImage;
