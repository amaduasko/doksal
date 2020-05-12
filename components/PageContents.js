const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        font-size: 14px;
        padding-bottom: 3rem;
        padding: 15px;
      }
      .content :global(h2) {
        font-size: 20px;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 700;
      }
      .content :global(h3) {
        font-size: 18px;
        margin-top: 1rem;
        margin-bottom: .5rem;
        font-weight: 600;
        text-transform: none;
      }
      .content :global(ul) {
        padding-left: 2rem;
      }
      .content :global(li) {
        line-height: 2;
      }
    `}</style>
  </div>
)

export default Content
