import CodeImage from '../../components/CodeImage';
import useContextUsage from '../../assets/useExamples/useContext/useContextUsage.png';
import { usePokeHooksContext } from '../../context/PokeHooksContext';

const UseContextUsage = () => {
  const { trainerCardInfo } = usePokeHooksContext();

  return (
    <div className="row">
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <CodeImage src={useContextUsage} width={550} />
      </div>
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <div
          className="d-flex flex-column align-items-center"
          style={{ height: '300px' }}
        >
          <h2 className="text-center">
            Hey, {trainerCardInfo.name ? trainerCardInfo.name : 'You'}!
            Let&apos;s battle!
          </h2>

          {trainerCardInfo.name && <h2>AGAIN!</h2>}
          <img
            className="rounded"
            src="https://i.pinimg.com/originals/be/65/c6/be65c69c0895736e030b471857ea60ee.gif"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default UseContextUsage;
