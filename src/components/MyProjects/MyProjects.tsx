import styles from './MyProjects.module.css'

import data from '../../data/my_projects.json'
import { motion } from 'framer-motion'

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

export default function MyProjects() {
    return (
        <motion.div 
            className={styles.mp_main}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {data.map((proj, idx) => (
                <motion.div 
                    key={idx} 
                    className={styles.projbox}
                    variants={itemVariants}

                    whileHover={{
                        scale: 1.02
                    }}

                    onClick={() => window.open(proj.github)}

                >

                    <div className={styles.banner}>
                        <img src={proj.banner === "pattern" ? "/banners/pattern.avif" : proj.banner} alt="" />
                    </div>
                    <div className={styles.stackbox}>
                        {proj.stacks.map((stack, idx) => (
                            <p key={idx}>{stack}</p>
                        ))}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.subinfo}>
                            <h2>{proj.name}</h2>
                            <h5 id={proj.status}>{proj.status}</h5>
                        </div>
                        <p>{proj.desc}</p>
                    </div>

                </motion.div>
            ))}
        </motion.div>
    )
}