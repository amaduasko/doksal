import Button from "../components/Button";
import Link from "next/link";
import { useState } from "react";
import Modal, {
  ModalTitle,
  ModalInfo,
  ModalFieldName,
  ModalField,
  ModalTextarea,
  ModalCheckbox,
  ModalButtons,
  ModalClose,
} from "../components/Modal";
import Menu, { MenuItem, MenuPhone, MenuSocial } from "./Menu";
import { b24SendLead } from "../utils/b24";
import { useRouter } from "next/router";
import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

import SearchInput from "../components/SearchInput"

const Social = ({ children }) => (
  <ul className="social">
    {children}
    <style jsx>{`
      .social {
        display: inline-flex;
        align-items: center;
        // height: 100%;
        padding: 0 10px;
        margin: 0;
      }
      @media (max-width: 920px) {
        .social {
          display: none;
        }
      }
    `}</style>
  </ul>
);

const SocialIcon = ({ img, href }) => (
  <>
    <a
      href={href}
      className="socialicon"
      style={{ backgroundImage: `url(${img})` }}
      target="_blank"
    ></a>
    <style jsx>{`
      .socialicon {
        width: 24px;
        height: 24px;
        margin: 0 5px;
      }
    `}</style>
  </>
);

const ButtonX = ({ img, ...rest }) => {
  return (
    <button className="buttonx" {...rest}>
      <style jsx>{`
        .buttonx {
          width: 80px;
          height: 80px;
          background-image: url(${img});
          background-position: center center;
          background-repeat: no-repeat;
          border: none;
          background-color: #fff;
        }
      `}</style>
    </button>
  );
};

const NewHeaderLogo = () => (
  <Link href="/">
    <a className="newheader__logo">
      <style jsx>{`
        .newheader__logo {
          display: flex;
          width: 200px;
          height: 80px;
          background-image: url(/static/img/logo.png);
        }
        @media (max-width: 640px) {
          .newheader__logo {
            width: 180px;
            background-size: 80%;
            background-position-x: center;
            background-position-y: -40%;
            background-repeat: no-repeat;
          }
        }
        @media (max-width: 320px) {
          .newheader__logo {
            background-position-y: -60%;
            background-position-x: 20%;
          }
        }
      `}</style>
    </a>
  </Link>
);

const NewHeaderWrapper = ({ children }) => (
  <header className="newheader">
    {children}
    <style jsx>{`
      .newheader {
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        height: 80px;
        
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        z-index: 3000;
      }
    `}</style>
  </header>
);

const NewHeaderContent = ({ children }) => (
  <nav className="newheadercontent">
    {children}
    <style jsx>{`
      .newheadercontent {
        max-width: 1140px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </nav>
);

const NewHeaderButtons = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        height: 100%;
        align-items: center;
      }
      @media (max-width: 920px) {
        div {
          display: none;
        }
      }
    `}</style>
  </div>
);

const NewHeaderPhone = () => {
  return (
    <div>
      <a className="phone" href={process.env.PHONE_NUMBER}>
        +7 904 279 - 86 - 89
      </a>
      <a className="mobile-phone" href={process.env.PHONE_NUMBER}>
        <img src="/static/img/phone.png" />
      </a>
      <style jsx>{`
        div {
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0 0 30px;
        }
        .phone {
          color: #444444;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          display: inline-flex;
          justify-content: center;
          position: relative;
        }
        .phone::before {
          content: url(/static/img/phone-blue.png);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -20px;
        }
        .phone:hover {
          opacity: 0.8;
        }
        .mobile-phone {
          width: 44px;
          height: 44px;
          background: linear-gradient(180deg, #ff8839 0%, #ff6600 100%);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .mobile-phone {
            display: none;
          }
        }
        @media (max-width: 1024px) {
          .phone {
            display: none;
          }
          div {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

const NewHeader = () => {
  const router = useRouter();
  const [isCallMeterWindowOpen, setIsCallMeterWindowOpen] = useState(false);
  const [isCallBackWindowOpen, setIsCallBackWindowOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadComment, setLeadComment] = useState("");
  const [isLeadAgreed, setIsLeadAggreed] = useState(true);
  const [isSended, setIsSended] = useState(false);
  const [isPhoneErr, setIsPhoneErr] = useState(false);

  return (
    <NewHeaderWrapper>
      <NewHeaderContent>
        <NewHeaderLogo />
        <SearchInput />
        <NewHeaderPhone />
        <Social>
          <SocialIcon
            img="/static/img/whatsapp.png"
            href={process.env.WA_URL}
            target="_blank"
          />
          <SocialIcon
            img="/static/img/telegram.png"
            href={process.env.TG_URL}
            target="_blank"
          />
        </Social>
        <NewHeaderButtons>
          <Button
            color="blue"
            onClick={() => {
              setIsSended(false);
              setIsCallMeterWindowOpen(true);
            }}
          >
            Заказать замер
          </Button>
          <Button
            style={{ margin: "0 5px" }}
            onClick={() => {
              setIsSended(false);
              setIsCallBackWindowOpen(true);
            }}
          >
            Заказать звонок <img src="/static/img/phone.png" />
          </Button>
        </NewHeaderButtons>
        <ButtonX
          img={
            !isMenuOpen
              ? "/static/img/menu-open.png"
              : "/static/img/menu-close.svg"
          }
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NewHeaderContent>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MenuItem href="/catalog">Шкафы-купе</MenuItem>
        <MenuItem href="/pages/dressing-rooms">Гардеробные</MenuItem>
        <MenuItem href="/pages/cabinets">Встроенные шкафы</MenuItem>
        <MenuItem href="/pages/kitchens">Кухни</MenuItem>
        <MenuItem>Покупателю:</MenuItem>
        <MenuItem lvl href="/where-buy">
          Где купить
        </MenuItem>
        <MenuItem lvl href="/payments">
          Способы оплаты
        </MenuItem>
        <MenuItem lvl href="/delivery">
          Доставка и установка
        </MenuItem>
        <MenuItem lvl href="/production">
          Срок изготовления
        </MenuItem>
        <MenuItem lvl href="/garanty">
          Гарантия
        </MenuItem>
        <MenuItem lvl href="/requisites">
          Реквизиты
        </MenuItem>
        <MenuPhone />
        <MenuSocial>
          <SocialIcon
            img="/static/img/whatsapp.png"
            href={process.env.WA_URL}
            target="_blank"
          />
          <SocialIcon
            img="/static/img/telegram.png"
            href={process.env.TG_URL}
            target="_blank"
          />
        </MenuSocial>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <Button
            color="blue"
            onClick={() => {
              setIsSended(false);
              setIsCallMeterWindowOpen(true);
            }}
          >
            Вызов замерщика
          </Button>
        </div>
      </Menu>

      {isCallMeterWindowOpen && (
        <Modal onClose={() => setIsCallMeterWindowOpen(false)}>
          <ModalClose onClick={() => setIsCallMeterWindowOpen(false)} />
          <ModalTitle>Вызов замерщика</ModalTitle>

          {!isSended && (
            <>
              <ModalInfo>
                Опытный мастер поможет подобрать вариант специально для Вас
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
              <ModalFieldName>Комментарий:</ModalFieldName>
              <ModalTextarea
                value={leadComment}
                onChange={(e) => setLeadComment(e.target.value)}
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
                      "Вызов замерщика",
                      leadName,
                      leadPhone,
                      leadComment,
                      router.pathname
                    );

                    if (ok) setIsSended(true);
                  }}
                >
                  Вызвать замерщика
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
    </NewHeaderWrapper>
  );
};

export default NewHeader;
