import './ProductDescription.css'

const ProductDescription = ({ children }) => (
  <div className="ProductDescription" dangerouslySetInnerHTML={{ __html: children }}>
  </div>
)

export default ProductDescription