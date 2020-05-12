import Link from "next/link"
import "./BackToCatalog.css"

const BackToCatalog = () => {
  return (
    <Link href="/catalog">
      <a className="backtocatalog">В каталог</a>
    </Link>
  )
}

export default BackToCatalog
