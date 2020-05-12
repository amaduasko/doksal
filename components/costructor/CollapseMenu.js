import { useState } from "react"
import "./CollapseMenu.css"

const CollapseMenu = ({ title, children, isOpenDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)
  return (
    <div className="collapse-menu">
      <div className="collapse-menu__header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div
          className={`collapse-menu__icon ${
            isOpen ? "collapse-menu__icon_reverse" : ""
          }`}
        ></div>
      </div>
      <div className={`collapse-menu__content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default CollapseMenu
