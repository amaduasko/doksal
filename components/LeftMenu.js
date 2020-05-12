import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { UserAgent } from '@quentin-sommer/react-useragent'

const LeftMenu = ({ children }) => {
  const { pathname } = useRouter()
  const [otherOpen, setOtherOpen] = useState(false)

  return (
    <div className="left-menu">
      <UserAgent mobile>
        {uaIsMobile => {
          const elements = React.Children.toArray(children)
          const [activeElement] = elements.filter(el => el.props.href === pathname)
          const otherElements = elements.filter(el => el.props.href !== pathname)

          const newActiveElement = React.cloneElement(activeElement, { onClick: () => setOtherOpen(!otherOpen) })

          return (
            <>
              {uaIsMobile && (
                <>
                  {newActiveElement}
                  <div className="left-menu__icon">
                    <i className="fas fa-chevron-right mobile-menu-chevron"></i>
                  </div>

                  {otherOpen && (
                    <div className="left-menu__other">
                      {otherElements}
                    </div>
                  )}
                </>
              )}
              {!uaIsMobile && children}
            </>
          )
        }}
      </UserAgent>

      <style jsx>{`
        .left-menu {
          width: 100%;
          background-color: #fff;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
          position: relative;
        }
        .left-menu__other {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #fff;
          z-index: 20000;
        }
        .left-menu__icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) ${otherOpen ? 'rotate(90deg)': ''};
          transition: transform .3s ease;
        }
      `}</style>
    </div>
  )
}

const LeftMenuItem = ({ href, children, onClick }) => {
  const { pathname } = useRouter()
  
  return (
    <>
      {!onClick ? (
          <Link href={href}>
            <div>{children}</div>
          </Link>
        ) : (
        <div onClick={onClick}>
          {children}
        </div>
      )}
      <style jsx>{`
        div {
          padding: 1rem .5rem 1rem 2rem;
          cursor: pointer;
          line-height: 1;
          display: flex;
          align-items: center;
          border-left: 5px solid ${pathname === href ? '#2c87a6' : 'transparent'};
          font-weight: ${pathname === href ? '700' : 'normal' };
          transition: border-left .2s ease-in, font-weight .2s ease-in;
          
        }
        div:hover {
          border-left: 5px solid #2c87a6;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default LeftMenu
export { LeftMenuItem }