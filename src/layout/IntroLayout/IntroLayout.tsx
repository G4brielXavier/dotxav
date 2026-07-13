import styles from './IntroLayout.module.css'

import ImageButton from '../../components/ImageButton'

import GITHUB_ICON from '../../assets/images/icons/github.png'
import LINKEDIN_ICON from '../../assets/images/icons/linkedin.png'
import ITCHIO_ICON from '../../assets/images/icons/itchio.svg'

export default function IntroLayout() {


    const cargos: string[] = [
        "FullStack Developer",
        "Rust Developer",
        "Game Developer",
        "Artist",
        "Designer"
    ]


    return (
        <div className={styles.il_main}>
            
            <div className={styles.more_info}>
                <p>dotxavket@gmail.com</p>
                <p>@dotxavierket</p>
                <span>[v1.3]</span>
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

                <div className={styles.container_cargos}>
                    {cargos.map((it, idx) => (
                        <h1 id='cargos_text' key={idx}>{it}</h1>
                    ))}
                </div>

            </div>

        </div>
    )
}