import "./RoundedPill.css"

const RoundedPill = ({ isActive, children, onClick }) => {
  return (
    <button
      className={`roundedpill ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RoundedPill
