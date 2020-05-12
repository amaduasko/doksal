import "./TestimonialBlock.css"

const TestimonialBlock = ({ src, title }) => {
  return (
    <div className="testimonialblock">
      <div className="testimonialblock__image" style={{ backgroundImage: `url(${src})` }}></div>
      <div className="testimonialblock__content">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default TestimonialBlock
