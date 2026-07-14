import styles from './AboutMe.module.css'

import IMG from '../../assets/images/dotxav2.jpg'

import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <div className={styles.am_main}>
            <motion.div 
                className={styles.img_box}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5     }}
            >
                <img src={IMG} alt="" />
            </motion.div>
            <motion.div 
                className={styles.my_info}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5     }}
            >
                <h2>Opa, tudo bom?</h2>
                <p>Bem-vindo ao meu portfolio.</p>
                <p>Se você veio aqui para me conhecer, está no lugar certo!</p>
                <p>É um prazer! Meu nome é <b>Gabriel Xavier Dos Santos</b>, atualmente tenho 20 anos de idade e sou <span id='tag'>FullStack Developer</span>, <span id='tag'>Ilustrador Cristão</span>, <span id='tag'>Designer</span> e <span id='tag'>Escritor</span>.</p>
                <p>Estou sempre buscando aprender e desenvolver coisas novas no meu nicho, que é o <span id='tag'>WORLDBUILDING</span>.</p>
            </motion.div>
        </div>
    )
}