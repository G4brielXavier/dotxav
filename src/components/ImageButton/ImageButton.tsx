import styles from './ImageButton.module.css'

interface Css {
    [key: string]: string
}

interface ImageButton {
    icon: string,
    css: Css,
    // size: string
}

export default function ImageButton({ icon, css }: ImageButton) {

    return (
        <div className={styles.ib_main} style={css}>
            <img src={icon} alt={icon.concat("_icon")} />
        </div>
    )

}