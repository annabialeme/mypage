"use client";

import styles from "../styles/Signin.module.css";

export default function Home() {
    return (
        <div className={styles.login}>
            <h1 className={styles.home}>Início</h1>
            <p className={styles.name}>Digite seu nome:</p>
            <button className={styles.name}>Digite aqui</button>

            <div className={styles.email}>
                <p>Digite seu e-mail</p>
                <button className={styles.name}>Digite aqui</button>
            </div>
            <div className={styles.senha}>
                <p>Digite sua senha</p>
                <button className={styles.name}>Digite aqui</button>
            </div>
        </div>
    )
}