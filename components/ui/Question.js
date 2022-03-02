import styles from "../../styles/Question.module.css";
import { useState } from "react";

const Question = ({ text }) => {
	return (
		<div className={styles.question}>
			<div id={styles.title}>
				{text}
				<button id={styles.button}>&#709;</button>
			</div>
			<div id={styles.text}>No, no you don&apos;t</div>
		</div>
	);
};

export default Question;
