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

const PaymentsPage = () => {
  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem title="Способы оплаты" />
      </MyBreadcrumb>

      <PageTitle>Способы оплаты</PageTitle>

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
              Вы можете оплатить заказ любым удобным способом:
              банковской картой, наличным и безналичным расчетом, в рассрочку.
              Для серийных шкафов размер предоплаты составляет 100%.
            </p>
            <p>
              Для оплаты изготовления мебели по индивидуальным размерам
              необходимо внести аванс в размере 50% от общей стоимости заказа.
              Оставшиеся 50% оплачиваются после установки мебели.
            </p>
            <h6>Рассрочка:</h6>
            <p>
              Мы, в сотрудничестве с несколькими банками, предлагаем
              приобрести мебель в рассрочку без переплаты или кредит
              с минимальной процентной ставкой: без первоначального
              взноса и на удобный для Вас срок!
            </p>
          </Content>
        </WrapperPageRight>
      </WrapperPage>
    </Page>
  );
};

export default PaymentsPage;
