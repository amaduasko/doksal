import { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import SkafExplorer from "./SkafExplorer"
import CollapseMenu from "./CollapseMenu"
import ImageItem from "./ImageItem"
import Pill from "../Pill"
import "./Constructor.css"
import CollapseMenuTitle from "./CollapseMenuTitle"
import AddItem from "./AddItem"
import TitleTooltip from "./TitleTooltip"
import PlusBlock from "./PlusBlock"
import SumBlock from "./SumBlock"
import Button from "../Button"
import PillContainer from "./PillContainer"

const Constructor = () => {
  const [height, setHeight] = useState(2200)
  const [width, setWidth] = useState(1200)
  const [depth, setDepth] = useState(450)
  const [texture, setTexture] = useState("/static/img/constructor/texture1.png")

  return (
    <div className="index-page">
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <Pill isActive>Внешний вид</Pill>
              <Pill>Наполнение</Pill>
            </div>
            <SkafExplorer texture={texture} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <PillContainer name="Высота">
              <Pill
                rounded
                onClick={() => setHeight(2200)}
                isActive={height === 2200}
              >
                2200
              </Pill>
              <Pill
                rounded
                onClick={() => setHeight(2300)}
                isActive={height === 2300}
              >
                2300
              </Pill>
              <Pill
                rounded
                onClick={() => setHeight(2400)}
                isActive={height === 2400}
              >
                2400
              </Pill>
            </PillContainer>
            <PillContainer name="Ширина">
              <Pill
                rounded
                onClick={() => setWidth(1200)}
                isActive={width === 1200}
              >
                1200
              </Pill>
              <Pill
                rounded
                onClick={() => setWidth(1400)}
                isActive={width === 1400}
              >
                1400
              </Pill>
              <Pill
                rounded
                onClick={() => setWidth(1500)}
                isActive={width === 1500}
              >
                1500
              </Pill>
              <Pill
                rounded
                onClick={() => setWidth(1800)}
                isActive={width === 1800}
              >
                1800
              </Pill>
            </PillContainer>
            <PillContainer name="Глубина">
              <Pill
                rounded
                onClick={() => setDepth(450)}
                isActive={depth === 450}
              >
                450
              </Pill>
              <Pill
                rounded
                onClick={() => setDepth(600)}
                isActive={depth === 600}
              >
                600
              </Pill>
            </PillContainer>
            <PlusBlock cost={1000} />
            <CollapseMenu title="Цвет фасада">
              <ImageItem
                isChecked
                src="/static/img/constructor/texture1.png"
                title="Белый глянец"
              />
              <ImageItem
                src="/static/img/constructor/texture2.png"
                title="Выбеленное дерево"
              />
              <ImageItem
                src="/static/img/constructor/texture3.png"
                title="Ледяной каньон"
              />
              <ImageItem
                src="/static/img/constructor/texture4.png"
                title="Светлый ясень"
              />
              <ImageItem
                src="/static/img/constructor/texture5.png"
                title="Темный венге"
              />
              <PlusBlock cost={1000} />
            </CollapseMenu>
            <CollapseMenu title="Цвет профиля">
              <CollapseMenuTitle
                title="С-образный"
                img={"/static/img/c-profil.png"}
              >
                Самый популярный, экономически выгодный с большим выбором
                расцветок.
              </CollapseMenuTitle>
              <ImageItem
                src="/static/img/constructor/texture1.png"
                title="Серебро"
              />
              <ImageItem
                src="/static/img/constructor/texture2.png"
                title="Золото"
              />
              <ImageItem
                src="/static/img/constructor/texture3.png"
                title="Шампань матовая"
              />
              <ImageItem
                src="/static/img/constructor/texture4.png"
                title="Белый глянец"
              />
              <ImageItem
                src="/static/img/constructor/texture5.png"
                title="Феррара темный"
              />
              <ImageItem
                src="/static/img/constructor/texture5.png"
                title="Феррара светлый"
              />
              <ImageItem
                src="/static/img/constructor/texture5.png"
                title="Клен структура"
              />
              <PlusBlock cost={1000} />
              <CollapseMenuTitle
                title="Элефант"
                img={"/static/img/elefant.png"}
              >
                Изящный, тонкий и современный кажется слабо заметным за счет
                этого увеличивает полотно двери купе визуально.
              </CollapseMenuTitle>
              <ImageItem
                src="/static/img/constructor/texture1.png"
                title="Серебро"
              />
              <ImageItem
                src="/static/img/constructor/texture2.png"
                title="Белый глянец"
              />
              <ImageItem
                src="/static/img/constructor/texture3.png"
                title="Черный глянец"
              />
              <PlusBlock cost={1000} />
              <CollapseMenuTitle
                title="L-образный"
                img={"/static/img/l-profil.png"}
              >
                Эффектный цвет Браш-профиля позволяет завораживать своим блеском
                за счет полированной поверхности.
              </CollapseMenuTitle>
              <ImageItem
                src="/static/img/constructor/texture1.png"
                title="Серебро браш"
              />
              <ImageItem
                src="/static/img/constructor/texture2.png"
                title="Золото браш"
              />
              <ImageItem
                src="/static/img/constructor/texture3.png"
                title="Графит браш"
              />
              <PlusBlock cost={1000} />
              <CollapseMenuTitle
                title="П-образный"
                img={"/static/img/p-profil.png"}
              >
                Эффектный цвет Браш-профиля позволяет завораживать своим блеском
                за счет полированной поверхности.
              </CollapseMenuTitle>
              <ImageItem
                src="/static/img/constructor/texture1.png"
                title="Серебро"
              />
              <ImageItem
                src="/static/img/constructor/texture2.png"
                title="Феррара темный"
              />
              <ImageItem
                src="/static/img/constructor/texture3.png"
                title="Феррара светлый"
              />
              <PlusBlock cost={1000} />
            </CollapseMenu>
            <AddItem
              isChecked={true}
              text="Добавить выдвижной ящик"
              cost={500}
            />
            <AddItem
              isChecked={true}
              text="Добавить задвижной ящик"
              cost={1500}
            />
            <SumBlock sum={30000} />
            <Button color="orange">Заказать</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Constructor
