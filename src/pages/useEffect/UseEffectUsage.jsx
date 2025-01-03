import { useCallback, useEffect, useState } from 'react';
import CodeImage from '../../components/CodeImage';
import useEffectUsage from '../../assets/useExamples/useEffect/useEffectUsage.png';
import useEffectEmpty from '../../assets/useExamples/useEffect/useEffectEmpty.png';
import useEffectInfinity from '../../assets/useExamples/useEffect/useEffectInfinity.png';
import { Spinner } from 'react-bootstrap';

const UseEffectUsage = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchRandomPokemon = useCallback(async () => {
    setLoading(true);

    try {
      const randomPokemon = Math.floor(Math.random() * 1200);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
      );

      const data = await response.json();

      setPokemon(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    fetchRandomPokemon();

    const intervalId = setInterval(fetchRandomPokemon, 10000);

    return () => clearInterval(intervalId);
  }, [fetchRandomPokemon]);

  return (
    <div className="row">
      <div className="align- col-6 d-flex justify-content-center position-relative">
        <CodeImage src={useEffectUsage} width={600} />

        {loading ? (
          <Spinner
            animation="border"
            className="position-absolute"
            style={{ right: '20%', top: '30%', zIndex: 100 }}
          />
        ) : (
          <img
            alt={`${pokemon?.name} Sprite`}
            className="position-absolute"
            src={pokemon?.sprites?.front_default}
            style={{ right: '12%', top: '10%' }}
            width={150}
          />
        )}
      </div>

      <div className="align-items-center col-6 d-flex flex-column">
        <CodeImage className="mb-4" src={useEffectEmpty} width={500} />

        <CodeImage src={useEffectInfinity} width={300} />
      </div>
    </div>
  );
};

export default UseEffectUsage;
