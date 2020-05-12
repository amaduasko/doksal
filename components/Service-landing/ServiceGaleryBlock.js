import ServiceSlider from "../Service-landing/ServiceSlide";
const SreviceGaleryBlock = ({ galeryImagesArray, children }) => {
  return (
    <div className="galery-block-container">
      <ServiceSlider galeryDotImagesArray={galeryImagesArray}>
        {children}
      </ServiceSlider>
    </div>
  );
};

export default SreviceGaleryBlock;
