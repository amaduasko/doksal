import "./SectionTitle.css";

const SectionTitle = ({ children, style, styleForH2, className }) => {
  return (
    <div
      style={style}
      className={`section-title ${className ? className : ""}`}
    >
      <div className="container">
        <h2 style={styleForH2}>{children}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
