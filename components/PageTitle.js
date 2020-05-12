import "./PageTitle.css"

const PageTitle = ({ children }) => (
  <div className="pagetitle">
    <div className="container">
      <h1 className="pagetitle__h1">{children}</h1>
    </div>
  </div>
)

export default PageTitle
