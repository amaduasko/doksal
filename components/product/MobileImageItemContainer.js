const MobileImageItemContainer = ({ children }) => (
  <div className="MobileImageItemContainer">
    {children}
    <style jsx>{`
      .MobileImageItemContainer {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
      }
    `}</style>
  </div>
)

export default MobileImageItemContainer