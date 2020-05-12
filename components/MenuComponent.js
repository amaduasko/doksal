import { Collapse } from "reactstrap";
import "./MenuComponent.css";
import { useState, useEffect } from "react";

export const MenuItem = ({ children, active }) => {
  return <li className={`menu-list-item ${active ? "menu-list-item-active" : ""}`}>{children}</li>;
};

const Menu1 = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(" ");
  const activeClass = "menu-list-item-active";
  let atLeastOneIsActive = false
  const handleMenuClick = (items, index, text) => {
    handleActiveMenuItem(items, index);
    setSelectedItem(text);
    setIsOpen(!isOpen);
  };
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setItems(
      (
        prevProps,
        nextProps = document.querySelectorAll(".menu-list-item ")
      ) => {

        nextProps.forEach((item, index) => {
          if (item.classList.contains(activeClass)) {
            atLeastOneIsActive = true;
            setSelectedItem(item.innerText)
          }
          item.onclick = () =>
            handleMenuClick(nextProps, index, item.innerText);
        });
        if (!atLeastOneIsActive) {
          setSelectedItem(nextProps[0].innerText)
          nextProps[0].classList.add(activeClass)
        }
        return nextProps;
      }
    );
  }, [setItems]);
  const handleActiveMenuItem = (items, index) => {
    items.forEach((item, itemIndex) =>
      itemIndex === index
        ? item.classList.add(activeClass)
        : item.classList.remove(activeClass)
    );
  };
  return (
    <div className="menu-component-container">
      <ul className="menu-item-list-desktop">{children}</ul>
      <button className="mobile-menu-btn" onClick={toggle}>
        {" "}
        {selectedItem}{" "}
        <i
          className={`fas ${
            isOpen ? "fa-chevron-down" : "fa-chevron-right"
            } mobile-menu-chevron`}
        ></i>
      </button>
      <Collapse isOpen={isOpen}>
        <ul className="menu-item-list-mobile">{children}</ul>
      </Collapse>
    </div>
  );
};

export default Menu1;
