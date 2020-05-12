import "./CollapseMenuTitle.css"
import { useState } from "react"
import TitleTooltip from "./TitleTooltip"

const CollapseMenuTitle = ({ img, title, children }) => {
  const [isTooltipShow, setTooltipShow] = useState(false)
  return (
    <div className="collapsemenutitle">
      <h5 className="collapsemenutitle__title">{title}</h5>
      <div
        className="collapsemenutitle__icon"
        onMouseMove={() => (!isTooltipShow ? setTooltipShow(true) : "")}
        onMouseLeave={() => (isTooltipShow ? setTooltipShow(false) : null)}
      >
        ?
      </div>
      {isTooltipShow && (
        <TitleTooltip
          img={img}
          title={title}
          onClose={() => setTooltipShow(false)}
        >
          {children}
        </TitleTooltip>
      )}
    </div>
  )
}

export default CollapseMenuTitle
