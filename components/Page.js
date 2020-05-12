import "bootstrap/dist/css/bootstrap.min.css"
import "./Page.css"
import Header from "./Header"
import Footer from "./Footer"
import NewHeader from "./NewHeader"

const Page = ({ children }) => (
  <div className="page">
    <NewHeader />
    {children}
    <Footer />
  </div>
)

export default Page
