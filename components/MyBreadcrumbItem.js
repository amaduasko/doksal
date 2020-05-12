import Link from "next/link"
import "./MyBreadcrumbItem.css"

const MyBreadcrumbItem = ({ href, title }) => {
  return (
    <>
      {href && (
        <Link href={href}>
          <a className="mybreadcrumbitem">{title}</a>
        </Link>
      )}
      {!href && <span className="mybreadcrumbitem__span">{title}</span>}
    </>
  )
}

export default MyBreadcrumbItem
