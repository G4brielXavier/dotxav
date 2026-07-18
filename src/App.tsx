
import { useAtom, useAtomValue } from "jotai"
import { current_ui, getCurrentLayout } from "./stores/atoms"

import IntroLayout from "./layout/IntroLayout"
import ExplorerLayout from "./layout/ExplorerLayout"

import SessionLayout from "./layout/SessionLayout"
import AboutMe from "./components/AboutMe"
import MyProjects from "./components/MyProjects"
import MyArts from "./components/MyArts"

import { motion } from "framer-motion"

import MENU_ICON from './assets/images/icons/menu.svg'

interface ModalComponents {
  [key:string]: React.ReactElement
}

export default function App() {

  const [ui, setUI]         = useAtom(current_ui)
  const layout = useAtomValue(getCurrentLayout)

  const modals: ModalComponents = {
    "explorer": <ExplorerLayout />
  }

  const layouts: ModalComponents = {
    "home"    : <IntroLayout />,
    "about-me": <SessionLayout title="about me"                 content={<AboutMe    />} />,  
    "projects": <SessionLayout title="projects"                 content={<MyProjects />} />,
    "arts"    : <SessionLayout title="arts & illustrations"     content={<MyArts     />} />,
  }

  const UIModal = ui     ? modals[ui]      : null
  const Layout  = layout ? layouts[layout] : null

  return (
    <div className="AppGlobal">
      <div className="AppContent">
      
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.01 }}
          transition={{
            duration: 1,
          }}
          className="bg_title">
          <h1>GABRIEL</h1>
          <h1>XAVIER</h1>
        </motion.div>

        {ui ? (
          <div 
            className="OverlayModal" 
            onClick={() => setUI("")}
          >
            <div className="ignoreOverlay" onClick={(e) => e.stopPropagation()}>
              {UIModal}
            </div>
          </div>
        ): null}

        {Layout}

        <div className="container_interact">
                    
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                  opacity: 1, 
                  rotateZ: 0,

              }}
              
              transition= {{
                  duration: 0.1,
                  ease: "easeOut"
              }}
              
              whileHover={{
                  rotateZ: -10,
                  
                  transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                  }
              }}

              className="menu_button"
              
              onClick={() => setUI("explorer")}
          >
              <img src={MENU_ICON} alt="" />
              {/* <div id="icon">
              </div> */}
          </motion.div>

          <motion.div 

              initial={{ opacity: 0 }}
              animate={{ 
                  opacity: 1, 
              }}
              
              transition= {{
                  duration: 0.1,
                  ease: "easeOut"
              }}
              
              whileHover={{
                  y: -10,
                  
                  transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                  }
              }}

              onClick={() => {}}

              className="get_in_touch">
              {">> GET IN TOUCH <<"}
          </motion.div>

        </div>

      </div>
    </div>
  )
}