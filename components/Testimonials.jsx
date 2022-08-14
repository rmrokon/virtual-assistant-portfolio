import styles from '../styles/Testimonials.module.css';
import Circle from './Circle';

export default function Testimonials() {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="orange" top="-70vh" left="0" right="0" />

            <h1 className={styles.title}>Testimonials</h1>

            <div className={styles.wrapper}>

            </div>
        </div>
    )
}
