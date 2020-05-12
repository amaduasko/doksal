import { Container } from "reactstrap";
import Carousel from "react-multi-carousel";
import ServiceMobileSlider from "../MobileSliders";
import ReviewItem, {
  ReviewItemTitle,
  ReviewItemDate,
  ReviewItemText
} from "./Review-Item/ReviewItem";
import "./Review.css";

const ReviewComponent = () => {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="review-slider-arrow review-right-arrow"
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
        className="review-slider-arrow review-left-arrow"
        onClick={() => onClick()}
      >
        <i className="fas fa-chevron-left" />
      </button>
    );
  };
  return (
    <Container className="position-relative mt-4 mb-4 mobile-review-style">
      <Carousel
        ssr={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        containerClass="review-slider-container"
        sliderClass="review-slider-list"
        itemClass="review-caroussel-item"
        draggable
        infinite={true}
        keyBoardControl
        minimumTouchDrag={80}
        showDots={false}
        slidesToSlide={1}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 2,
            partialVisibilityGutter: 50
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 20
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 50
          }
        }}
      >
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
      </Carousel>
      <ServiceMobileSlider>
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
        <ReviewItem>
          <ReviewItemTitle>Анастасия Березуева</ReviewItemTitle>
          <ReviewItemDate>29.08.2013</ReviewItemDate>
          <ReviewItemText>
            Буду первой!!!))) заказали шкаф- купе с фотопечатью, подкупили сроки
            изготовления- 7 дней!!!! Но шкаф нам изготовили аж за 4!!!! Были
            нереально рады этому. Объехав все мебельные салоны в городе мне
            предлагали месяц ожидания. Очень осталась довольна обслуживанием...
          </ReviewItemText>
        </ReviewItem>
      </ServiceMobileSlider>
    </Container>
  );
};

export default ReviewComponent;
