import Link from "next/link"
import "./Button.css"

const Button = ({ href, color, children, ...rest }) => {
  if (!href) {
    return (
      <button
        className={`button ${
          color == "blue" ? "button_blue" : "button_orange"
        }`}
        {...rest}
      >
        {children}
      </button>
    )
  }
  return (
    <Link href={href}>
      <button
        className={`button ${
          color == "blue" ? "button_blue" : "button_orange"
        }`}
        {...rest}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
