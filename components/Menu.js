import Link from "next/link";

const MenuItem = ({ href, lvl, children }) => {
  if (!href)
    return (
      <div>
        {children}
        <style jsx>{`
          div {
            display: block;
            width: 100%;
            font-weight: 600;
            font-size: 13px;
            line-height: 35px;
          }
        `}</style>
      </div>
    );
  return (
    <Link href={href ? href : undefined}>
      <a>
        {children}
        <style jsx>{`
          a {
            ${lvl ? "padding-left: 15px;" : ""}
            display: block;
            width: 100%;
            ${lvl ? "font-weight: 400" : "font-weight:600"};
            font-size: 13px;
            line-height: 35px;
          }
          a:hover {
            color: #2c87a6;
          }
        `}</style>
      </a>
    </Link>
  );
};

const MenuPhone = () => {
  return (
    <div>
      <a href={process.env.PHONE_NUMBER}>+ 7 904 279 - 86 - 89</a>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          padding: 50px 10px;
        }
        a {
          color: #444444;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          display: inline-flex;
          justify-content: center;

          position: relative;
        }
        a::before {
          content: url(/static/img/phone-blue.png);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -20px;
        }
        a:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

const MenuSocial = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        margin: 0;
      }
    `}</style>
  </ul>
);

const Menu = ({ isOpen, children, onClose }) => {
  return (
    <>
      {isOpen && <div className="menu" onClick={() => onClose()}></div>}
      <div className="menu__content">{children}</div>
      <style jsx>{`
        .menu {
          position: fixed;
          top: 80px;
          right: 0;
          bottom: 0;
          left: 0;
          width: calc(100%);
          ${isOpen ? "right: -100%" : "right: 0"};
          background-color: rgba(0, 0, 0, 0.2);
          filter: blur(5px);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
          z-index: 2000;
          transition: right 0.4s ${isOpen ? "ease-out" : "ease-in"};
          opacity: ${isOpen ? 1 : 0};
          transition: opacity 0.2s ease;
        }
        .menu__content {
          position: fixed;
          top: 80px;
          bottom: 0;
          ${isOpen ? "right:0" : "right:-100%"};
          background-color: #f5f5f5;
          width: 90%;
          max-width: 400px;
          overflow-y: auto;
          padding: 18px 35px;
          z-index: 2001;
          transition: right 0.25s ${isOpen ? "ease-in" : "ease-out"};
        }
      `}</style>
    </>
  );
};

export default Menu;
export { MenuItem, MenuPhone, MenuSocial };
