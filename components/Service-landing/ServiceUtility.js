import { Container, Row } from "reactstrap";
import { ServiceMobileSlider } from "../MobileSliders";

const ServiceUtility = ({ children }) => (
  <div className="service-utility-block">
    <Container className=" service-utility-block-container">
      <Row className="ml-0 mr-0 service-utility-row">{children}</Row>
      <ServiceMobileSlider>{children}</ServiceMobileSlider>
    </Container>
    <style jsx>
      {`
        @media (max-width: 576px) {
          .service-utility-block {
            overflow-x: auto;
          }
        }
      `}
    </style>
  </div>
);

export default ServiceUtility;
