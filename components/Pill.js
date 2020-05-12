import "./Pill.css"

const Pill = ({ isActive, rounded, ...rest }) => {
  return (
    <button
      className={`pill ${isActive ? "pill_blue" : "pill_white"} ${
        rounded ? "pill_rounded" : ""
      }`}
      {...rest}
    />
  )
}

export default Pill
