import Question from "./ui/Question";

const QA = () => {
	const [openQuestion, setOpenQuestion] = useState("None");
	return (
		<div>
			<style jsx>{`
				#\{openQuestion\} {
					color: red;
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
			<Question
				text={"¿Tengo que tener conocimientos previos de programación?"}
			/>
		</div>
	);
};

export default QA;
