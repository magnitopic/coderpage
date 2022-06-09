import { useState } from "react";
import styles from "../styles/FQA.module.css";

const FQA = () => {
	const [style, setStyle] = useState("cont");

	const [appState, changeState] = useState({
		openObjects: null,
		questions: [
			{ id: "Hello" },
			{ id: "There" },
			{ id: "General" },
			{ id: "Kenobi" },
		],
	});

	const findindex=(text)=>{
		appState.questions.some(element =>{
			if (element.id === text){
				return true
			}
		})
		return false
	}

	function toggleOpen(index) {
		changeState({ ...appState, openObjects: appState.questions[index] });
	}

	function changeStyles(index) {
		if (appState.questions[index].includes(appState.openObjects)) {
			console.log("YES");
		} else {
			console.log("No");
		}
		return "divClass";
	}

	return (
		<div className={styles.div}>
			<h1 className={styles.h1}>Preguntas frecuentes</h1>

			{appState.questions.map((question, index) => (
				<div key={index} className={styles.question}>
					<div id={styles.title}>
						{question.id}
						<button
							id={styles.button}
							onClick={() => toggleOpen(index)}
						>
							&#709;
						</button>
					</div>
					<div id={styles.text} className={changeStyles(index)}>
						No, no you don&apos;t
					</div>
				</div>
			))}
		</div>
	);
};

export default FQA;
