import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from "next/link";

function Navbar(props) {
    return (
        <div className={styles.container}>
            <Link href={"/"}>MD NURUZZAMAN</Link>
            <ul className={styles.list}>
                <li className={styles.listItems}>
                    <Link href={"/services/dataEntry"}>DATA ENTRY</Link>
                </li>
                <li className={styles.listItems}>
                    <Link href={"/services/webResearch"}>WEB RESEARCH</Link>
                </li>
                <li className={styles.listItems}>
                    <Link href={"/services/lead"}>LEAD GENERATION</Link>
                </li>
                <li className={styles.listItems}>
                    <Link href={"/services/contact"}>CONTACT</Link>
                </li>

            </ul>
        </div>
    );
}

export default Navbar;