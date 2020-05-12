import { Container, Col, Input } from "reactstrap";
export const ServiceFormAbout = ({ children }) => (
  <Container>
    <p className="services-form-about">{children}</p>
  </Container>
);

export const ServiceFormInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}) => (
  <Col className="services-form-col">
    <p className="form-label">{label}</p>
    <Input
      className="rounded-pill p-4"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </Col>
);

export const ServiceFormBtn = ({ onClick, children }) => (
  <Col className="d-flex services-form-col">
    <button onClick={onClick} type="submit" className="form-btn">
      {children}
    </button>
  </Col>
);
