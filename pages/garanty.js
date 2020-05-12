import Page from "../components/Page"
import MyBreadcrumb from "../components/MyBreadcrumb"
import MyBreadcrumbItem from "../components/MyBreadcrumbItem"
import PageTitle from "../components/PageTitle"
import RoundBack from "../components/RoundBack"
import WrapperPage from "../components/WrapperPage"
import WrapperPageLeft from "../components/WrapperPageLeft"
import WrapperPageRight from "../components/WrapperPageRight"
import InfoPageMenu from "../components/InfoPageMenu"
import Content from "../components/PageContents"
import LeftMenu, { LeftMenuItem } from '../components/LeftMenu'

const GarantyPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Гарантии" />
      </MyBreadcrumb>

      <PageTitle>Гарантии</PageTitle>

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
              На всю нашу мебель мы даем гарантию 12 месяцев.
            </p>
            <p>
              Все претензии по качеству принимаются магазином в течении
              гарантийного срока. С обязательным приложением договора и чека.
            </p>
            <p>
              Компания не несет ответственность за дефекты, появившиеся из-за
              несоблюдения правил эксплуатации, механических повреждений и
              самостоятельной сборки.
            </p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  )
}

export default GarantyPage
