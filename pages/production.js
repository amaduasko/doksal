import Page from "../components/Page"
import MyBreadcrumb from "../components/MyBreadcrumb"
import MyBreadcrumbItem from "../components/MyBreadcrumbItem"
import PageTitle from "../components/PageTitle"
import RoundBack from "../components/RoundBack"
import WrapperPage from "../components/WrapperPage"
import WrapperPageLeft from "../components/WrapperPageLeft"
import WrapperPageRight from "../components/WrapperPageRight"
import Content from "../components/PageContents"
import LeftMenu, { LeftMenuItem } from '../components/LeftMenu'

const ProductionPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Срок изготовления" />
      </MyBreadcrumb>

      <PageTitle>Срок изготовления</PageTitle>

      <WrapperPage>
        <WrapperPageLeft>
          <LeftMenu>
            <LeftMenuItem href="/where-buy">Где купить</LeftMenuItem>
            <LeftMenuItem href="/payments">Способы оплаты</LeftMenuItem>
            <LeftMenuItem href="/delivery">Доставка и установка</LeftMenuItem>
            <LeftMenuItem href="/production">Срок изготовления</LeftMenuItem>
            <LeftMenuItem href="/garanty">Гарантии</LeftMenuItem>
            <LeftMenuItem href="/requisites">Реквизиты</LeftMenuItem>
            <LeftMenuItem href="/policy">Политика конфиденциальности</LeftMenuItem>
          </LeftMenu>
        </WrapperPageLeft>
        <WrapperPageRight>
          <Content>
            <p>
              Срок изготовления мебели серийного производства составляет от 2 до
              5 рабочих дней с момента оплаты. Срок изготовления мебели на заказ
              зависит от сложности изделия и используемых материалов, но не
              превышает 20 рабочих дней.
            </p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  )
}

export default ProductionPage
