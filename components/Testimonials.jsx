import styles from '../styles/Testimonials.module.css';
import Circle from './Circle';
import { reviews } from "../data";
import Image from "next/image";

export default function Testimonials() {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="orange" top="-70vh" left="0" right="0" />

            <h1 className={styles.title}>Testimonials</h1>

            <div className={styles.wrapper}>
                {
                    reviews.map(review => (<div
                        className={styles.card} key={review.id}>
                        <p className={styles.review}>
                            {review.review}
                        </p>
                        <div className={styles.person}>
                            <Image
                                className={styles.avatar}
                                alt=''
                                src={review.picture}
                                width={"30"}
                                height={"30"}
                            />
                            <span className={styles.reviewerName}>{review.name}</span>
                        </div>

                    </div>))
                }
            </div>
        </div>
    )
}
