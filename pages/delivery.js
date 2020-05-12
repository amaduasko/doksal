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

const DeliveryPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Доставка и установка" />
      </MyBreadcrumb>

      <PageTitle>Доставка и установка</PageTitle>

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
              Доставка по Ижевску и подъем на грузовом лифте при заказе мебели с
              индивидуальным дизайном осуществляется бесплатно. Стоимость услуг
              по доставке стандартной мебели рассчитывается индивидуально.
            </p>
            <p>
              Монтаж мебели быстро и качественно выполнят наши
              высококвалифицированные специалисты, прошедшие обучение и
              аттестацию. После окончания сборки клиент подписывает акт
              выполненных работ. После чего вносится остаток от суммы
              договора.
            </p>
            <p>
              Перед доставкой мы свяжемся с Вами по указанному в договоре
              телефону и предупредим о дне и времени доставки.
            </p>
            <p>
              Остаток суммы по договору следует оплатить мастеру
              (сборщику) после установки.
            </p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  )
}

export default DeliveryPage
