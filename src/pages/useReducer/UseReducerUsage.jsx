import CodeImage from '../../components/CodeImage';
import useReducerUsage from '../../assets/useExamples/useReducer/useReducerUsage.png';
import { usePokeHooksContext } from '../../context/PokeHooksContext';
import trainerCardLeaf from '../../assets/useExamples/useReducer/trainerCardLeaf.png';
import trainerCardRed from '../../assets/useExamples/useReducer/trainerCardRed.png';

const UseReducerUsage = () => {
  const { trainerCardInfo } = usePokeHooksContext();

  return (
    <div className="row">
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <CodeImage src={useReducerUsage} width={700} />
      </div>
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <h6
          className="position-absolute m-0"
          style={{ zIndex: 1, top: '17.8%', left: '39%', fontSize: 16 }}
        >
          <code className="text-black">{trainerCardInfo.name}</code>
        </h6>
        {trainerCardInfo.character === 'red' ? (
          <img className="rounded" src={trainerCardRed} height={400} />
        ) : (
          <img className="rounded" src={trainerCardLeaf} height={400} />
        )}
      </div>
    </div>
  );
};

export default UseReducerUsage;
