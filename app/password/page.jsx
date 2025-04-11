"use client";

import styles from "../styles/Password.module.css";
import { useState } from "react";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.senha}>
            <h1 className={styles.password}> Reset Password</h1>
            <input className={styles.enterpassword} type= "text" id = "password" placeholder="Digite uma senha de 8 caracteres"></input>
            <input className={styles.input} type= "text" id = "confirm-password" placeholder="Confirme sua senha"></input>
            <button type="submit">Confirme</button>
            </div>
        </div>
    )
}