import { Container, Row } from "reactstrap";
import { ServiceMobileSlider } from "../MobileSliders";

const ServiceTypes = ({ children }) => (
  <div className="services-types-container">
    <Container>
      <Row className="ml-0 services-type-container-upmobile-row">
        {children}
      </Row>
      <ServiceMobileSlider>{children}</ServiceMobileSlider>
    </Container>
  </div>
);

export default ServiceTypes;
