import './BottomPanel.css'

const BottomPanel = ({ children }) => (
  <div className="BottomPanel">
    {children}
  </div>
)

const BottomPanelButton = ({ isActive, children, ...rest}) => (
  <a className="" {...rest} className={`BottomPanelButton ${isActive ? 'active' : '' }`}>
    <span className="BottomPanelButton__text">{children}</span>
  </a>
)

export default BottomPanel
export {
  BottomPanelButton
}