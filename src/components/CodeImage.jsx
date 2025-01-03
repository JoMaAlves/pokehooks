import PropTypes from 'prop-types';

const CodeImage = ({ className, src, width }) => {
  return (
    <img className={`rounded shadow ${className}`} src={src} width={width} />
  );
};

CodeImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default CodeImage;
