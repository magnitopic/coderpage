import Question from "./ui/Question";
import { useState } from "react";

const QA = () => {
	const [openQuestion, setOpenQuestion] = useState("None");

	const text=[
		"Hello",
		"There",
		"General",
		"Kenobi"
	];

	return (
		<div>
			<style jsx>{`
				.${openQuestion} {
					display: inline;
				}
				h1 {
					color: #0b61ff;
					text-align: center;
				}
				div {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}
			`}</style>
			<h1>Preguntas frecuentes</h1>

			{text.map((text) => (
				<Question
				key={text}
				divClass={text}
				onExpandHandler={value =>setOpenQuestion(value)}
				text={text}/>
			))}
		</div>
	);
};

export default QA;
