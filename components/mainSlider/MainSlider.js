import { Container } from "reactstrap"
import Carousel from "react-multi-carousel"
import "./MainSlider.css"

const Slide = ({ image, title, caption }) => (
  <div
    className="Slide"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(${image})`
    }}
  >
    <Container>
      <div className="Slide__content">
        <h2>{title}</h2>
        <p>{caption}</p>
      </div>
    </Container>
  </div>
)

const CustomButtonGroup = props => {
  const { next, previous, goToSlide, carouselState } = props
  const { currentSlide } = carouselState

  const slides = [0, 1, 2]

  const myCurrentSlide = (currentSlide, n) => {
    if (currentSlide >= 0 && currentSlide <= 1) {
      return currentSlide + 1
    } else if (currentSlide >= 2 && currentSlide <= 4) {
      return currentSlide - 2
    } else if (currentSlide >= 5 && currentSlide <= 6) {
      return currentSlide - 5
    } else {
      return currentSlide
    }
  }

  return (
    <div className="CustomButtonGroup">
      <Container>
        <div className="CustomButtonGroup__buttons">
          <div className="CustomButtonGroup__arrows">
            <button
              className="CustomButtonGroup__button"
              onClick={() => previous()}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
            <button
              className="CustomButtonGroup__button"
              onClick={() => next()}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="CustomButtonGroup__dotsbox">
              {slides &&
                slides.map(slide => {
                  return (
                    <div
                      key={slide}
                      className={`CustomButtonGroup__dot ${
                        slide === myCurrentSlide(currentSlide, 3)
                          ? "active"
                          : ""
                        }`}
                      onClick={() => goToSlide(slide + 2)}
                    ></div>
                  )
                })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const MainSlider2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1
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
  }

  return (
    <div className="MainSlider2">
      <Carousel
        ssr={true}
        // infinite={true}
        arrows={false}
        responsive={responsive}
        containerClass="MainSlider2__container"
        customButtonGroup={<CustomButtonGroup />}
        // customTransition="all .7s"
        infinite
      >
        <Slide
          image="/static/img/slider-game.png"
          title=" ШКАФЫ-КУПЕ ОТ ПРОИЗВОДИТЕЛЯ ПО ЛУЧШЕЙ ЦЕНЕ ОТ 2-х ДО 7 ДНЕЙ!"
        />
        <Slide
          image="/static/img/Rectangle1.png"
          title=" ВСТРОЕННЫЕ ШКАФЫ ПО ЛУЧШЕЙ ЦЕНЕ ОТ 2-х ДО 7 ДНЕЙ!"
        />
        <Slide
          image="/static/img/Rectangle10.png"
          title="ВМЕСТИТЕЛЬНЫЕ ГАРДЕРОБНЫЕ ОТ ПРОИЗВОДИТЕЛЯ ПО ЛУЧШЕЙ ЦЕНЕ ОТ 2-х ДО 7 ДНЕЙ!"
          caption="Доставка по всей России"
        />
        {/* <Slide
          image="/static/img/landing-header-bg.png"
          title="ТЕХНОЛОГИЧНЫЕ КУХНИ ПО ЛУЧШЕЙ ЦЕНЕ ЗА 2 ДНЯ!"
          caption="Доставка по всей России!" /> */}
      </Carousel>
    </div>
  )
}

export default MainSlider2
