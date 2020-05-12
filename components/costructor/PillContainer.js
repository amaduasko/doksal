import "./PillContainer.css"

const PillContainer = ({ name, children }) => (
  <div className="pillcontainer">
    <span className="pillcontainer__name">{name}:</span>
    {children}
  </div>
)

export default PillContainer
