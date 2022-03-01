import styles from "../../styles/AboutUs.module.css";

const Question = ({text}) => {
	return (
		<div className={styles.question}>
			<h3>{text}</h3>
		</div>
	)
}


export default Question