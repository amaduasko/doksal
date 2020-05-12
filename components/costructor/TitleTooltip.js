import "./TitleTooltip.css"

const TitleTooltip = ({ img, title, children, onClose }) => {
  return (
    <div className="titletooltip">
      <div
        className="titletooltip__image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="titletooltip__content">
        <h5 className="titletooltip__title">{title}</h5>
        {children}
      </div>
      <button
        className="titletooltip__close"
        onClick={() => (onClose ? onClose() : null)}
      ></button>
    </div>
  )
}

export default TitleTooltip
