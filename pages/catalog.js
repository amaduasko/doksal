import Page from "../components/Page"
import MyBreadcrumb from "../components/MyBreadcrumb"
import MyBreadcrumbItem from "../components/MyBreadcrumbItem"
import PageTitle from "../components/PageTitle"
import Pill from "../components/Pill"
import WrapPillCenter from "../components/WrapPillCenter"
import ChangeCatalog from "../components/ChangeCatalog"
import CatalogItemMax from "../components/CatalogItemMax"
import CatalogItemMini from "../components/CatalogItemMini"
import { Container } from "reactstrap"
import WrapperCatalogMini from "../components/WrapperCatalogMini"
import RoundBack from "../components/RoundBack"
import { useState, useEffect } from "react"
import WrapperChangeCatalog from "../components/WrapperChangeCatalog"
import WrapPillCenterPill from "../components/WrapPillCenterPill"
import qs from 'querystring'

const CatalogPage = ({ defaultProducts }) => {
  const [changeMenu, setChangeMenu] = useState(true)
  const [products, setProducts] = useState(defaultProducts) // Все товары
  const [count, setCount] = useState(0) // Количество товаров в данной категории
  const [start, setStart] = useState(0)
  const [category, setCategory] = useState("") // Все, Акции, С зеркалами, В прихожую, Распродажа
  const limit = 16 // количество товаров, которые

  const getProducts = async (start, category) => {
    const res = await fetch(`${process.env.APP_URL}/api/products?` + qs.stringify({
      start,
      limit,
      category
    }))
    const { products, count } = await res.json()
    return { products, count }
  }

  useEffect(() => {
    getProducts(0, category)
      .then(({ products, count }) => {
        setProducts(products)
        setCount(count)
        setStart(0)
      })
  }, [category])

  const handleMore = async () => {
    console.log("добавляем")
    getProducts(start + limit, category)
      .then(data => {
        setProducts([...products, ...data.products])
        setStart(start + limit)
      })
  }

  const productPrice = product => {
    const { cost: { stekla, profil, ldsp } } = product
    return stekla + profil + ldsp
  }

  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Каталог" />
      </MyBreadcrumb>

      <Container>
        <PageTitle>Наши шкафы-купе</PageTitle>

        <WrapPillCenter>
          <Pill isActive={category === ""} onClick={() => setCategory("")}>Все</Pill>
          <Pill isActive={category === "Акции"} onClick={() => setCategory("Акции")}>Акции</Pill>
          <Pill isActive={category === "С зеркалами"} onClick={() => setCategory("С зеркалами")}>С зеркалами</Pill>
          <Pill isActive={category === "В прихожую"} onClick={() => setCategory("В прихожую")}>В прихожую</Pill>
          <Pill isActive={category === "Распродажа"} onClick={() => setCategory("Распродажа")}>Распродажа</Pill>
        </WrapPillCenter>

        <WrapperChangeCatalog>
          <ChangeCatalog isActive={!changeMenu} onClick={() => setChangeMenu(false)}>
            <i className="fas fa-list"></i>
          </ChangeCatalog>
          <ChangeCatalog isActive={changeMenu} onClick={() => setChangeMenu(true)}>
            <i className="fas fa-th"></i>
          </ChangeCatalog>
        </WrapperChangeCatalog>

        {changeMenu && (
          <WrapperCatalogMini>
            {products && products.length > 0 && products.map(prod => (
              <CatalogItemMini
                img={prod.previewImage}
                title={prod.title}
                price={productPrice(prod)}
                sale={prod.sale}
                id={prod.id}
                key={prod.id}
              />
            ))}
            {products && products.length === 0 && <h3>К сожалению товары отсутствуют</h3>}
          </WrapperCatalogMini>
        )}

        {!changeMenu && (
          <>
            {products && products.length > 0 && products.map((prod) => (
              <CatalogItemMax
                img={prod.previewImage}
                title={prod.title}
                price={productPrice(prod)}
                description={prod.description}
                sale={prod.sale}
                id={prod.id}
                key={prod.id}
              />
            ))}
            {products && products.length === 0 && <h3>К сожалению товары отсутствуют</h3>}
          </>
        )}

        <WrapPillCenterPill>
          { start + limit < count && <Pill onClick={() => handleMore()}>Показать ещё</Pill> }
        </WrapPillCenterPill>
      </Container>
    </Page>
  )
}

CatalogPage.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.APP_URL}/api/products?` + qs.stringify({
    start: 0,
    limit: 16,
    category: ""
  }))

  const { products, count } = await res.json()

  return {
    defaultProducts: products,
    defaultCount: count 
  }
}

export default CatalogPage
