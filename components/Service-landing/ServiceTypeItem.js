export const ServiceTypeItemTitle = ({ className, children }) => (
  <h3 className={`services-types-title ${className ? className : ""}`}>
    {children}
  </h3>
);
export const ServiceTypeItemImage = ({ source }) => (
  <img className="services-types-image" src={source} alt="service type" />
);
export const ServiceTypeItem = ({ children }) => (
  <div className="services-types-item">{children}</div>
);
