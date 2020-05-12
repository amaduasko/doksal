import { Form, Container, Row, Col, Input } from "reactstrap";
const ServiceForm = ({ style, onSubmit, children }) => (
  <Form onSubmit={onSubmit} style={style} className="services-form-container">
    <Container>
      <Row className="ml-0 mr-0 services-form-row">{children}</Row>
    </Container>
  </Form>
);

export default ServiceForm;
