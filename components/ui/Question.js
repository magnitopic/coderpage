import styles from "../../styles/Question.module.css";
import { useState } from "react";

const Question = ({ text, divClass, onExpandHandler }) => {
	const onExpand = () => {
		setOpenQuestion = divClass;
	};

	return (
		<div className={styles.question}>
			<div id={styles.title}>
				{text}
				<button
					id={styles.button}
					onClick={(divClass) => onExpandHandler(divClass)}
				>
					&#709;
				</button>
			</div>
			<div id={styles.text} className={divClass}>
				No, no you don&apos;t
			</div>
		</div>
	);
};

export default Question;
