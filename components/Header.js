import { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap"
import "./Header.css"

const HeaderComponent = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header className="header">
      <Container>
        <Navbar light expand="lg">
          <NavbarBrand href="/">
            <div className="header__logo"></div>
          </NavbarBrand>
          <button className="navbar-mobile-phone">
            <i className="fas fa-phone" />
          </button>
          <NavbarToggler className="border-0 " onClick={toggle}>
            {isOpen ? (
              <img src="/static/img/menu-close.svg" alt="close menu" />
            ) : (
              <img src="/static/img/menu-open.png" alt="open menu" />
            )}
          </NavbarToggler>
          <Nav className="w-100 navbar-desktop" navbar>
            <NavItem className="col-lg-2 col-sm-3  pt-2 header-location-container">
              <InputGroup className="border rounded-pill">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-white rounded-pill border-0 ">
                    <img src="/static/img/map-logo.png" alt="map-logo" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="border-0 rounded-pill header-location-input"
                  placeholder="Москва"
                />
              </InputGroup>
            </NavItem>
            <NavItem className="pt-3 header-social-info">
              <NavLink className="pt-1 header-phone-number">
                <i
                  style={{ color: "#2C87A6" }}
                  className="fas fa-phone header-phone-icon"
                />
                +7 922 517 - 01 - 08
              </NavLink>
              <div className="pt-1 mt-0 header-social-network-container">
                <button className="border-0  bg-transparent mr-0 ml-2">
                  <img src="/static/img/whatsapp.png" alt="whatsapp" />
                </button>
                <button className="border-0 bg-transparent  mr-2 ml-0">
                  <img src="/static/img/telegram.png" alt="telegram" />
                </button>
              </div>
            </NavItem>

            <NavItem>
              <button className="rounded-pill border-0  font-weight-bold text-white header-order-btn">
                Вызов замерщика
              </button>
              <button className="rounded-pill border-0 border-0 font-weight-bold text-white header-callback-btn">
                Обратный звонок <i className="fas fa-phone ml-3" />
              </button>
            </NavItem>
          </Nav>
          <Collapse isOpen={isOpen}>
            <Nav
              className={
                isOpen
                  ? "navbar-tablet_mobile navbar-item-container show"
                  : "navbar-tablet_mobile navbar-item-container hide"
              }
              navbar
            >
              <NavItem>
                <NavLink className="font-weight-bold mobile-header-uper-link text-dark">
                  шкафы-купе
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold mobile-header-uper-link text-dark">
                  Гардеробные
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold mobile-header-uper-link text-dark">
                  Встроенные шкафы
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold mobile-header-uper-link text-dark">
                  Кухни
                </NavLink>
              </NavItem>
              <h5 className="header-mobile-nav-title">Покупателю:</h5>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link pl-3">
                  Как купить
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link  pl-3 ">
                  Доставка и сборка
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link  pl-3">
                  Гарантии
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link  pl-3">
                  Возврат
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link  pl-3">
                  Проверка заказа
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="mobile-header-nav-list-link  pl-3">
                  Наши работы
                </NavLink>
              </NavItem>
              <NavItem className=" header-mobile-0-social-info mt-3 mb-3  pl-4">
                <NavLink className="pt-1 header-phone-number">
                  <i
                    style={{ color: "#2C87A6" }}
                    className="fas fa-phone header-phone-icon"
                  />
                  +7 922 517 - 01 - 08
                </NavLink>
                <div className="pt-1 mt-2 mb-2 d-flex justify-content-center header-mobile-social-network-container">
                  <button
                    style={{ backgroundColor: "#2C87A6" }}
                    className="border-0 text-white rounded-circle pt-1 pr-2 pl-2  mr-2 ml-2"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                  <button
                    style={{ backgroundColor: "#2C87A6" }}
                    className="border-0 text-white rounded-circle pt-1 pr-2 pl-2 mr-2 ml-2"
                  >
                    <i className="fab fa-telegram-plane" />
                  </button>
                </div>
              </NavItem>
              <NavItem className="pl-2">
                <button className="header-order-btn m-0 mt-2   border-0 rounded-pill text-white font-weight-bold">
                  Вызов замерщика
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default HeaderComponent
