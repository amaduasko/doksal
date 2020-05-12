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

const RequisitesPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Реквизиты" />
      </MyBreadcrumb>

      <PageTitle>Реквизиты</PageTitle>

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
            <p>ООО «Ижевские фасады МДФ»</p>
            <p>ОГРН 1171832010283</p>
            <p>ИНН/КПП 1840070735/ 184001001</p>
            <p>р\с №4070 2810 5680 0001 4528</p>
            <p>
              Западно-Уральский Банк ПАО «Сбербанк России»
            </p>
            <p>БИК 049401601</p>
            <p>Кор.счет № 30101810400000000601</p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  )
}

export default RequisitesPage
