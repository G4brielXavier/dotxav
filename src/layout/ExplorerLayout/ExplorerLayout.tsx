import styles from './ExplorerLayout.module.css'

import { useAtom, useSetAtom } from 'jotai'

import { current_layout, current_ui } from '../../stores/atoms'

interface Options {
    label: string,
    dest: string
}

export default function ExplorerLayout() {
    
    const [layout, setLayout] = useAtom(current_layout)
    const setUi = useSetAtom(current_ui)

    const options: Options[] = [
        {label: "about me", dest: "about-me"},
        {label: "projects", dest: "projects"},
        // {label: "arts", dest: "arts"},
    ]

    function handle_select_opt(dest: string) {
        if (layout === dest) {
            setLayout("home")
        } else {
            setLayout(dest)
        }

        setUi("")
    }

    return (
        <div className={styles.el_main}>

            <div className={styles.header_main}>
                <h1>MENU</h1>
                <p>Chosse an option to explore.</p>
            </div>

            <div className={styles.options}>
                {options.map((it, idx) => (
                    <div key={idx} className={styles.opt} onClick={() => handle_select_opt(it.dest)}>
                        <p>{layout === it.dest ? "<< LEAVE" : it.label}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}