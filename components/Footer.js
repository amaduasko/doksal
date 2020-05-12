import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import Link from "next/link";
import { useState } from "react";
import Modal, {
  ModalInfo,
  ModalTitle,
  ModalFieldName,
  ModalField,
  ModalCheckbox,
  ModalButtons,
  ModalClose,
} from "../components/Modal";
import Button from "../components/Button";
import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { b24SendLead } from "../utils/b24";
import { useRouter } from "next/router";
const FooterComponent = () => {
  const router = useRouter();

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isPhoneErr, setIsPhoneErr] = useState(false);
  const [isLeadAgreed, setIsLeadAggreed] = useState(true);
  const [isSended, setIsSended] = useState(true);
  const [isCallBackWindowOpen, setIsCallBackWindowOpen] = useState(false);
  return (
    <div className="footer">
      <Container>
        <Row className="m-0 footer-row">
          <Col md="8">
            <Row className="m-0">
              <Col className="footer-up-mobile-logo">
                <a className="footer-logo-link">
                  <img src="/static/img/footer-logo.png" alt="footer-logo" />
                </a>
              </Col>
              <Col className="footer-link-list-container">
                <ul className="list-unstyled footer-link-list">
                  <li>
                    <Link href="/catalog">
                      <a className="footer-link">Шкафы-купе</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/dressing-rooms">
                      <a className="footer-link">Гардеробные</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/cabinets">
                      <a className="footer-link">Встроенные шкафы</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/kitchens">
                      <a className="footer-link">Кухни</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col className="footer-link-list-container">
                <h5>Покупателю</h5>
                <ul className="list-unstyled footer-link-list">
                  <li>
                    <Link href="/where-buy">
                      <a className="footer-link">Где купить</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/payments">
                      <a className="footer-link">Способы оплаты</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/delivery">
                      <a className="footer-link">Доставка и установка</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/production">
                      <a className="footer-link">Срок изготовления</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/garanty">
                      <a className="footer-link">Гарантия</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/requisites">
                      <a className="footer-link">Реквизиты</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Col>
              <Link href="/policy">
                <a className="footer-link footer-privacy-link d-block mb-2">
                  Политика конфиденциальности
                </a>
              </Link>
              <p className="footer-privacy-text">
                Информация, содержащаяся на данном сайте, не является публичной
                офертой. Копирование любых материалов сайта без согласования
                запрещено. Изображения товаров на сайте могут отличаться от
                фактического внешнего вида товара (цвет, фактура и дизайн)
              </p>
            </Col>
          </Col>
          <Col>
            <ul className="list-unstyled footer-contact-list-container">
              <a href={process.env.PHONE_NUMBER__FOOTER}>
                <li className="footer-link-list-item mt-1 mb-1">
                  <i
                    style={{ color: "#2C87A6" }}
                    className="fas fa-phone footer-icon"
                  />
                  +7-904-279-86-89
              </li>
              </a>
              <a href={`mailto:${process.env.EMAIL}`}>
                <li className="footer-link-list-item mt-1 mb-1">
                  <i
                    style={{ color: "#2C87A6" }}
                    className="fas fa-envelope footer-icon"
                  />
                  {process.env.EMAIL}
                </li>
              </a>
              <li className="footer-link-list-item mt-1 mb-1">
                <div style={{ display: "flex", alignItems: "center", lineHeight: 1.5, marginBottom: 20 }}>
                  <i
                    style={{ color: "#2C87A6" }}
                    className="fas fa-map-marker-alt footer-icon"
                  />
                  <div>
                    *СЦ Азбука Ремонта офис №305 слева от эскалатора 3 этаж
                  </div>
                </div>
              </li>
              <li className="footer-link-list-item mt-1 mb-1">
                <div style={{ display: "flex", alignItems: "center", lineHeight: 1.5, marginBottom: 20 }}>
                  <i
                    style={{ color: "#2C87A6" }}
                    className="fas fa-map-marker-alt footer-icon"
                  />
                  <div>
                    *СЦ Гвоздь офис №209, синий зал 2 этаж
                  </div>
                </div>
              </li>
              <li className="footer-link-list-item mt-1 mb-1">
                <Button
                  style={{ margin: "0 5px" }}
                  onClick={() => {
                    setIsSended(false);
                    setIsCallBackWindowOpen(true);
                  }}
                >
                  Обратный звонок <img src="/static/img/phone.png" />
                </Button>
              </li>
            </ul>
            <Col className="d-flex p-0 align-items-lg-center footer-social-info-container">
              <p className="mb-0 pt-1 footer-social-title">Мы в соцсетях: </p>
              <div className="footer-social-icons-container">
                <a href={process.env.VK_URL} target="_blank">
                  <button className="footer-social-button">
                    <img src="/static/img/vk.png" alt="vk" />
                  </button>
                </a>
              </div>
            </Col>
            <div className="pxstudio">
              <span>разработано в </span><a href="https://pxstudio.pw">pxstudio</a>
            </div>
          </Col>
          <Col className="footer-mobile-logo">
            <a className="footer-mobile-logo-link">
              <img src="/static/img/logo.png" alt="footer-logo" />
            </a>
          </Col>
        </Row>
        {isCallBackWindowOpen && (
          <Modal onClose={() => setIsCallBackWindowOpen(false)}>
            <ModalClose onClick={() => setIsCallBackWindowOpen(false)} />
            <ModalTitle>Заказать звонок</ModalTitle>
            {!isSended && (
              <>
                <ModalInfo>
                  и наши специалисты ответят на все ваши вопросы
                </ModalInfo>
                <ModalFieldName>Ваше имя:</ModalFieldName>
                <ModalField
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                />
                <ModalFieldName>Ваш телефон:</ModalFieldName>
                <ModalField
                  type="text"
                  value={leadPhone}
                  error={isPhoneErr}
                  onChange={(e) => {
                    setLeadPhone(e.target.value);
                    setIsPhoneErr(
                      isValidPhoneNumber(e.target.value) ? false : true
                    );
                  }}
                />
                <ModalCheckbox
                  isChecked={isLeadAgreed}
                  onClick={() => setIsLeadAggreed(!isLeadAgreed)}
                >
                  Даю согласие на обработку моих персональных данных
                </ModalCheckbox>
                <ModalButtons>
                  <Button
                    onClick={async () => {
                      if (!isLeadAgreed) return;

                      if (isPhoneErr) return;

                      const ok = await b24SendLead(
                        "Заказ звонка",
                        leadName,
                        leadPhone,
                        router.pathname
                      );

                      if (ok) setIsSended(true);
                    }}
                  >
                    Заказать звонок
                  </Button>
                </ModalButtons>
              </>
            )}
            {isSended && (
              <ModalInfo>
                Ваша заявка отправлена, наши мастера свяжутся с Вами в ближайшее
                время!
              </ModalInfo>
            )}
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default FooterComponent;
