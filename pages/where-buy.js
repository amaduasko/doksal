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
import LeftMenu, { LeftMenuItem } from "../components/LeftMenu"

const WhereBuyPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Где купить" />
      </MyBreadcrumb>

      <PageTitle>Где купить</PageTitle>

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
              Вы можете купить мебель онлайн или посетить наши точки продаж по
              адресам:
            </p>
            <p>г. Ижевск</p>
            <p>
              СЦ АЗБУКА РЕМОНТА оф. 305, тел.:{" "}
              <a href="tel:+73412478606">478-606,</a>
              <a href="tel:+73412478689"> 478-689</a>
            </p>
            <p>
              СЦ ГВОЗДЬ, синий зал 2 ЭТАЖ оф.209, тел.:{" "}
              <a href="tel:+73412770108">77-01-08</a>
            </p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  )
}

export default WhereBuyPage
