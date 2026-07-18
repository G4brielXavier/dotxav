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
                <h2>Hey, how is it going?</h2>
                <p>Welcome to my portfolio.</p>
                <p>If you came here to meet me, you are in the right place!</p>
                <p>It's a pleasure! My name is <b>Gabriel Xavier Dos Santos, currently I am 20 years old and I'm <span id='tag'>FullStack Developer</span>, <span id='tag'>Ilustrador Cristão</span>, <span id='tag'>Designer</span>, <span id='tag'>Writter</span> and <span id='tag'>Worldbuilder</span>.</b></p>
                <p>I'm always looking to learn and design new things in my niche, which is the <span id='tag'>Worldbuilding</span>.</p>
            </motion.div>
        </div>
    )
}