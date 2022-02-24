import Header from '../components/Header';
import styles from "../styles/First.module.css";
import Second from '../components/Second';


const First = () => {
	return (
		<div id={styles.main}>
			<Header />
			
			{/* <div id={styles.image}>
				<div id={styles.imageText}>CoderDojo Majadahonda</div>
			</div> */}
      		<Second />
		</div>
	);
};

export default First;
