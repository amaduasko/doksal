import { Col } from "reactstrap";
import Menu1, { MenuItem } from "../MenuComponent";
export const ConstructorImagePreview = ({ source }) => (
  <img src={source} alt="image preview" />
);

export const ConstructorImagePreviewAbout = ({ children }) => (
  <p className="image-preview-about">{children}</p>
);
export const ConstructorImagePreviewLine = ({ className }) => (
  <span className={`image-preview-line ${className ? className : ""}`}></span>
);
export const ConstructorImagePreviewBox = ({ className, children }) => (
  <div className={`image-preview-box ${className ? className : ""}`}>
    {children}
  </div>
);

export const ConstructorImageBox = ({ source }) => (
  <div className="construct-image-box">
    <img src={source} alt="constructor img" />
  </div>
);

export const ConstructorBox = ({ children }) => (
  <Col className="constructor-box">{children}</Col>
);

export const ConstructorMenu = () => (
  <Col className="menu-col pl-0">
    <Menu1>
      <MenuItem> Система крепления</MenuItem>
      <MenuItem> Система наполнения</MenuItem>
      <MenuItem> Фурнитура</MenuItem>
      <MenuItem>Ударопрочная кромка</MenuItem>
      <MenuItem> Практически любые размеры</MenuItem>
      <MenuItem>Доводчики</MenuItem>
    </Menu1>
  </Col>
);

export const ConstructorInfoBox = ({ className, children }) => (
  <div className={`construct-image-info-box ${className ? className : ""}`}>
    <p className="construct-image-info-text">{children}</p>
  </div>
);
