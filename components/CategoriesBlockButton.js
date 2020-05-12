import "./CategoriesBlock.css"

const CategoriesBlockButton = ({ ...rest }) => {
    return (
        <div className="cat__block__order__window__div__btn">
            <button className="cat__block__order__window__btn" {...rest}>
                Заказать дизайн
          </button>
        </div>
    )
}
export default CategoriesBlockButton