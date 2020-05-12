import "./Advantages.css"
const Advantages = ({ img, title }) => {
  return (
    <div className="adv">
      <div
        className="adv__bg"
        style={{
          backgroundImage: `url(${img})`
        }}
      ></div>
      <p className="adv__text">{title}</p>
    </div>
  )
}
export default Advantages
