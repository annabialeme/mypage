"use client";

import styles from "../styles/Signin.module.css";

export default function Home() {
    return (
        <div className={styles.login}>
            <h1 className={styles.home}>Log In</h1>
            <p className={styles.conta}>Don't have an account?</p>
            <p className={styles.name}>Email Adress</p>
            <input className={styles.input} type= "text" id = "taskInput" placeholder=""></input>
            

            <div className={styles.email}>
                <p>Password</p>
                <input className={styles.input} type= "text" id = "taskInput" placeholder=""></input>

                <button className={styles.button}>Log in</button>

                <p className={styles.senha}>Forgot your password?</p>

            </div>
        </div>
    )
}