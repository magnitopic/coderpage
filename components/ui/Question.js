import styles from "../../styles/Question.module.css";
import { useState } from "react";

const Question = ({ text }) => {
	const [position, setPosition] = useState("0");

	return (
		<div className={styles.question}>
			<div id={styles.title}>
				{text}
				<button id={styles.button}>&#709;</button>
			</div>
			<div id={styles.text}>No, no you don't</div>
		</div>
	);
};

export default Question;
