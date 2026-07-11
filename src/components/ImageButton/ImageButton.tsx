import styles from './ImageButton.module.css'

interface Css {
    [key: string]: string
}

interface ImageButton {
    icon: string,
    css: Css,
    on_click: () => void
    // size: string
}

export default function ImageButton({ icon, css, on_click }: ImageButton) {

    return (
        <div className={styles.ib_main} style={css} onClick={() => on_click()}>
            <img src={icon} alt={icon.concat("_icon")} />
        </div>
    )

}