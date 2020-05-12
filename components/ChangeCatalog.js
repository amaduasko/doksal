import "./ChangeCatalog.css"

const ChangeCatalog = ({ isActive, ...props }) => {
  return (
    <div
      className={`ChangeCatalog__menu1 ${isActive ? "active" : ""}`}
      {...props}
    >
      {props.children}
    </div>
  )
}
export default ChangeCatalog
