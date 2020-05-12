import "./BestsellerWrap.css"
import { Container } from "reactstrap"
const BestsellerWrap = props => {
  return (
    <Container>
      <div className="bestsellerWrap">{props.children}</div>
    </Container>
  )
}
export default BestsellerWrap
