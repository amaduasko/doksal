import "./WrapperPage.css"
import { Container } from "reactstrap"
const WrapperPage = props => {
  return (
    <Container>
      <div className="wrapperPage">{props.children}</div>
    </Container>
  )
}

export default WrapperPage
