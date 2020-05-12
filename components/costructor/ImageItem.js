import "./ImageItem.css"

const ImageItem = ({ isChecked, src, title, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <div
        className={`image-item__border ${
          isChecked ? "image-item__border_blue" : ""
        }`}
      >
        <div
          className="image-item__image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div className="image-item__title">{title}</div>
    </div>
  )
}

export default ImageItem
