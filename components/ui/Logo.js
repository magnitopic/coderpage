import Image from "next/image";

const Logo = () => {
	return (
		<>
			<Image
				src="/CoderNautsLogo.svg"
				alt="Picture of the author"
				width="45"
				height="45"
			/>
		</>
	);
};

export default Logo;
