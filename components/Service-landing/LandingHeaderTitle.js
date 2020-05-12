import { Container } from "reactstrap";
const LandingHeaderTitle = ({ children }) => (
  <Container className="services-lander-header-title_container">
    <h2 className="services-lander-header-title">{children}</h2>
  </Container>
);

export default LandingHeaderTitle;
