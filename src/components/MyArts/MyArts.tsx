import styles from './MyArts.module.css'

import data from '../../data/my_arts.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: 20,
    scale: 1.05
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
} as const ;

import { motion } from 'framer-motion'

export default function MyArts() {
    return (
        <motion.div 
            className={styles.marts_main}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {data.map((art, idx) => (
                <motion.div 
                    key={idx} 
                    className={styles.art_comp}
                    variants={itemVariants}

                    whileHover={{
                        scale: 1.02
                    }}
                >
                    <img src={art.art} alt="" />
                </motion.div>
            ))}
        </motion.div>
    )
}