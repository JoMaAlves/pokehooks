import CodeImage from '../../components/CodeImage';
import customHooksUsage from '../../assets/useExamples/customHooks/customHooksUsage.png';
import customHooksUsage2 from '../../assets/useExamples/customHooks/customHooksUsage2.png';
import useFetch from '../../hooks/useFetch';

const CustomHooksUsage = () => {
  const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

  return (
    <div className="row">
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <CodeImage src={customHooksUsage} width={550} />
        <img
          className="position-absolute"
          src={data?.sprites?.front_default}
          alt=""
          width={200}
          style={{ right: '12%', bottom: '-10%' }}
        />
        <img
          className="position-absolute"
          src={data?.sprites?.front_default}
          alt=""
          width={200}
          style={{ right: 0, top: '20%' }}
        />
        <img
          className="position-absolute"
          src={data?.sprites?.front_default}
          alt=""
          width={200}
          style={{ left: '12%', top: '-22%' }}
        />
      </div>
      <div className="align-items-center col justify-content-center d-flex position-relative">
        <CodeImage src={customHooksUsage2} width={550} />
        <img
          className="position-absolute"
          src={data?.sprites?.front_shiny}
          alt=""
          width={200}
          style={{ right: '12%', bottom: '25%' }}
        />
        <img
          className="position-absolute"
          src={data?.sprites?.front_default}
          alt=""
          width={200}
          style={{ right: '-5%', top: '-22%' }}
        />
      </div>
    </div>
  );
};

export default CustomHooksUsage;
