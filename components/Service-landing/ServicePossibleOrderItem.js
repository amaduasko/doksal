import { Col } from "reactstrap";
export const ServicePossibleOrderItemTitle = ({ children }) => (
  <p className="service-possible-order-text">{children}</p>
);
export const ServicePossibleOrderItemImage = ({ source }) => (
  <div className="service-possible-order-continer">
    <img src={source} alt="service quality" />
  </div>
);
export const ServicePossibleOrderItem = ({ children }) => <Col>{children}</Col>;
