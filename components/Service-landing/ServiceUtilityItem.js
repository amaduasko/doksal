import { Col } from "reactstrap";

export const ServiceUtilityItemName = ({ children }) => (
  <p className="service-utility-item-text">{children}</p>
);
export const ServiceUtilityItemPrice = ({ children }) => (
  <p className="service-utility-item-text service-utility-item-price">
    {children}
  </p>
);
export const ServiceUtilityItemItemImage = ({ source }) => (
  <div className="service-utility-image-container">
    <img src={source} alt="item image" />
  </div>
);
export const ServiceUtilityItemItemAbout = ({ children }) => (
  <div className="service-utility-info-container">{children}</div>
);
export const ServiceUtilityItem = ({ children }) => (
  <Col className="service-utility-item">{children}</Col>
);
