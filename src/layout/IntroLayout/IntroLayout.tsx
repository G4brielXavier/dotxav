import styles from './IntroLayout.module.css'

import ImageButton from '../../components/ImageButton'

import GITHUB_ICON from '../../assets/images/icons/github.png'
import LINKEDIN_ICON from '../../assets/images/icons/linkedin.png'
import ITCHIO_ICON from '../../assets/images/icons/itchio.svg'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: 20
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
} as const ;

export default function IntroLayout() {

    const cargos: string[] = [
        "FullStack Developer",
        "Rust Developer",
        "Game Developer",
        "Artist",
        "Designer"
    ]

    return (
        <div className={styles.il_global}>
            
            <div className={styles.il_main}>
                
                <div className={styles.more_info}>
                    <p>dotxavket@gmail.com</p>
                    <p>@dotxavierket</p>
                    <span>[v1.55]</span>
                </div>

                <div className={styles.external_links_container}>
                    <ImageButton 
                        icon={GITHUB_ICON} 
                        css={{
                            width: "30px",
                            opacity: "0"
                        }}
                        on_click={() => window.open("https://github.com/G4brielXavier")}
                        />
                    <ImageButton 
                        icon={LINKEDIN_ICON} 
                        css={{
                            width: "30px",
                            opacity: "0"
                        }}
                        on_click={() => window.open("https://www.linkedin.com/in/gabriel-xavier-5b64153b0/")}
                    />
                    <ImageButton 
                        icon={ITCHIO_ICON} 
                        css={{
                            width: "30px",
                            opacity: "0",
                            filter: "invert(1)"
                        }}
                        
                        on_click={() => window.open("https://dotxav.itch.io")}
                    />
                </div>

                <div className={styles.info_main}>

                    <p id='p_anim'>Hello, nice to meet you</p>
                    <div className={styles.box_intro_name}>
                        <p id='p_anim'>I'm</p>
                        <h1>Gabriel Xavier</h1>
                    </div>
                    <p id='p_anim'>or <b>"dotxav"</b></p>

                    <motion.div 
                        className={styles.container_cargos}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                            
                        {cargos.map((it, idx) => (
                            <motion.h1 
                                id='cargos_text' 
                                key={idx}
                                variants={itemVariants}
                            >{it}</motion.h1>
                        ))}
                    </motion.div>

                </div>

            </div>

        </div>
    )
}