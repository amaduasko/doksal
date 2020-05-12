import "./ReviewItem.css";

export const ReviewItemTitle = ({ children }) => (
  <h5 className="review-item-title">{children}</h5>
);
export const ReviewItemDate = ({ children }) => (
  <span className="review-item-date">{children}</span>
);
export const ReviewItemText = ({ children }) => (
  <p className="review-item-text">{children}</p>
);

const ReviewItem = ({ children, className }) => (
  <div className={"review-item-container " + className}>{children}</div>
);

export default ReviewItem;
