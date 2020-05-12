import { ServiceMobileSlider } from "../MobileSliders";
import { Container, Row } from "reactstrap";
const ServicePossibleOrder = ({ children }) => (
  <div className="services-possible-order-container">
    <Container className="mt-3">
      <Row className="mt-5 ml-0 mr-0 service-possible-order-row">
        {children}
      </Row>
      <ServiceMobileSlider>{children}</ServiceMobileSlider>
    </Container>
  </div>
);

export default ServicePossibleOrder;
