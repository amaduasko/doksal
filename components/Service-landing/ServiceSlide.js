import { Container } from "reactstrap";
import Carousel from "react-multi-carousel";
import "./ServiceSlider.css";

const ServiceSlider = ({ galeryDotImagesArray, children }) => {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="galery-carousel-arrow galery-carousel-right-arrow"
        onClick={() => onClick()}
      >
        <i className="fas fa-chevron-right" />
      </button>
    );
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="galery-carousel-arrow galery-carousel-left-arrow"
        onClick={() => onClick()}
      >
        <i className="fas fa-chevron-left" />
      </button>
    );
  };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;

    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={
          active ? "service-slider-dot-active" : "service-slider-dot-inactive"
        }
        onClick={() => onClick()}
      >
        <div className="galery-dot-images-container">
          <img
            src={React.Children.toArray(galeryDotImagesArray)[index]}
            alt="dot image"
          />
        </div>
      </button>
    );
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return children ? (
    <Container className="overflow-hidden service-caroussel-box">
      <Carousel
        ssr
        arrows
        showDots
        infinite
        containerClass="galery-carousel-container"
        sliderClass="carousel-slider-class"
        itemClass="galery-carousel-item"
        dotListClass="galery-carousel-dot-class"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
        responsive={responsive}
      >
        {children}
      </Carousel>
    </Container>
  ) : null;
};
export default ServiceSlider;
