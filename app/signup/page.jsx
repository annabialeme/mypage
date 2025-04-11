"use client"

import styles from "../styles/Signup.module.css"

export default function Signup() {
    return (
        <div className={styles.container}>
        <div className={styles.login}>
        <h1 className={styles.home}>Sign Up</h1>
        <p className={styles.conta}>Have an account?</p>
        <div className={styles.email}>
        <p className={styles.name}>Email Address</p>
        <input className={styles.input} type= "text" id = "emailInput" placeholder="Digite seu e-mail"></input>
        </div>
    
        <div className={styles.email}>
            <p>Password</p>
            <input className={styles.input} type= "text" id = "passwordInput" placeholder="Crie sua senha"></input>

            <button className={styles.button}>Sign Up</button>

            <p className={styles.senha}>Forgot your password?</p>

        </div>
    </div>
    </div>
    )
}