import { useState, useEffect } from "react";
import { Button, ButtonGroup, Col, TabContent, TabPane } from "reactstrap";

export const ServiceChoiceBtn = ({ onClick, children }) => (
  <Button onClick={onClick} className="rounded-pill fif-block-btn">
    {children}
  </Button>
);
export const ServiceChoiceBtnGroup = ({ props, children }) => (
  <ButtonGroup className="mt-3 fif-block-btn-container ">
    {children}
  </ButtonGroup>
);

export const ServiceChoiceInfoItem = ({ children }) => (
  <p className="fif-block-text">{children}</p>
);
export const ServiceChoiceInfoTab = ({ children }) => (
  <div className="choice-info-tab">{children}</div>
);
export const ServiceChoiceInfo = ({ children }) => {
  const handleTabsActions = (tabs, buttons) => {
    tabs.forEach((tab, index) => (index !== 0 ? (tab.hidden = true) : null));
    buttons[0].classList.add("fif-block-btn-active");
    buttons.forEach(
      (button, index) =>
        (button.onclick = () => handleButtonClick(index, buttons, tabs))
    );
  };
  const handleButtonClick = (index, buttons, tabs) => {
    buttons.forEach((button, buttonIndex) =>
      buttonIndex !== index
        ? button.classList.remove("fif-block-btn-active")
        : button.classList.add("fif-block-btn-active")
    );
    tabs.forEach((tab, tabIndex) =>
      tabIndex === index ? (tab.hidden = false) : (tab.hidden = true)
    );
  };
  useEffect(() => {
    const tabs = document.querySelectorAll(".choice-info-tab");
    const buttons = document.querySelectorAll(".fif-block-btn ");
    handleTabsActions(tabs, buttons);
  }, []);

  return <div className="fif-block-image-info-container">{children}</div>;
};
export const ServiceChoiceAbout = ({ children }) => (
  <Col className="pl-0">{children}</Col>
);
export const ServiceChoiceImage = ({ source }) => (
  <Col className="d-flex">
    <div className="fif-block-image-box">
      <img src={source} alt="шкаф" />
    </div>
  </Col>
);
