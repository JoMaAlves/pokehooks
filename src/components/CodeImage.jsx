import PropTypes from 'prop-types';

const CodeImage = ({ src, width }) => {
  return <img className="rounded shadow" src={src} width={width} />;
};

CodeImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default CodeImage;
