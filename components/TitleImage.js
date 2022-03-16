
const TitleImage = () => {
	// Background Image script
	

	return (
		<>
			<style jsx>{`
				#image {
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					background-image: url(/dojo${Math.round(Math.random() * 1)}.jpg);
					width: 100%;
					height: 35em;
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
				}

				#imageText {
					padding: 10px 20px 10px 10px;
					font-size: 4em;
					width: fit-content;
					background-color: rgb(0, 0, 0); /* Fallback color */
					background-color: rgba(0, 0, 0, 0.7);
					color: white;
					z-index: 2;
				}
			`}</style>
			<div id="image">
				<div id="imageText" className="title">
					CoderDojo Majadahonda
				</div>
			</div>
		</>
	);
};

export default TitleImage;
