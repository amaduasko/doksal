import { Container } from "reactstrap";
const ServiceQA = ({ children }) => (
  <div className="service-qa-container">
    <Container>
      <div className="qa-container">{children}</div>
    </Container>
  </div>
);

export default ServiceQA;
