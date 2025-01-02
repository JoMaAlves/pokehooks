import CodeImage from './CodeImage';
import CustomAccordion from './CustomAccordion';
import PropTypes from 'prop-types';

const TheoryPage = ({ accordionContent, imageSrc, imageWidth }) => {
  return (
    <div className="row">
      <div className="col">
        <CustomAccordion contentList={accordionContent} />
      </div>

      <div className="align-items-center col d-flex">
        <CodeImage src={imageSrc} width={imageWidth} />
      </div>
    </div>
  );
};

TheoryPage.propTypes = {
  accordionContent: CustomAccordion.propTypes.contentList,
  imageSrc: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

export default TheoryPage;
