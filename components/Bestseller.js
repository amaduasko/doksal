import "./Bestseller.css"
import "./CatalogItemMini.css"
import { useState } from "react"
import Button from "../components/Button"
import Link from "next/link"

const COLORS = [
  { color: "bel-glyan", title: "Белый глянец" },
  { color: "led-kanion", title: "Ледяной каньон" },
  { color: "svet-yasen", title: "Светлый ясень" },
  { color: "tem-venge", title: "Темный венге" },
  { color: "vyb-derevo", title: "Выбеленное дерево" }
]

const Bestseller = ({ id, img, nameproduct, price, sale, stock, color }) => {
  const [state, setState] = useState(false)
  const discount = sale ? (price * sale) / 100 : null
  const blackRubl = (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.02289 12.6134H3.40929V14.6591C3.40929 14.7587 3.44114 14.8402 3.50521 14.9038C3.56911 14.9679 3.65079 15 3.7503 15H5.52932C5.62165 15 5.70155 14.9679 5.76903 14.9038C5.83651 14.8402 5.87015 14.7586 5.87015 14.6591V12.6134H11.2501C11.3494 12.6134 11.4311 12.5818 11.4952 12.5177C11.5593 12.4536 11.5911 12.3721 11.5911 12.2726V10.9089C11.5911 10.8099 11.5593 10.7279 11.4952 10.6642C11.4313 10.6001 11.3494 10.568 11.2501 10.568H5.86998V9.31086H9.49213C10.9125 9.31086 12.0718 8.87805 12.9705 8.01121C13.8688 7.14528 14.3182 6.0267 14.3182 4.65543C14.3182 3.28506 13.8688 2.16646 12.9705 1.29965C12.072 0.433686 10.9125 0 9.49213 0H3.75012C3.65059 0 3.56908 0.0320214 3.50503 0.0957409C3.44114 0.159813 3.40912 0.241852 3.40912 0.340827V7.04198H1.02289C0.923383 7.04198 0.841845 7.07565 0.777802 7.1431C0.713936 7.21059 0.681885 7.29048 0.681885 7.38278V8.96997C0.681885 9.06951 0.71373 9.15104 0.777802 9.21509C0.841874 9.27919 0.923207 9.31083 1.02289 9.31083H3.40929V10.568H1.02289C0.923383 10.568 0.841845 10.6 0.777802 10.6641C0.713936 10.7278 0.681885 10.8097 0.681885 10.9088V12.2725C0.681885 12.3721 0.71373 12.4536 0.777802 12.5176C0.841845 12.5818 0.923354 12.6134 1.02289 12.6134ZM5.86998 2.26941H9.27907C10.0318 2.26941 10.639 2.4895 11.1008 2.92983C11.5623 3.37019 11.7932 3.94566 11.7932 4.65561C11.7932 5.3659 11.5623 5.94155 11.1008 6.38138C10.639 6.82209 10.0318 7.04219 9.27907 7.04219H5.86998V2.26941Z" fill="#444444"/>
    </svg>
  )

  return (
    <Link href={`/product/${id}`}>
      <div
        className="bestsellerblock"
        onMouseMove={() => setState(true)}
        onMouseLeave={() => setState(false)}
      >
        {/* окно без кнопки */}
        <div className={`bestsellerblock__noneBtn ${state ? "" : "active"}`}>
          <div style={{padding: 20}}>
            <div className="bestsellerblock__image" style={{
              backgroundImage: `url(${img})`
            }}></div>
          </div>
          <p className="bestsellerblock__nameproduct">{nameproduct}</p>
          {sale && (
            <div className="bestsellerblock__sale">
              <p className="bestsellerblock__sale__sale">-{sale}%</p>
            </div>
          )}
          {stock && (
            <div className="bestsellerblock__stock">
              <p className="bestsellerblock__stock__stock">{stock}</p>
            </div>
          )}
          {/* <div className="bestsellerblock_div">
            { COLORS.map(c => (
              <div className="bestsellerblock__color" style={{ backgroundImage: `url(/static/img/constructor/${c.color}.png)` }} title={c.title}></div>
            )) }
          </div> */}
          {!discount && <p className="CatalogItemMini__price">{price} {blackRubl}</p>}
          {discount && (
            <div className="discount__window">
              <span className="price__sale">{price}</span>
              <span className="discount">{discount}</span>
            </div>
          )}
        </div>
        {/* окно с кнопкой */}
        <div className={`bestsellerblock__withBtn ${state ? "active" : ""}`}>
          <div style={{padding: 20}}>
            <div className="bestsellerblock__image" style={{
              backgroundImage: `url(${img})`
            }}></div>
          </div>
          <p className="bestsellerblock__nameproduct">{nameproduct}</p>
          {sale && (
            <div className="bestsellerblock__sale">
              <p className="bestsellerblock__sale__sale">-{sale}%</p>
            </div>
          )}
          {stock && (
            <div className="bestsellerblock__stock">
              <p className="bestsellerblock__stock__stock">{stock}</p>
            </div>
          )}

          <div className="bestsellerblock_div">
            { COLORS.map(c => (
              <div className="bestsellerblock__color" style={{ backgroundImage: `url(/static/img/constructor/${c.color}.png)` }} title={c.title}></div>
            )) }
          </div>
        
          {!discount && <p className="CatalogItemMini__price" style={{marginBottom: 0}}>{price} {blackRubl}</p>}
          {discount && (
            <div className="discount__window">
              <span className="price__sale">{price}</span>
              <span className="discount">{discount}</span>
            </div>
          )}
          <div className="bestsellerblock__content">
            <Button href={`/product/${id}`}>Выбрать параметры</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Bestseller
