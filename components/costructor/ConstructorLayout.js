import "./ConstructorLayout.css"

const ConstructorLayout = ({ children }) => {
  return <div className="constructorlayout">{children}</div>
}

const ConstructorLayoutLeft = ({ children }) => {
  return <div className="constructorlayout__left">{children}</div>
}

const ConstructorLayoutRight = ({ children }) => {
  return <div className="constructorlayout__right">{children}</div>
}

const ConstructorLayoutSticky = ({ children }) => (
  <div className="constructorlayout__sticky">{children}</div>
)

export default ConstructorLayout
export {
  ConstructorLayoutLeft,
  ConstructorLayoutRight,
  ConstructorLayoutSticky
}
