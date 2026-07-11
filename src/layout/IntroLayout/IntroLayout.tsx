import styles from './IntroLayout.module.css'

import ImageButton from '../../components/ImageButton'

import GITHUB_ICON from '../../assets/images/icons/github.png'
import LINKEDIN_ICON from '../../assets/images/icons/linkedin.png'

export default function IntroLayout() {
    return (
        <div className={styles.il_main}>
            
            <div className={styles.external_links_container}>
                <ImageButton 
                    icon={GITHUB_ICON} 
                    css={{
                        width: "30px",
                        transform: "rotateZ(10deg)"
                    }}
                />
                <ImageButton 
                    icon={LINKEDIN_ICON} 
                    css={{
                        width: "30px",
                        transform: "rotateZ(-10deg)"
                    }}
                />
            </div>

            <div className={styles.info_main}>
                <p>Hello, nice to meet you</p>
                <div className={styles.box_intro_name}>
                    <p>I'm</p>
                    <h1>Gabriel Xavier</h1>
                </div>
                <p>or <b>"dotxav"</b></p>
            </div>

        </div>
    )
}