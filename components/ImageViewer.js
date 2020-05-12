import "./ImageViewer.css"

const ImageViewer = ({ src }) => {
  return (
    <div className="imageviewer__container">
      <div className="imageviewer" style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  )
}

export default ImageViewer
