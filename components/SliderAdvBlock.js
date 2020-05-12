import "./SliderAdvBlock.css"
import { Container } from "reactstrap"

const SliderAdvBlock = props => {
  return (
    <div className="main__adv">
      <Container className="container__main__adv">
        <div className="main__adv__flex">{props.children}</div>
      </Container>
    </div>
  )
}
export default SliderAdvBlock
