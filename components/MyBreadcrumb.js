import "./MyBreadcrumb.css"

const MyBreadcrumb = ({ children }) => {
  return ( 
    <div className="mybreadcrumb">
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default MyBreadcrumb
