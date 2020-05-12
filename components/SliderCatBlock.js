import "./SliderCatBlock.css"
import { Container } from "reactstrap"
const SliderCatBlock = props => {
  return (
    <div className="main">
      <Container>
        <div className="main__flex">{props.children}</div>
      </Container>
    </div>
  )
}
export default SliderCatBlock
