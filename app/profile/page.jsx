"use client"

import styles from "../styles/Profile.module.css";
import { useState } from "react";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <h4 div className={styles.p}>Bem-vindo(a) ao meu Perfil</h4>
                <h4 div className={styles.p}>Me chamo Anna Beatriz Leme Alves</h4>
                <img src="./eu.jpg"></img>
                <div className={styles.eu}>
                <h2>Sobre mim</h2>
                <p>Olá, me chamo Anna Beatriz Leme Alves e tenho 17 anos, atualmente estou cursando técnico de Desenvolvimento de Sistemas. É um curso bastante interessante voltado para a área de T.I</p>
            </div>
            <div className={styles.gosto}>
                <h2>Meus gostos</h2>
                <p>Eu gosto de escutar música, ver filmes, séries e sempre ir fazer compras.</p>
            </div>
            <div className={styles.linguagens}>
                <h2>Linguagens e Tecnologias</h2>
                <div className={styles.card}>
                    <div className={styles.lg1}>
                        <img src="/css.png" alt = "css"></img>
                    </div>
                    <div className={styles.lg2}>
                        <img src="/figma.png" alt = "figma"></img>
                    </div>
                    <div className={styles.lg3}>
                        <img src="/github.png" alt = "github"></img>
                    </div>
                    <div className={styles.lg4}>
                        <img src="/html.png" alt = "html"></img>
                    </div>
                    <div className={styles.card2}>
                    <div className={styles.lg5}>
                        <img src="/jira.png" alt = "jira"></img>
                    </div>
                    <div className={styles.lg6}>
                        <img src="/js.png" alt = "js"></img>
                    </div>
                    <div className={styles.lg7}>
                        <img src="/miro.png" alt = "miro"></img>
                    </div>
                    <div className={styles.lg}>
                        <img src="/react.png" alt = "react"></img>
                    </div>
                    <div className={styles.lg9}>
                        <img src="/vscode.png" alt = "vscode"></img>
                    </div>
                    </div>
                    <div className={styles.back}>
                        <p className={styles.p}>Obrigada por visitar meu Perfil!< a href ="/signin"></a></p>
                    </div>
            </div>

           
                </div>
                
            </div>
        </div>
    )
}