import Question from "./ui/Question";
import { useState } from "react";
import styles from "../styles/FQA.module.css";

const FQA = () => {
	const [style, setStyle] = useState("cont");

	const text = ["Hello", "There", "General", "Kenobi"];

	return (
		<div className={styles.div}>
			<h1 className={styles.h1}>Preguntas frecuentes</h1>

			{text.map((text) => (
				<Question
					key={text}
					divClass={text}
					onExpandHandler={(value) => setOpenQuestion(value)}
					text={text}
				/>
			))}
		</div>
	);
};

export default FQA;
