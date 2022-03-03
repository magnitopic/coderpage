import styles from "../../styles/Question.module.css";
import { useState } from "react";

const Question = ({ text, divClass }) => {

	const onExpand= ()=>{
		console.log("Yes");
	}

	return (
		<div className={styles.question}>
			<div id={styles.title}>
				{text}
				<button id={styles.button} onClick={onExpand}>&#709;</button>
			</div>
			<div id={styles.text} className={divClass}>No, no you don&apos;t</div>
		</div>
	);
};

export default Question;
