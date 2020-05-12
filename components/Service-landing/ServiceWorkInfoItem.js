import { Row } from "reactstrap";
export const ServiceWorkInfoBlockImage = ({ source }) => (
  <div className="third-block-img-container">
    <img src={source} alt="worker" />
  </div>
);
export const ServiceWorkInfoBlockAboutText = ({ children }) => (
  <p className="third-block-text">{children}</p>
);
export const ServiceWorkInfoBlockAbout = ({ children }) => (
  <div className="third-block-text-container">{children}</div>
);
export const ServiceInfoBlockAboutNumber = ({ children }) => (
  <span className={`step-numb numb_${children}`}>{children}</span>
);
export const ServiceWorkInfoBlockRow = ({ className, children }) => (
  <Row className={`third-block-row ${className ? className : ""}`}>
    {children}
  </Row>
);
