import styles from './SessionLayout.module.css'

interface SessionLayout {
    title: string,
    content: React.ReactElement
}

import { motion } from 'framer-motion'

export default function SessionLayout({ title, content }: SessionLayout) {
    return (
        <div className={styles.sl_main}>
            <header>
                <motion.h1
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >{title}</motion.h1>
            </header>
            <div className={styles.sl_content}>
                {content}
            </div>
        </div>
    )
}