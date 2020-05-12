import { Container, Row, Col } from "reactstrap";
const choiceBtnArray = [
  {
    text: "Гаранты"
  },
  {
    text: "Цвет"
  },
  {
    text: "Условный пункт"
  }
];
const imgInfoArray = [
  {
    title: "Ширина секции",
    text: "от 1200 до 1800 мм"
  },
  {
    title: "Высота секции",
    text: "от 2200 до 2400 мм"
  },
  {
    title: "Глубина секции",
    text: "от 450 до 600 мм"
  }
];
const ServiceChoice = ({ children }) => (
  <div className="service-fif-block">
    <Container className="service-fif-block-container">
      <Row className="service-fif-block-row ml-0 mr-0">{children}</Row>
    </Container>
  </div>
);

export default ServiceChoice;
