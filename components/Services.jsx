import styles from '../styles/Services.module.css';
import Link from "next/link";
import Image from 'next/image';

export default function Services({ services }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What I Offer?</h1>
            <h1 className={styles.subTitle}>Services I can help you with</h1>
            <div className={styles.services}>
                {
                    services.map(service => (
                        <Link passHref key={service.id} href={`/services/${service.link}`}>
                            <div className={styles.service}>
                                <span className={styles.cat}>{service.name}</span>
                                <p className={styles.description}>{service.desc}</p>
                                <div className={styles.media}>
                                    <Image
                                        alt=''
                                        src={`/image/${service.img}`}
                                        width={"100%"}
                                        height={"100%"}
                                        layout={"responsive"}
                                        objectFit="cover"
                                    ></Image>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
