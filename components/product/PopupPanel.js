const PopupPanel = ({ isOpen, children, title, onClose }) => {
  return (
    <>
      {isOpen && <div className="PopupBackground" onClick={onClose}></div>}
      <div className="PopupPanel">
        <div className="PopupPanel__header">
          <h5 className="PopupPanel__title">{title}</h5>
          <div className="PopupPanel__close" onClick={onClose}></div>
        </div>
        <div className="PopupPanel__content">
          {children}
        </div>
      </div>
      <style jsx>{`
        .PopupPanel {
          position: fixed;
          background-color: #fff;
          top: ${isOpen ? '20%' : '100%'};
          left: 0;
          right: 0;
          height: calc(80%);
          z-index: 9000;
          transition: all .2s ease-in-out;
          padding-bottom: 50px;
          box-shadow: 0 0 6px rgba(0,0,0,.2);
        }
        .PopupPanel__close {
          width: 50px;
          height: 50px;
          background-image: url(/static/img/popuppanel-close.png);
          background-repeat: no-repeat;
          background-position: center center;
        }
        .PopupPanel__content {
          height: 100%;
          width: 100%;
          padding: 0 20px 50px 20px;
          overflow-x: hidden;
          overflow-y: scroll;
        }
        .PopupPanel__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 20px;
        }
        .PopupPanel__title {
          font-size: 14px;
          line-height: 17px;
          font-weight: 600;
          color: #444444;
          margin: 0;
        }
        .PopupBackground {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 8500;
        }
      `}</style>
    </>
  )
}

export default PopupPanel