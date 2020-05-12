import Link from 'next/link'
import Button from "../components/Button"
import "./CatalogItemMini.css"

const CatalogItemMini = ({ img, title, price, sale, stock, button, id }) => {
  const discount = sale ? (price * (100 - sale)) / 100 : null

  const getPriceString = price => {
    return price.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
  }

  const blueRubl = (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.02286 12.6134H3.40926V14.6591C3.40926 14.7587 3.44111 14.8402 3.50518 14.9038C3.56908 14.9679 3.65076 15 3.75027 15H5.52929C5.62162 15 5.70152 14.9679 5.769 14.9038C5.83648 14.8402 5.87012 14.7586 5.87012 14.6591V12.6134H11.2501C11.3494 12.6134 11.4311 12.5818 11.4951 12.5177C11.5592 12.4536 11.591 12.3721 11.591 12.2726V10.9089C11.591 10.8099 11.5592 10.7279 11.4951 10.6642C11.4313 10.6001 11.3494 10.568 11.2501 10.568H5.86994V9.31086H9.4921C10.9125 9.31086 12.0718 8.87805 12.9704 8.01121C13.8688 7.14528 14.3182 6.0267 14.3182 4.65543C14.3182 3.28506 13.8688 2.16646 12.9704 1.29965C12.0719 0.433686 10.9125 0 9.4921 0H3.75009C3.65056 0 3.56905 0.0320214 3.505 0.0957409C3.44111 0.159813 3.40909 0.241852 3.40909 0.340827V7.04198H1.02286C0.923353 7.04198 0.841814 7.07565 0.777772 7.1431C0.713905 7.21059 0.681854 7.29048 0.681854 7.38278V8.96997C0.681854 9.06951 0.713699 9.15104 0.777772 9.21509C0.841844 9.27919 0.923176 9.31083 1.02286 9.31083H3.40926V10.568H1.02286C0.923353 10.568 0.841814 10.6 0.777772 10.6641C0.713905 10.7278 0.681854 10.8097 0.681854 10.9088V12.2725C0.681854 12.3721 0.713699 12.4536 0.777772 12.5176C0.841814 12.5818 0.923324 12.6134 1.02286 12.6134ZM5.86994 2.26941H9.27904C10.0318 2.26941 10.6389 2.4895 11.1007 2.92983C11.5623 3.37019 11.7932 3.94566 11.7932 4.65561C11.7932 5.3659 11.5623 5.94155 11.1007 6.38138C10.6389 6.82209 10.0318 7.04219 9.27904 7.04219H5.86994V2.26941Z" fill="#2C87A6"/>
    </svg>
  )

  const blackRubl = (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.02289 12.6134H3.40929V14.6591C3.40929 14.7587 3.44114 14.8402 3.50521 14.9038C3.56911 14.9679 3.65079 15 3.7503 15H5.52932C5.62165 15 5.70155 14.9679 5.76903 14.9038C5.83651 14.8402 5.87015 14.7586 5.87015 14.6591V12.6134H11.2501C11.3494 12.6134 11.4311 12.5818 11.4952 12.5177C11.5593 12.4536 11.5911 12.3721 11.5911 12.2726V10.9089C11.5911 10.8099 11.5593 10.7279 11.4952 10.6642C11.4313 10.6001 11.3494 10.568 11.2501 10.568H5.86998V9.31086H9.49213C10.9125 9.31086 12.0718 8.87805 12.9705 8.01121C13.8688 7.14528 14.3182 6.0267 14.3182 4.65543C14.3182 3.28506 13.8688 2.16646 12.9705 1.29965C12.072 0.433686 10.9125 0 9.49213 0H3.75012C3.65059 0 3.56908 0.0320214 3.50503 0.0957409C3.44114 0.159813 3.40912 0.241852 3.40912 0.340827V7.04198H1.02289C0.923383 7.04198 0.841845 7.07565 0.777802 7.1431C0.713936 7.21059 0.681885 7.29048 0.681885 7.38278V8.96997C0.681885 9.06951 0.71373 9.15104 0.777802 9.21509C0.841874 9.27919 0.923207 9.31083 1.02289 9.31083H3.40929V10.568H1.02289C0.923383 10.568 0.841845 10.6 0.777802 10.6641C0.713936 10.7278 0.681885 10.8097 0.681885 10.9088V12.2725C0.681885 12.3721 0.71373 12.4536 0.777802 12.5176C0.841845 12.5818 0.923354 12.6134 1.02289 12.6134ZM5.86998 2.26941H9.27907C10.0318 2.26941 10.639 2.4895 11.1008 2.92983C11.5623 3.37019 11.7932 3.94566 11.7932 4.65561C11.7932 5.3659 11.5623 5.94155 11.1008 6.38138C10.639 6.82209 10.0318 7.04219 9.27907 7.04219H5.86998V2.26941Z" fill="#444444"/>
    </svg>
  )

  return (
    <Link href={`/product/${id}`}>
      <div className="CatalogItemMini">
        <div className="CatalogItemMini__image__main">
          <div className="CatalogItemMinit__image__container">
            <div className="CatalogItemMini__image" style={{ backgroundImage: `url(${img})` }}></div>
          </div>
          {sale && (
            <div className="CatalogItemMini__sale">
              <p className="CatalogItemMini__sale__sale">-{sale}%</p>
            </div>
          )}
          {stock && (
            <div className="CatalogItemMini__stock">
              <p className="CatalogItemMini__stock__stock">{stock}</p>
            </div>
          )}
        </div>
        <p className="CatalogItemMini__nameproduct">{title}</p>
        <p className="CatalogItemMini__paramChange">
          Все параметры можно изменить на странице шкафа
        </p>
        {!discount && <p className="CatalogItemMini__price">{getPriceString(price)} {blackRubl}</p>}
        {discount && (
          <div className="discount__window">
            <span className="price__sale">{getPriceString(price)}</span>
            <span className="discount">{getPriceString(discount)} {blueRubl}</span>
          </div>
        )}

        <div className="CatalogItemMini__content">
          <Button>Выбрать параметры</Button>
        </div>
      </div>
    </Link>
  )
}
export default CatalogItemMini
