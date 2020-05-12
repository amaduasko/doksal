import Page from "../components/Page"
import MainSlider from "../components/mainSlider/MainSlider"
import CategoriesBlock from "../components/CategoriesBlock"
import SliderCatBlock from "../components/SliderCatBlock"
import SliderAdvBlock from "../components/SliderAdvBlock"
import Advantages from "../components/Advantages"
import SectionTitle from "../components/SectionTitle"
import Section from "../components/Section"
import BackToCatalog from "../components/BackToCatalog"
import Bestseller from "../components/Bestseller"
import BestsellerWrap from "../components/BestsellerWrap"
import TestimonialBlock from "../components/TestimonialBlock"
import { Container } from "reactstrap"
import Testimonials from "../components/Testimonials"
import Review from "../components/Review/Review"
import CategoriesBlockButton from "../components/CategoriesBlockButton"
import Button from "../components/Button"
import { useState } from "react"
import Modal, {
  ModalTitle,
  ModalInfo,
  ModalFieldName,
  ModalField,
  ModalTextarea,
  ModalCheckbox,
  ModalButtons,
  ModalUpload,
  ModalClose
} from "../components/Modal"
import { b24SendLead } from "../utils/b24"
import { useRouter } from "next/router"
import { getPriceString } from "../utils/getPriceString"

const IndexPage = ({ hits }) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [leadFileBase64, setLeadFileBase64] = useState(null)
  const [leadFilename, setLeadFilename] = useState(null)
  const [leadName, setLeadName] = useState("")
  const [leadPhone, setLeadPhone] = useState("")
  const [leadComment, setLeadComment] = useState("")
  const [isLeadAgreed, setIsLeadAgreed] = useState(true)
  const [isSended, setIsSended] = useState(false)


  return (
    <Page>
      <MainSlider />

      <SliderCatBlock>
        <CategoriesBlock
          title="Шкафы-купе"
          img="/static/img/image5.png"
          href="/catalog"
        />

        <CategoriesBlock
          title="Гардеробные"
          img="/static/img/image2.png"
          href="/pages/dressing-rooms"
        />
        <CategoriesBlock
          title="Встроенные шкафы"
          img="/static/img/image3.png"
          href="/pages/cabinets"
        />
        <CategoriesBlock
          title="Кухни"
          img="/static/img/image13.png"
          href="/pages/kitchens"
        />
        <CategoriesBlock

          button={
            <CategoriesBlockButton
              onClick={() => setIsModalOpen(true)}
            ></CategoriesBlockButton>
          }
        />
      </SliderCatBlock>

      <Section>
        <SectionTitle>Наши преимущества</SectionTitle>

        <SliderAdvBlock>
          <Advantages
            title="Гарантия на мебель 12 месяцев"
            img="/static/img/tools1.png"
          />
          <Advantages
            title="Собственное производство Без наценок от посредников"
            img="/static/img/tools2.png"
          />
          <Advantages title="Сертифицированные материалы" img="/static/img/tools3.png" />
          <Advantages
            title="Изготовление шкафа 2-7 дней кухни до 15 дней"
            img="/static/img/tools4.png"
          />
          <Advantages
            title="Замер и доставка БЕСПЛАТНО"
            img="/static/img/tools5.png"
          />
        </SliderAdvBlock>
      </Section>

      <Section>
        <SectionTitle>
          Хиты продаж <BackToCatalog />
        </SectionTitle>
        <BestsellerWrap>

          {hits && hits.map(hit => (
            <Bestseller
              key={hit.id}
              sale={hit.sale}
              nameproduct={hit.title}
              img={hit.previewImage}
              price={getPriceString(hit.cost.profil + hit.cost.stekla + hit.cost.ldsp)}
              id={hit.id}
              stock={hit.category.includes("Распродажа")}
            />
          ))}

          <div
            style={{
              display: "flex",
              paddingTop: "2rem",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
            <BackToCatalog />
          </div>
        </BestsellerWrap>
      </Section>

      <Section>
        <SectionTitle>Особенности шкафов</SectionTitle>
        <SliderAdvBlock>

          <TestimonialBlock src="/static/img/testi3.png" title="Система профилей Doksal, 100% контроль качества." />
          <TestimonialBlock src="/static/img/testi2.png" title="Экологически чистая и безопасная ЛДСП Lamarty™, класса Е0,5." />
          <TestimonialBlock src="/static/img/testi4.png" title="Современные зеркала с бронировочной пленкой безопасности." />
          <TestimonialBlock src="/static/img/testi5.png" title="Лицевая кромка ПВХ 2 мм устойчива к сколам и механическим повреждениям." />

        </SliderAdvBlock>
      </Section>



      <Section>
        <SectionTitle>Отзывы</SectionTitle>
        <Review />
      </Section>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalClose onClick={() => setIsModalOpen(false)} />
          <ModalTitle>Закажите дизайн</ModalTitle>
          {!isSended && (
            <>
              <ModalInfo>
                и наши специалисты реализуют проект специально для Вас
              </ModalInfo>
              <ModalFieldName>Ваше имя:</ModalFieldName>
              <ModalField
                type="text"
                value={leadName}
                onChange={e => setLeadName(e.target.value)}
              />
              <ModalFieldName>Ваш телефон:</ModalFieldName>
              <ModalField
                type="text"
                value={leadPhone}
                onChange={e => setLeadPhone(e.target.value)}
              />
              <ModalFieldName>Опишите пожалуйста задачу:</ModalFieldName>
              <ModalTextarea
                value={leadComment}
                onChange={e => setLeadComment(e.target.value)}
              />
              <ModalCheckbox
                isChecked={isLeadAgreed}
                onClick={() => setIsLeadAgreed(!isLeadAgreed)}
              >
                Даю согласие на обработку моих персональных данных
              </ModalCheckbox>
              <ModalUpload
                onFileReaded={(fileName, file) => {
                  setLeadFilename(fileName)
                  setLeadFileBase64(file)
                }}
              />
              <ModalButtons>
                <Button
                  onClick={async () => {
                    if (!isLeadAgreed) return

                    // if (isPhoneErr) return

                    const ok = await b24SendLead(
                      "Заказ дизайна",
                      leadName,
                      leadPhone,
                      leadComment,
                      router.pathname,
                      leadFilename,
                      leadFileBase64
                    )

                    if (ok) setIsSended(true)
                  }}
                >
                  Заказать дизайн
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
    </Page>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.APP_URL}/api/hits?ids=${process.env.HITS}`)
  const { hits } = await res.json()

  return { hits }
}

export default IndexPage
