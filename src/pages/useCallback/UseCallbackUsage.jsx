import CodeImage from '../../components/CodeImage';
import useCallbackUsage from '../../assets/useExamples/useCallback/useCallbackUsage.png';
import engineer from '../../assets/engineer.png';

const UseCallbackUsage = () => {
  return (
    <div className="row">
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <CodeImage src={useCallbackUsage} width={600} />
        <h6
          className="position-absolute text-center"
          style={{ right: '10%', top: '28%', rotate: '15deg' }}
        >
          This should maintain things <br /> working correctly 😤
        </h6>
        <img
          className="position-absolute"
          src={engineer}
          style={{ bottom: '-30%', right: '11%' }}
          width={300}
        />
      </div>
    </div>
  );
};

export default UseCallbackUsage;
