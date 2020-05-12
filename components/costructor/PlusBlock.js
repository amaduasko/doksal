import "./PlusBlock.css"

const PlusBlock = ({ cost }) => {
  return (
    <div className="plusblock">
      <span className="plusblock__cost">+{cost} руб. </span>
      <span>к основной стоимости</span>
    </div>
  )
}

export default PlusBlock
