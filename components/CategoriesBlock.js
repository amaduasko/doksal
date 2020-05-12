import "./CategoriesBlock.css"

const CategoriesBlock = ({ title, img, button, href }) => (
  <div className="cat">
    {!button && (
      <a href={href}>
        <div className="cat__block">
          <div className="cat__block__title">
            <p>{title}</p>
          </div>
          <div className="cat__block__img" style={{
            backgroundImage: `url(${img})`
          }}></div>
        </div>
      </a>
    )}

    {button && (
      <a className="cat__block__link">
        <div className="cat__block__order__window">
          <p className="cat__block__order__window__title">Уникальный дизайн</p>
          <p className="cat__block__order__window__content">
            Мы поможем воплотить все ваши самые смелые идеи
          </p>
          {button}
        </div>
      </a>
    )}
  </div>
)

export default CategoriesBlock
