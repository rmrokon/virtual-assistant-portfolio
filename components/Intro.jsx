import React from 'react';
import styles from '../styles/Intro.module.css';
import Image from 'next/image';
import Circle from './Circle';

export default function Intro() {
    return (
        <div className={styles.container}>
            <Circle backgroundColor='green' top='-50vh' left='-50vh' />
            <div className={styles.card}>
                <h1 className={styles.title}><span className={styles.brand}>RUPOQUE</span> Your Virtual Assistant</h1>

                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati, vel cumque nam voluptatibus perspiciatis sed cupiditate dolores adipisci ipsam!
                </p>
                <button className={styles.button}>EXPLORE</button>
            </div>
            <div className={styles.card}>
                <Image
                    alt=''
                    src='/image/profile.jpg'
                    width={"100%"}
                    height={"100%"}
                    layout={"fill"}
                    objectFit="cover"
                ></Image>
                <a href="https://www.vecteezy.com/free-vector/working">Working Vectors by Vecteezy</a>
            </div>
        </div>
    )
}
