import "./Section.css";

const Section = ({ children, style }) => (
  <div style={style} className="section">
    {children}
  </div>
);

export default Section;
