import { useState } from "react"
import Page from "../../components/Page"
import MyBreadcrumb from "../../components/MyBreadcrumb"
import MyBreadcrumbItem from "../../components/MyBreadcrumbItem"
import PageTitle from "../../components/PageTitle"
import ConstructorLayout, {
  ConstructorLayoutLeft,
  ConstructorLayoutRight,
  ConstructorLayoutSticky,
} from "../../components/costructor/ConstructorLayout"
import Pill from "../../components/Pill"
import SkafExplorer from "../../components/costructor/SkafExplorer"
import PillContainer from "../../components/costructor/PillContainer"
import PlusBlock from "../../components/costructor/PlusBlock"
import CollapseMenuTitle from "../../components/costructor/CollapseMenuTitle"
import CollapseMenu from "../../components/costructor/CollapseMenu"
import ImageItem from "../../components/costructor/ImageItem"
import AddItem from "../../components/costructor/AddItem"
import SumBlock from "../../components/costructor/SumBlock"
import Button from "../../components/Button"
import SectionTitle from "../../components/SectionTitle"
import Section from "../../components/Section"
import CatalogItemMini from "../../components/CatalogItemMini"
import ImageViewer from "../../components/ImageViewer"
import RoundedPill from "../../components/RoundedPill"
import RoundBack from "../../components/RoundBack"
import Modal, {
  ModalInfo,
  ModalTitle,
  ModalFieldName,
  ModalField,
  ModalCheckbox,
  ModalButtons,
  ModalImageRight,
  ModalTitleRight,
  ModalParametrs,
  ModalSum,
  ModalClose,
} from "../../components/Modal"
import ModalLayout, {
  ModalLayoutLeft,
  ModalLayoutRight,
  ModalLayoutRightMini
} from "../../components/ModalLayout"
import WrapperCatalogMini from "../../components/WrapperCatalogMini"
import { b24SendLead } from "../../utils/b24"
import ProductDescription from "../../components/ProductDescription"
import { UserAgent } from "@quentin-sommer/react-useragent"
import BottomPanel, {
  BottomPanelButton
} from "../../components/product/BottomPanel"
import PopupPanel from "../../components/product/PopupPanel"
import MobileImageItemContainer from "../../components/product/MobileImageItemContainer"

const CatalogPage = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isView, setView] = useState(false)

  const [height, setHeight] = useState(2200);
  const [width, setWidth] = useState(1200);
  const [depth, setDepth] = useState(450);
  const [facadeColor, setFacadeColor] = useState("bel-glyan");
  const [profileColor, setProfileColor] = useState("c-serebro");
  const [selAdds, setSelAdds] = useState([]);

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isLeadAgreed, setIsLeadAgreed] = useState(true);
  const [isSended, setIsSended] = useState(false);

  const [activeMobilePopup, setActiveMobilePopup] = useState(null);

  if (!product) {
    return (
      <Page>
        <RoundBack />
        <MyBreadcrumb>
          <MyBreadcrumbItem href="/" title="Главная" />
          <MyBreadcrumbItem href="/catalog" title="Каталог" />
          <MyBreadcrumbItem title="Ошибка" />
        </MyBreadcrumb>

        <PageTitle>Нет такого товара!</PageTitle>
        <div style={{ minHeight: "60vh" }}></div>
      </Page>
    );
  }

  const getPriceString = price => {
    return price.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
  }

  const addOrRemoveAddsFromSelection = (add) => {
    const f = selAdds.filter((s) => s.name === add.name);
    if (f.length > 0) {
      setSelAdds(selAdds.filter((s) => s.name !== add.name));
    } else {
      setSelAdds([...selAdds, add]);
    }
  };

  const checkAdds = (add) => {
    const f = selAdds.filter((s) => s.name === add.name);
    if (f.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Считает полную сумму (без дополнений)
   * @param {*} param0
   */
  const getSumWithAdditions = ({ width, depth, profileColor }) => {
    const { cost: { profil, stekla, ldsp, additions }} = product

    if (!additions || additions.length == 0) return profil + stekla + ldsp

    const addition = additions.filter(
      (a) =>
        a.width === width &&
        a.depth === depth &&
        a.profileColor === profileColor
    )

    return profil + stekla + ldsp + addition[0].profil + addition[0].stekla + addition[0].ldsp
  }

  /**
   * Считает надбавку за профиль.
   * @param {*} param0
   */
  const getProfileColorSum = ({ width, depth, profileColor, colors }) => {
    const { cost: { additions } } = product

    if (!additions || additions.length == 0) return 0

    const addition = additions.filter(
      a => a.width === width &&
        a.depth === depth &&
        a.profileColor === profileColor &&
        colors.includes(a.profileColor)
    )

    return addition && addition.length > 0 ? addition[0].profil : 0
  }

  /**
   * Выдает сумму, которая зависит от ширины и глубины, с цветом профиля "c-serebro"
   * @param {*} param0
   */
  const getSummForGabarites = ({ width, depth }) => {
    const { cost: { additions } } = product

    if (!additions || additions.length == 0) return 0

    const addition = additions.filter(
      a => a.width === width && a.depth === depth && a.profileColor === "c-serebro"
    )

    return addition[0].profil + addition[0].stekla + addition[0].ldsp
  }

  /**
   * Считает сумму дополнений
   * @param {*} adds
   */
  const getSummWithAdds = (adds) => {
    const sum = adds.reduce((acc, a) => acc + a.cost, 0)
    return sum
  }

  const summ = getSummWithAdds(selAdds) + getSumWithAdditions({ width, depth, profileColor })

  return (
    <Page>
      <RoundBack />
      <MyBreadcrumb>
        <MyBreadcrumbItem href="/" title="Главная" />
        <MyBreadcrumbItem href="/catalog" title="Каталог" />
        <MyBreadcrumbItem title={product.title} />
      </MyBreadcrumb>

      <PageTitle>{product.title}</PageTitle>

      <UserAgent computer tablet>
        <ConstructorLayout>
          <ConstructorLayoutLeft>
            <ConstructorLayoutSticky>
              <div>
                <Pill isActive={!isView} onClick={() => setView(!isView)}>
                  Внешний вид
                </Pill>
                <Pill isActive={isView} onClick={() => setView(!isView)}>
                  Наполнение
                </Pill>
              </div>

              {!isView && <ImageViewer src={product.previewImage} />}
              {isView && <SkafExplorer facadeColor={facadeColor} profileColor={profileColor} img={product.previewImage} />}
            </ConstructorLayoutSticky>
          </ConstructorLayoutLeft>
          <ConstructorLayoutRight>
            <div>
              <ProductDescription>{product.description}</ProductDescription>
              <PillContainer name="Высота">
                <RoundedPill onClick={() => setHeight(2200)} isActive={height === 2200}>2200</RoundedPill>
                <RoundedPill onClick={() => setHeight(2300)} isActive={height === 2300}>2300</RoundedPill>
                <RoundedPill onClick={() => setHeight(2400)} isActive={height === 2400}>2400</RoundedPill>
              </PillContainer>
              <PillContainer name="Ширина">
                <RoundedPill onClick={() => setWidth(1200)} isActive={width === 1200}>1200</RoundedPill>
                <RoundedPill onClick={() => setWidth(1400)} isActive={width === 1400}>1400</RoundedPill>
                <RoundedPill onClick={() => setWidth(1600)} isActive={width === 1600}>1600</RoundedPill>
                <RoundedPill onClick={() => setWidth(1800)} isActive={width === 1800}>1800</RoundedPill>
              </PillContainer>
              <PillContainer name="Глубина">
                <RoundedPill onClick={() => setDepth(450)} isActive={depth === 450}>450</RoundedPill>
                <RoundedPill onClick={() => setDepth(600)} isActive={depth === 600}>600</RoundedPill>
              </PillContainer>
              <PlusBlock cost={getSummForGabarites({ width, depth, profileColor })} />
              <CollapseMenu title="Цвет фасада">
                <ImageItem
                  isChecked={facadeColor === "bel-glyan"}
                  src="/static/img/constructor/bel-glyan.png"
                  title="Белый глянец"
                  onClick={() => setFacadeColor("bel-glyan")}
                />
                <ImageItem
                  isChecked={facadeColor === "vyb-derevo"}
                  src="/static/img/constructor/vyb-derevo.png"
                  title="Выбеленное дерево"
                  onClick={() => setFacadeColor("vyb-derevo")}
                />
                <ImageItem
                  isChecked={facadeColor === "led-kanion"}
                  src="/static/img/constructor/led-kanion.png"
                  title="Ледяной каньон"
                  onClick={() => setFacadeColor("led-kanion")}
                />
                <ImageItem
                  isChecked={facadeColor === "svet-yasen"}
                  src="/static/img/constructor/svet-yasen.png"
                  title="Светлый ясень"
                  onClick={() => setFacadeColor("svet-yasen")}
                />
                <ImageItem
                  isChecked={facadeColor === "tem-venge"}
                  src="/static/img/constructor/tem-venge.png"
                  title="Темный венге"
                  onClick={() => setFacadeColor("tem-venge")}
                />
              </CollapseMenu>
              <CollapseMenu title="Цвет профиля">
                <CollapseMenuTitle title="С-образный" img={"/static/img/c-profil.png"}>
                  Самый популярный, экономически выгодный с большим выбором
                  расцветок.
                </CollapseMenuTitle>
                <ImageItem
                  isChecked={profileColor === "c-serebro"}
                  src="/static/img/c-serebro.png"
                  title="Серебро"
                  onClick={() => setProfileColor("c-serebro")}
                />
                <ImageItem
                  isChecked={profileColor === "c-zoloto"}
                  src="/static/img/c-zoloto.png"
                  title="Золото"
                  onClick={() => setProfileColor("c-zoloto")}
                />
                <ImageItem
                  isChecked={profileColor === "c-shampan"}
                  src="/static/img/c-shampan.png"
                  title="Шампань матовая"
                  onClick={() => setProfileColor("c-shampan")}
                />
                <ImageItem
                  isChecked={profileColor === "c-bel-glyanec"}
                  src="/static/img/c-bel-glyanec.png"
                  title="Белый глянец"
                  onClick={() => setProfileColor("c-bel-glyanec")}
                />
                <ImageItem
                  isChecked={profileColor === "c-ferrara-tem"}
                  src="/static/img/c-ferrara-tem.png"
                  title="Феррара темный"
                  onClick={() => setProfileColor("c-ferrara-tem")}
                />
                <ImageItem
                  isChecked={profileColor === "c-ferrara-svet"}
                  src="/static/img/c-ferrara-svet.png"
                  title="Феррара светлый"
                  onClick={() => setProfileColor("c-ferrara-svet")}
                />
                <ImageItem
                  isChecked={profileColor === "c-klen"}
                  src="/static/img/c-klen.png"
                  title="Клен структура"
                  onClick={() => setProfileColor("c-klen")}
                />
                <PlusBlock cost={getProfileColorSum({
                  width, depth, profileColor,
                  colors: ["c-serebro", "c-zoloto", "c-shampan", "c-bel-glyanec", "c-ferrara-tem", "c-ferrara-svet", "c-klen"]
                })} />
                <CollapseMenuTitle title="Элефант" img={"/static/img/elefant.png"}>
                  Изящный, тонкий и современный кажется слабо заметным за счет этого
                  увеличивает полотно двери купе визуально.
                </CollapseMenuTitle>
                <ImageItem
                  isChecked={profileColor === "ele-serebro"}
                  src="/static/img/ele-serebro.png"
                  title="Серебро"
                  onClick={() => setProfileColor("ele-serebro")}
                />
                <ImageItem
                  isChecked={profileColor === "ele-bel-glyan"}
                  src="/static/img/ele-bel-glyan.png"
                  title="Белый глянец"
                  onClick={() => setProfileColor("ele-bel-glyan")}
                />
                <ImageItem
                  isChecked={profileColor === "ele-cher-glyan"}
                  src="/static/img/ele-cher-glyan.png"
                  title="Черный глянец"
                  onClick={() => setProfileColor("ele-cher-glyan")}
                />
                <PlusBlock cost={getProfileColorSum({ width, depth, profileColor, colors: [
                  "ele-serebro",
                  "ele-bel-glyan",
                  "ele-cher-glyan"
                ]})} />
                <CollapseMenuTitle
                  title="L-образный"
                  img={"/static/img/l-profil.png"}
                >
                  Эффектный цвет Браш-профиля позволяет завораживать своим
                  блеском за счет полированной поверхности.
                </CollapseMenuTitle>
                <ImageItem
                  isChecked={profileColor === "l-serebro"}
                  src="/static/img/l-serebro.png"
                  title="Серебро браш"
                  onClick={() => setProfileColor("l-serebro")}
                />
                <ImageItem
                  isChecked={profileColor === "l-zoloto"}
                  src="/static/img/l-zoloto.png"
                  title="Золото браш"
                  onClick={() => setProfileColor("l-zoloto")}
                />
                <ImageItem
                  isChecked={profileColor === "l-graphit"}
                  src="/static/img/l-graphit.png"
                  title="Графит браш"
                  onClick={() => setProfileColor("l-graphit")}
                />
                <PlusBlock
                  cost={getProfileColorSum({
                    width,
                    depth,
                    profileColor,
                    colors: ["l-serebro", "l-zoloto", "l-graphit"],
                  })}
                />
                <CollapseMenuTitle
                  title="П-образный"
                  img={"/static/img/p-profil.png"}
                >
                  Эффектный цвет Браш-профиля позволяет завораживать своим
                  блеском за счет полированной поверхности.
                </CollapseMenuTitle>
                <ImageItem
                  isChecked={profileColor === "p-serebro"}
                  src="/static/img/p-serebro.png"
                  title="Серебро"
                  onClick={() => setProfileColor("p-serebro")}
                />
                <ImageItem
                  isChecked={profileColor === "p-ferrara-tem"}
                  src="/static/img/p-ferrara-tem.png"
                  title="Феррара темный"
                  onClick={() => setProfileColor("p-ferrara-tem")}
                />
                <ImageItem
                  isChecked={profileColor === "p-ferrara-svet"}
                  src="/static/img/p-ferrara-svet.png"
                  title="Феррара светлый"
                  onClick={() => setProfileColor("p-ferrara-svet")}
                />
                <PlusBlock
                  cost={getProfileColorSum({
                    width,
                    depth,
                    profileColor,
                    colors: ["p-serebro", "p-ferrara-tem", "p-ferrara-svet"],
                  })}
                />
              </CollapseMenu>
              {product.adds && product.adds.map(a =>
                <AddItem
                  key={a.name}
                  isChecked={checkAdds(a)}
                  text={a.name}
                  cost={a.cost}
                  onClick={() => addOrRemoveAddsFromSelection(a)}
                />)}
              <SumBlock sum={getPriceString(summ)} />
              <Button color="orange" onClick={() => setIsModalOpen(true)}>
                Заказать
              </Button>
            </div>
          </ConstructorLayoutRight>
        </ConstructorLayout>
      </UserAgent>

      <UserAgent mobile>
        <div style={{ minHeight: "100vh" }}>
          <Pill isActive={!isView} onClick={() => setView(!isView)}>
            Внешний вид
          </Pill>
          <Pill isActive={isView} onClick={() => setView(!isView)}>
            Наполнение
          </Pill>


          {!isView && <ImageViewer src={product.previewImage} />}
          {isView && <SkafExplorer profileColor={profileColor} facadeColor={facadeColor} />}
        </div>

        <PopupPanel
          title="Размеры"
          isOpen={activeMobilePopup === "razmery"}
          onClose={() => setActiveMobilePopup(null)}
        >
          <PillContainer name="Высота">
            <RoundedPill
              isActive={height === 2200}
              onClick={() => setHeight(2200)}
            >
              2200
            </RoundedPill>
            <RoundedPill
              isActive={height === 2300}
              onClick={() => setHeight(2300)}
            >
              2300
            </RoundedPill>
            <RoundedPill
              isActive={height === 2400}
              onClick={() => setHeight(2400)}
            >
              2400
            </RoundedPill>
          </PillContainer>

          <PillContainer name="Ширина">
            <RoundedPill
              isActive={width === 1200}
              onClick={() => setWidth(1200)}
            >
              1200
            </RoundedPill>
            <RoundedPill
              isActive={width === 1400}
              onClick={() => setWidth(1400)}
            >
              1400
            </RoundedPill>
            <RoundedPill
              isActive={width === 1600}
              onClick={() => setWidth(1600)}
            >
              1600
            </RoundedPill>
            <RoundedPill
              isActive={width === 1800}
              onClick={() => setWidth(1800)}
            >
              1800
            </RoundedPill>
          </PillContainer>

          <PillContainer name="Глубина">
            <RoundedPill
              isActive={depth === 450}
              onClick={() => setDepth(450)}
            >
              450
            </RoundedPill>
            <RoundedPill
              isActive={depth === 600}
              onClick={() => setDepth(600)}
            >
              600
            </RoundedPill>
          </PillContainer>

          <PlusBlock cost={getSummForGabarites({ width, depth, profileColor })} />
        </PopupPanel>

        <PopupPanel
          title="Цвет фасада"
          isOpen={activeMobilePopup === "facade"}
          onClose={() => setActiveMobilePopup(null)}
        >
          <MobileImageItemContainer>
            <ImageItem
              isChecked={facadeColor === "bel-glyan"}
              src="/static/img/constructor/bel-glyan.png"
              title="Белый глянец"
              onClick={() => setFacadeColor("bel-glyan")}
            />
            <ImageItem
              isChecked={facadeColor === "vyb-derevo"}
              src="/static/img/constructor/vyb-derevo.png"
              title="Выбеленное дерево"
              onClick={() => setFacadeColor("vyb-derevo")}
            />
            <ImageItem
              isChecked={facadeColor === "led-kanion"}
              src="/static/img/constructor/led-kanion.png"
              title="Ледяной каньон"
              onClick={() => setFacadeColor("led-kanion")}
            />
            <ImageItem
              isChecked={facadeColor === "svet-yasen"}
              src="/static/img/constructor/svet-yasen.png"
              title="Светлый ясень"
              onClick={() => setFacadeColor("svet-yasen")}
            />
            <ImageItem
              isChecked={facadeColor === "tem-venge"}
              src="/static/img/constructor/tem-venge.png"
              title="Темный венге"
              onClick={() => setFacadeColor("tem-venge")}
            />
          </MobileImageItemContainer>
        </PopupPanel>

        <PopupPanel
          title="Цвет профиля"
          isOpen={activeMobilePopup === "profile"}
          onClose={() => setActiveMobilePopup(null)}
        >
          <CollapseMenuTitle
            title="С-образный"
            img={"/static/img/c-profil.png"}
          >
            Самый популярный, экономически выгодный с большим выбором
            расцветок.
          </CollapseMenuTitle>
          <MobileImageItemContainer>
            <ImageItem
              isChecked={profileColor === "c-serebro"}
              src="/static/img/c-serebro.png"
              title="Серебро"
              onClick={() => setProfileColor("c-serebro")}
            />
            <ImageItem
              isChecked={profileColor === "c-zoloto"}
              src="/static/img/c-zoloto.png"
              title="Золото"
              onClick={() => setProfileColor("c-zoloto")}
            />
            <ImageItem
              isChecked={profileColor === "c-shampan"}
              src="/static/img/c-shampan.png"
              title="Шампань матовая"
              onClick={() => setProfileColor("c-shampan")}
            />
            <ImageItem
              isChecked={profileColor === "c-bel-glyanec"}
              src="/static/img/c-bel-glyanec.png"
              title="Белый глянец"
              onClick={() => setProfileColor("c-bel-glyanec")}
            />
            <ImageItem
              isChecked={profileColor === "c-ferrara-tem"}
              src="/static/img/c-ferrara-tem.png"
              title="Феррара темный"
              onClick={() => setProfileColor("c-ferrara-tem")}
            />
            <ImageItem
              isChecked={profileColor === "c-ferrara-svet"}
              src="/static/img/c-ferrara-svet.png"
              title="Феррара светлый"
              onClick={() => setProfileColor("c-ferrara-svet")}
            />
            <ImageItem
              isChecked={profileColor === "c-klen"}
              src="/static/img/c-klen.png"
              title="Клен структура"
              onClick={() => setProfileColor("c-klen")}
            />
          </MobileImageItemContainer>
          <PlusBlock cost={getProfileColorSum({
            width, depth, profileColor,
            colors: ["c-serebro", "c-zoloto", "c-shampan", "c-bel-glyanec", "c-ferrara-tem", "c-ferrara-svet", "c-klen"]
          })} />

          <CollapseMenuTitle title="Элефант" img={"/static/img/elefant.png"}>
            Изящный, тонкий и современный кажется слабо заметным за счет этого
            увеличивает полотно двери купе визуально.
          </CollapseMenuTitle>
          <MobileImageItemContainer>
            <ImageItem
              isChecked={profileColor === "ele-serebro"}
              src="/static/img/ele-serebro.png"
              title="Серебро"
              onClick={() => setProfileColor("ele-serebro")}
            />
            <ImageItem
              isChecked={profileColor === "ele-bel-glyan"}
              src="/static/img/ele-bel-glyan.png"
              title="Белый глянец"
              onClick={() => setProfileColor("ele-bel-glyan")}
            />
            <ImageItem
              isChecked={profileColor === "ele-cher-glyan"}
              src="/static/img/ele-cher-glyan.png"
              title="Черный глянец"
              onClick={() => setProfileColor("ele-cher-glyan")}
            />
          </MobileImageItemContainer>
          <PlusBlock
            cost={getProfileColorSum({
              width,
              depth,
              profileColor,
              colors: ["ele-serebro", "ele-bel-glyan", "ele-cher-glyan"],
            })}
          />

          <CollapseMenuTitle
            title="L-образный"
            img={"/static/img/l-profil.png"}
          >
            Эффектный цвет Браш-профиля позволяет завораживать своим блеском
            за счет полированной поверхности.
          </CollapseMenuTitle>
          <MobileImageItemContainer>
            <ImageItem
              isChecked={profileColor === "l-serebro"}
              src="/static/img/l-serebro.png"
              title="Серебро браш"
              onClick={() => setProfileColor("l-serebro")}
            />
            <ImageItem
              isChecked={profileColor === "l-zoloto"}
              src="/static/img/l-zoloto.png"
              title="Золото браш"
              onClick={() => setProfileColor("l-zoloto")}
            />
            <ImageItem
              isChecked={profileColor === "l-graphit"}
              src="/static/img/l-graphit.png"
              title="Графит браш"
              onClick={() => setProfileColor("l-graphit")}
            />
          </MobileImageItemContainer>
          <PlusBlock
            cost={getProfileColorSum({
              width,
              depth,
              profileColor,
              colors: ["l-serebro", "l-zoloto", "l-graphit"],
            })}
          />

          <CollapseMenuTitle
            title="П-образный"
            img={"/static/img/p-profil.png"}
          >
            Эффектный цвет Браш-профиля позволяет завораживать своим блеском
            за счет полированной поверхности.
          </CollapseMenuTitle>
          <MobileImageItemContainer>
            <ImageItem
              isChecked={profileColor === "p-serebro"}
              src="/static/img/p-serebro.png"
              title="Серебро"
              onClick={() => setProfileColor("p-serebro")}
            />
            <ImageItem
              isChecked={profileColor === "p-ferrara-tem"}
              src="/static/img/p-ferrara-tem.png"
              title="Феррара темный"
              onClick={() => setProfileColor("p-ferrara-tem")}
            />
            <ImageItem
              isChecked={profileColor === "p-ferrara-svet"}
              src="/static/img/p-ferrara-svet.png"
              title="Феррара светлый"
              onClick={() => setProfileColor("p-ferrara-svet")}
            />
          </MobileImageItemContainer>
          <PlusBlock
            cost={getProfileColorSum({
              width,
              depth,
              profileColor,
              colors: ["p-serebro", "p-ferrara-tem", "p-ferrara-svet"],
            })}
          />

          <div style={{ height: "40vh" }}></div>
        </PopupPanel>

        <BottomPanel>
          <BottomPanelButton
            isActive={activeMobilePopup == "razmery"}
            onClick={() => activeMobilePopup == "razmery"
              ? setActiveMobilePopup("null")
              : setActiveMobilePopup("razmery")}>Размеры</BottomPanelButton>
          <BottomPanelButton
            isActive={activeMobilePopup == "facade"}
            onClick={() =>
              activeMobilePopup == "facade"
                ? setActiveMobilePopup("null")
                : setActiveMobilePopup("facade")
            }
          >
            Цвет
          </BottomPanelButton>
          <BottomPanelButton
            isActive={activeMobilePopup == "profile"}
            onClick={() =>
              activeMobilePopup == "profile"
                ? setActiveMobilePopup("null")
                : setActiveMobilePopup("profile")
            }
          >
            Профиль
          </BottomPanelButton>
        </BottomPanel>
      </UserAgent>

      <UserAgent computer tablet>
        <Section>
          <SectionTitle>Вас заинтересует:</SectionTitle>

          <WrapperCatalogMini>
            <CatalogItemMini
              img="/static/img/image2.png"
              price="40000"
              title={"Условное назвние товара Наименование"}
              description="Все параметры можно изменить на странице шкафа"
              sale="50"
              button={
                <Button
                  color="button_orange"
                  onClick={() => setChangeMenu(!changeMenu)}
                >
                  Выбрать параметры
                </Button>
              }
            />
            <CatalogItemMini
              img="/static/img/image2.png"
              price="20000"
              title={"Условное назвние товара Наименование"}
              description="Все параметры можно изменить на странице шкафа"
              stock="Фигня"
              sale="40"
              button={
                <Button
                  color="button_orange"
                  onClick={() => setChangeMenu(!changeMenu)}
                >
                  Выбрать параметры
                </Button>
              }
            />
            <CatalogItemMini
              img="/static/img/image2.png"
              price="20000"
              title={"Условное назвние товара Наименование"}
              description="Все параметры можно изменить на странице шкафа"
              button={
                <Button
                  color="button_orange"
                  onClick={() => setChangeMenu(!changeMenu)}
                >
                  Выбрать параметры
                </Button>
              }
            />
            <CatalogItemMini
              img="/static/img/image2.png"
              price="20000"
              title={"Пятидверный шкаф с кривыми ручками"}
              description="Все параметры можно изменить на странице шкафа"
              button={
                <Button
                  color="button_orange"
                  onClick={() => setChangeMenu(!changeMenu)}
                >
                  Выбрать параметры
                </Button>
              }
            />
          </WrapperCatalogMini>
        </Section>
      </UserAgent>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} bigWindow>
          <ModalClose onClick={() => setIsModalOpen(false)} />
          <ModalLayout>
            <ModalLayoutLeft>
              <ModalTitle>Заказать шкаф</ModalTitle>
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
                onChange={(e) => setLeadPhone(e.target.value)}
              />
              <ModalFieldName>Ваш E-mail:</ModalFieldName>
              <ModalField
                type="text"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
              />
              <ModalLayoutRightMini>
                <div
                  style={{
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingBottom: "1rem",
                    paddingTop: "1rem",
                  }}
                >
                  <ModalTitleRight title="Ваш заказ"></ModalTitleRight>
                  <CollapseMenu title={product.NAME}>
                    <ModalParametrs
                      title="Габариты"
                      params={`${height} x ${width} x ${depth}`}
                    ></ModalParametrs>
                    <ModalParametrs
                      title="Цвет фасада"
                      params={facadeColor}
                    ></ModalParametrs>
                    <ModalParametrs
                      title="Цвет профиля"
                      params={profileColor}
                    ></ModalParametrs>
                  </CollapseMenu>
                  <ModalSum price={summ} />
                </div>
              </ModalLayoutRightMini>
              <ModalCheckbox
                isChecked={isLeadAgreed}
                onClick={() => setIsLeadAgreed(!isLeadAgreed)}
              >
                Даю согласие на обработку моих персональных данных
              </ModalCheckbox>
              <ModalButtons>
                <Button
                  onClick={async () => {
                    if (!isLeadAgreed) return;

                    // if (isPhoneErr) return

                    const ok = await b24SendLead(
                      "оформить заказ",
                      leadName,
                      leadPhone,
                      leadEmail,
                      product.NAME,
                      `${height} x ${width} x ${depth}`,
                      facadeColor,
                      profileColor,
                      summ
                    );

                    if (ok) setIsSended(true);
                  }}
                >
                  Оформить заказ
                </Button>
              </ModalButtons>
            </ModalLayoutLeft>

            <ModalLayoutRight>
              {isSended && (
                <ModalInfo>
                  Ваша заявка отправлена, наши мастера свяжутся с Вами в
                  ближайшее время!
                </ModalInfo>
              )}
              {!isSended && <>
                <ModalImageRight img="/static/img/image9.png" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    paddingLeft: "3rem",
                    paddingBottom: "1rem"
                  }}
                >
                  <ModalTitleRight title={product.NAME}></ModalTitleRight>
                  <ModalParametrs
                    title="Габариты"
                    params={`${height} x ${width} x ${depth}`}
                  ></ModalParametrs>
                  <ModalParametrs
                    title="Цвет фасада"
                    params={facadeColor}
                  ></ModalParametrs>
                  <ModalParametrs
                    title="Цвет профиля"
                    params={profileColor}
                  ></ModalParametrs>
                  {selAdds.length > 0 && <ModalParametrs title="Дополнения" params={selAdds.map(a => a.name).join(', ')} />}
                  <ModalSum title="Итоговая стоимость" price={getPriceString(summ)} />
                </div>
              </>
              }
            </ModalLayoutRight>
          </ModalLayout>

        </Modal>
      )}
    </Page>
  )
}

CatalogPage.getInitialProps = async (ctx) => {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/products?id=${ctx.query.id}`)
    const { product } = await res.json()

    return { product }
  } catch (err) {
    return {
      product: {}
    }
  }
}

export default CatalogPage
