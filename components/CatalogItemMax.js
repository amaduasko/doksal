import "./CatalogItemMax.css"
import Button from "../components/Button"

const CatalogItemMax = ({ img, price, title, description, button, id, sale, stock }) => {
  return (
    <div className="CatalogItemMax">
      <div className="CatalogItemMax__left__main">
        <div className="CatalogItemMax__left">
          <div
            className="CatalogItemMax__image"
            style={{
              backgroundSize: "contain",
              backgroundImage: `url(${img})`
            }}
          ></div>
          {stock && (
            <div className="CatalogItemMini__stock">
              <p className="CatalogItemMini__stock__stock">{stock}</p>
            </div>
          )}
          {sale && (
            <div className="CatalogItemMax__sale">
              <p className="CatalogItemMax__sale__sale">-{sale}%</p>
            </div>
          )}
        </div>
      </div>
      <div className="CatalogItemMax__right">
        <p className="CatalogItemMax__nameproduct">{title}</p>

        <div style={{maxHeight: 80, overflow: "hidden", lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: description }}></div>

        <div className="CatalogItemMax__absolute">
          <p className="CatalogItemMax__price">{price}</p>

          <div className="CatalogItemMax__content">
            <Button
              color="button_orange"
              href={`/product/${id}`}
            >
              Выбрать параметры
                </Button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default CatalogItemMax
