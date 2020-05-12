import { Row } from "reactstrap";
import { ServicesHeader } from "./Service-landing/ServiceHeader";
import LandingHeaderTitle from "./Service-landing/LandingHeaderTitle";
import {
  HeaderBtn,
  LandingHeaderButtonGroup,
} from "./Service-landing/LandingButtons";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ServiceForm from "./Service-landing/ServiceForm";
import {
  ServiceFormAbout,
  ServiceFormInput,
  ServiceFormBtn,
} from "./Service-landing/ServiceFormItems";
import ServiceTypes from "./Service-landing/ServiceTypes";
import {
  ServiceTypeItemTitle,
  ServiceTypeItemImage,
  ServiceTypeItem,
} from "./Service-landing/ServiceTypeItem";
import ServicePossibleOrder from "./Service-landing/ServicePossibleOrder";
import {
  ServicePossibleOrderItemTitle,
  ServicePossibleOrderItemImage,
  ServicePossibleOrderItem,
} from "./Service-landing/ServicePossibleOrderItem";
import ServiceWorkInfo from "./Service-landing/ServiceWorkInfo";
import {
  ServiceWorkInfoBlockRow,
  ServiceWorkInfoBlockImage,
  ServiceWorkInfoBlockAbout,
  ServiceWorkInfoBlockAboutText,
  ServiceInfoBlockAboutNumber,
} from "./Service-landing/ServiceWorkInfoItem";
import ServiceConstructor from "./Service-landing/ServiceConstructor";
import {
  ConstructorImagePreview,
  ConstructorImagePreviewAbout,
  ConstructorImagePreviewLine,
  ConstructorImagePreviewBox,
  ConstructorImageBox,
  ConstructorBox,
  ConstructorMenu,
  ConstructorInfoBox,
} from "./Service-landing/ServiceConstructorItem";
import ServiceChoice from "./Service-landing/ServiceChoice";
import {
  ServiceChoiceBtn,
  ServiceChoiceBtnGroup,
  ServiceChoiceInfoTab,
  ServiceChoiceInfoItem,
  ServiceChoiceInfo,
  ServiceChoiceAbout,
  ServiceChoiceImage,
} from "./Service-landing/ServiceChoiceItems";
import SreviceGaleryBlock from "./Service-landing/ServiceGaleryBlock";
import {
  ServiceGaleryItem,
  ServiceGaleryItemImage,
} from "./Service-landing/ServiceGaleryItem";
import ServiceUtility from "./Service-landing/ServiceUtility";
import {
  ServiceUtilityItemName,
  ServiceUtilityItemPrice,
  ServiceUtilityItemItemImage,
  ServiceUtilityItemItemAbout,
  ServiceUtilityItem,
} from "./Service-landing/ServiceUtilityItem";
import ServiceQA from "./Service-landing/ServiceQA";
import {
  ServiceQAItemTitle,
  ServiceQAItemAnswer,
  ServiceQAItem,
} from "./Service-landing/ServiceQAItem";

import "./Services-Landing.css";
import Modal, { ModalInfo } from "../components/Modal";
import { b24SendLead } from "../utils/b24";
import { useState } from "react";

const galeryImagesArray = [
  "/static/img/Rectangle260.png",
  "/static/img/Rectangle260.png",
  "/static/img/Rectangle260.png",
  "/static/img/Rectangle260.png",
];

const checkPhonoNumb = (phoneNumber) => {
  const phoneReg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
  return phoneReg.test(phoneNumber);
};

const ServicesLandingKitchens = () => {
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isPhoneErr, setISPhoneErr] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const checkPhoneNumber = (event) => {
    event.target.value && !checkPhonoNumb(event.target.value)
      ? event.target.classList.add("border-danger")
      : event.target.classList.remove("border-danger");
    setISPhoneErr(!checkPhonoNumb(event.target.value));
    setLeadPhone(event.target.value);
  };

  return (
    <div>
      <ServicesHeader headerBg="/static/img/landing-header-bg.png">
        <LandingHeaderButtonGroup>
          <HeaderBtn to="/pages/kitchens">Кухни</HeaderBtn>
          <HeaderBtn to="/pages/dressing-rooms">Гардеробные</HeaderBtn>
          <HeaderBtn to="/pages/cabinets">Встроенные шкафы</HeaderBtn>
        </LandingHeaderButtonGroup>
        <LandingHeaderTitle>Кухни</LandingHeaderTitle>
      </ServicesHeader>
      <ServiceTypes>
        <ServiceTypeItem>
          <ServiceTypeItemImage source="/static/img/service-type1.svg" />
          <ServiceTypeItemTitle>
            Проектировка
            <br /> под любую площадь
          </ServiceTypeItemTitle>
        </ServiceTypeItem>
        <ServiceTypeItem>
          <ServiceTypeItemImage source="/static/img/service-type-2.svg" />
          <ServiceTypeItemTitle>
            Используйте
            <br /> все пространство
          </ServiceTypeItemTitle>
        </ServiceTypeItem>
        <ServiceTypeItem>
          <ServiceTypeItemImage source="/static/img/service-type-3.svg" />
          <ServiceTypeItemTitle>
            Разнообразие
            <br /> в исполнениио
          </ServiceTypeItemTitle>
        </ServiceTypeItem>
        <ServiceTypeItem>
          <ServiceTypeItemImage source="/static/img/service-type-4.svg" />
          <ServiceTypeItemTitle className="pt-2">
            Разные секции
          </ServiceTypeItemTitle>
        </ServiceTypeItem>
      </ServiceTypes>

      <Section>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Преимущества изготовления на заказ
        </SectionTitle>

        <ServicePossibleOrder>
          <ServicePossibleOrderItem>
            <ServicePossibleOrderItemImage source="/static/img/vector-1.svg" />
            <ServicePossibleOrderItemTitle>
              Качественная сборка
            </ServicePossibleOrderItemTitle>
          </ServicePossibleOrderItem>

          <ServicePossibleOrderItem>
            <ServicePossibleOrderItemImage source="/static/img/vector-2.svg" />
            <ServicePossibleOrderItemTitle>
              Предоплата
              <br /> от 1000 рублей
            </ServicePossibleOrderItemTitle>
          </ServicePossibleOrderItem>

          <ServicePossibleOrderItem>
            <ServicePossibleOrderItemImage source="/static/img/vector-3.svg" />
            <ServicePossibleOrderItemTitle>
              Гарантия 1 год
            </ServicePossibleOrderItemTitle>
          </ServicePossibleOrderItem>

          <ServicePossibleOrderItem>
            <ServicePossibleOrderItemImage source="/static/img/vector-4.svg" />
            <ServicePossibleOrderItemTitle>
              Срок изготовления от 2 дней
            </ServicePossibleOrderItemTitle>
          </ServicePossibleOrderItem>

          <ServicePossibleOrderItem>
            <ServicePossibleOrderItemImage source="/static/img/vector-5.svg" />
            <ServicePossibleOrderItemTitle>
              Безупречное
              <br /> качество мебели
            </ServicePossibleOrderItemTitle>
          </ServicePossibleOrderItem>
        </ServicePossibleOrder>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Как заказать
        </SectionTitle>

        <ServiceFormAbout>
          Оставьте ваш телефон и мы перезвоним для уточнения деталей и
          согласования{" "}
          <span className="form-about-free-design">
            бесплатного дизайн-проекта.
          </span>{" "}
          Для получения материалов дизайн-проекта оставьте вашу эл. почту
        </ServiceFormAbout>
        <ServiceForm onSubmit={(evt) => console.log(evt.target.value)}>
          <ServiceFormInput
            type="text"
            label="Ваше имя"
            defaultValue={leadName}
            onChange={(e) => setLeadName(e.target.value)}
          />
          <ServiceFormInput
            type="tel"
            label="Ваш телефон"
            placeholder="+7__-__-__-__"
            defaultValue={leadPhone}
            onChange={(e) => checkPhoneNumber(e)}
          />
          <ServiceFormInput
            type="email"
            label="Ваш E-mail"
            defaultValue={leadEmail}
            onChange={(e) => setLeadEmail(e.target.value)}
          />
          <ServiceFormBtn
            onClick={async (event) => {
              event.preventDefault();
              if (isPhoneErr) return;

              const ok = await b24SendLead(
                "Заказать консультацию и дизайн проекта",
                leadName,
                leadPhone,
                leadEmail
              );

              if (ok) setIsSended(true);
            }}
          >
            Заказать консультацию и дизайн проекта
          </ServiceFormBtn>
        </ServiceForm>
        {isSended && (
          <Modal>
            <ModalInfo>
              Ваша заявка отправлена, наши мастера свяжутся с Вами в ближайшее
              время!
            </ModalInfo>
          </Modal>
        )}
      </Section>
      <Section style={{ paddingTop: "0" }}>
        <ServiceWorkInfo>
          <ServiceWorkInfoBlockRow className="first-row">
            <ServiceWorkInfoBlockImage source="/static/img/Rectangle243.png" />
            <ServiceWorkInfoBlockAbout>
              <ServiceInfoBlockAboutNumber>2</ServiceInfoBlockAboutNumber>
              <ServiceWorkInfoBlockAboutText>
                В течение 3-х дней мы произведём замеры и подготовим
                дизайн-проект под ваш интерьер
              </ServiceWorkInfoBlockAboutText>
            </ServiceWorkInfoBlockAbout>
          </ServiceWorkInfoBlockRow>
          <ServiceWorkInfoBlockRow className="second-row">
            <ServiceWorkInfoBlockAbout>
              <ServiceInfoBlockAboutNumber>3</ServiceInfoBlockAboutNumber>
              <ServiceWorkInfoBlockAboutText>
                После согласования деталей мы рассчитываем стоимость вашей
                гардеробной и озвучиваем сроки изготовления. Вы оплачиваете
                предоплату —{" "}
                <span className="text-lightblue">от 1000 руб.</span>
              </ServiceWorkInfoBlockAboutText>
            </ServiceWorkInfoBlockAbout>
            <ServiceWorkInfoBlockImage source="/static/img/Rectangle244.png" />
          </ServiceWorkInfoBlockRow>
          <ServiceWorkInfoBlockRow className="third-row">
            <ServiceWorkInfoBlockImage source="/static/img/Rectangle245.png" />
            <ServiceWorkInfoBlockAbout>
              <ServiceInfoBlockAboutNumber>4</ServiceInfoBlockAboutNumber>
              <ServiceWorkInfoBlockAboutText>
                {" "}
                Вы ожидаете согласованный срок. В случае нарушения срока мы
                компенсируем вам ожидание. В конце этого срока мы созваниваемся
                с вами и{" "}
                <span className="text-lightblue">
                  договариваемся по доставке и сборке.
                </span>
              </ServiceWorkInfoBlockAboutText>
            </ServiceWorkInfoBlockAbout>
          </ServiceWorkInfoBlockRow>
          <ServiceWorkInfoBlockRow className="forf-row">
            <ServiceWorkInfoBlockAbout>
              <ServiceInfoBlockAboutNumber>5</ServiceInfoBlockAboutNumber>
              <ServiceWorkInfoBlockAboutText>
                Мы <span className="text-lightblue">привозим вам кухню</span> в
                удобное время. В течение 3-х дней собираем её.
              </ServiceWorkInfoBlockAboutText>
            </ServiceWorkInfoBlockAbout>
            <ServiceWorkInfoBlockImage source="/static/img/Rectangle246.png" />
          </ServiceWorkInfoBlockRow>
        </ServiceWorkInfo>
      </Section>
      <Section>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Особенности кухонь
        </SectionTitle>

        <ServiceConstructor>
          <Row className=" ml-0 mr-0 constructor-row">
            <ConstructorMenu />
            <ConstructorBox>
              <ConstructorImagePreviewBox>
                <ConstructorImagePreview source="/static/img/ellipse10.png" />
                <ConstructorImagePreviewAbout>
                  Условное описание крепления или иные преимущества
                </ConstructorImagePreviewAbout>
              </ConstructorImagePreviewBox>
              <ConstructorImagePreviewLine />
              <ConstructorImageBox source="/static/img/image24.png" />
            </ConstructorBox>
          </Row>
          <ConstructorInfoBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </ConstructorInfoBox>
        </ServiceConstructor>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Что можно выбрать
        </SectionTitle>

        <ServiceChoice>
          <ServiceChoiceAbout>
            <ServiceChoiceBtnGroup>
              <ServiceChoiceBtn>Габариты</ServiceChoiceBtn>
              <ServiceChoiceBtn>Цвет</ServiceChoiceBtn>
              <ServiceChoiceBtn>Условный пункт</ServiceChoiceBtn>
            </ServiceChoiceBtnGroup>
            <ServiceChoiceInfo>
              <ServiceChoiceInfoTab>
                <ServiceChoiceInfoItem>
                  Ширина секции :{" "}
                  <span className="text-configuration">от 1200 до 1800 мм</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Высота секции :{" "}
                  <span className="text-configuration">от 2200 до 2400 мм</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Глубина секции :{" "}
                  <span className="text-configuration">от 450 до 600 мм</span>
                </ServiceChoiceInfoItem>
              </ServiceChoiceInfoTab>
              <ServiceChoiceInfoTab>
                <ServiceChoiceInfoItem>
                  Ширина секции :{" "}
                  <span className="text-configuration">Something</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Высота секции :{" "}
                  <span className="text-configuration">Something</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Глубина секции :{" "}
                  <span className="text-configuration">Something</span>
                </ServiceChoiceInfoItem>
              </ServiceChoiceInfoTab>
              <ServiceChoiceInfoTab>
                <ServiceChoiceInfoItem>
                  Ширина секции :{" "}
                  <span className="text-configuration">Something2</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Высота секции :{" "}
                  <span className="text-configuration">Something2</span>
                </ServiceChoiceInfoItem>
                <ServiceChoiceInfoItem>
                  Глубина секции :{" "}
                  <span className="text-configuration">Somwthing2</span>
                </ServiceChoiceInfoItem>
              </ServiceChoiceInfoTab>
            </ServiceChoiceInfo>
          </ServiceChoiceAbout>
          <ServiceChoiceImage source="/static/img/Rectangle253.png" />
        </ServiceChoice>
      </Section>
      <Section style={{ backgroundColor: "#E5E5E5" }}>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Остались вопросы или хотите заказать кухню?
        </SectionTitle>
        <ServiceFormAbout>
          Оставьте ваш телефон и мы перезвоним для уточнения деталей и
          согласования{" "}
          <span className="form-about-free-design">
            бесплатного дизайн-проекта.
          </span>{" "}
        </ServiceFormAbout>
        <ServiceForm onSubmit={(evt) => console.log(evt.target.value)}>
          <ServiceFormInput type="text" label="Ваше имя" />
          <ServiceFormInput
            type="tel"
            label="Ваш телефон"
            placeholder="+7__-__-__-__"
          />
          <ServiceFormInput type="email" label="Ваш E-mail" />
          <ServiceFormBtn>
            Заказать консультацию и дизайн проекта
          </ServiceFormBtn>
        </ServiceForm>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <SectionTitle
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Посмотрите галерею кухонь
        </SectionTitle>

        <SreviceGaleryBlock galeryImagesArray={galeryImagesArray}>
          <ServiceGaleryItem>
            <ServiceGaleryItemImage source="/static/img/Rectangle260.png" />
          </ServiceGaleryItem>
          <ServiceGaleryItem>
            <ServiceGaleryItemImage source="/static/img/Rectangle260.png" />
          </ServiceGaleryItem>
          <ServiceGaleryItem>
            <ServiceGaleryItemImage source="/static/img/Rectangle260.png" />
          </ServiceGaleryItem>
          <ServiceGaleryItem>
            <ServiceGaleryItemImage source="/static/img/Rectangle260.png" />
          </ServiceGaleryItem>
        </SreviceGaleryBlock>
      </Section>
      <Section style={{ backgroundColor: "#e5e5e5" }}>
        <SectionTitle
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Полезные аксессуары для кухни
        </SectionTitle>
        <ServiceUtility>
          <ServiceUtilityItem>
            <ServiceUtilityItemItemImage source="/static/img/image25.png" />
            <ServiceUtilityItemItemAbout>
              <ServiceUtilityItemName>
                Условное название аксессуара
              </ServiceUtilityItemName>
              <ServiceUtilityItemPrice>500 руб</ServiceUtilityItemPrice>
            </ServiceUtilityItemItemAbout>
          </ServiceUtilityItem>
          <ServiceUtilityItem>
            <ServiceUtilityItemItemImage source="/static/img/image26.png" />
            <ServiceUtilityItemItemAbout>
              <ServiceUtilityItemName>
                Условное название аксессуара
              </ServiceUtilityItemName>
              <ServiceUtilityItemPrice>500 руб</ServiceUtilityItemPrice>
            </ServiceUtilityItemItemAbout>
          </ServiceUtilityItem>
          <ServiceUtilityItem>
            <ServiceUtilityItemItemImage source="/static/img/image25.png" />
            <ServiceUtilityItemItemAbout>
              <ServiceUtilityItemName>
                Условное название аксессуара
              </ServiceUtilityItemName>
              <ServiceUtilityItemPrice>500 руб</ServiceUtilityItemPrice>
            </ServiceUtilityItemItemAbout>
          </ServiceUtilityItem>
          <ServiceUtilityItem>
            <ServiceUtilityItemItemImage source="/static/img/image26.png" />
            <ServiceUtilityItemItemAbout>
              <ServiceUtilityItemName>
                Условное название аксессуара
              </ServiceUtilityItemName>
              <ServiceUtilityItemPrice>500 руб</ServiceUtilityItemPrice>
            </ServiceUtilityItemItemAbout>
          </ServiceUtilityItem>
        </ServiceUtility>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <SectionTitle
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Популярные вопросы и ответы на них
        </SectionTitle>
        <ServiceQA>
          <ServiceQAItem>
            <ServiceQAItemTitle>
              Условный вопрос посвященный теме
            </ServiceQAItemTitle>
            <ServiceQAItemAnswer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ServiceQAItemAnswer>
          </ServiceQAItem>
          <ServiceQAItem>
            <ServiceQAItemTitle>
              Условный вопрос посвященный теме
            </ServiceQAItemTitle>
            <ServiceQAItemAnswer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ServiceQAItemAnswer>
          </ServiceQAItem>
          <ServiceQAItem>
            <ServiceQAItemTitle>
              Условный вопрос посвященный теме
            </ServiceQAItemTitle>
            <ServiceQAItemAnswer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ServiceQAItemAnswer>
          </ServiceQAItem>
        </ServiceQA>
      </Section>
      <Section style={{ backgroundColor: "#E5E5E5" }}>
        <SectionTitle
          style={{ paddingBottom: "1rem" }}
          styleForH2={{ paddingLeft: "0" }}
          className="landing-section-title"
        >
          Остались вопросы или хотите заказать кухню?
        </SectionTitle>
        <ServiceFormAbout>
          Оставьте ваш телефон и мы перезвоним для уточнения деталей и
          согласования{" "}
          <span className="form-about-free-design">
            бесплатного дизайн-проекта.
          </span>{" "}
        </ServiceFormAbout>
        <ServiceForm onSubmit={(evt) => console.log(evt.target.value)}>
          <ServiceFormInput type="text" label="Ваше имя" />
          <ServiceFormInput
            type="tel"
            label="Ваш телефон"
            placeholder="+7__-__-__-__"
          />
          <ServiceFormInput type="email" label="Ваш E-mail" />
          <ServiceFormBtn>
            Заказать консультацию и дизайн проекта
          </ServiceFormBtn>
        </ServiceForm>
      </Section>
    </div>
  );
};

export default ServicesLandingKitchens;
