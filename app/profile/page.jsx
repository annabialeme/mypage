"use client"

import styles from "../styles/Profile.module.css";
import { useState } from "react";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <h4>Bem-vindo(a) ao meu Perfil</h4>
                <h4>Me chamo Anna Beatriz Leme Alves</h4>
                <img src="/eu.jpg"></img>
            </div>

            <div className={styles.eu}>
                <h2>Sobre mim</h2>
                <p>Olá, me chamo Anna Beatriz Leme Alves e tenho 17 anos, atualmente estou cursando técnico de Desenvolvimento de Sistemas. É um curso bastante interessante.</p>
            </div>
            <div className={styles.gosto}>
                <h2>Meus gostos</h2>
                <p>Eu gosto de escutar música, ver filmes, séries e sempre ir fazer compras.</p>
            </div>
            <div className={styles.linguagens}>
                <h2>Linguagens e Tecnologias</h2>
                
            </div>
        </div>
    )
}