import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const FossilContext = createContext(null);

const FossilProvider = ({ children }) => {
  const [foundFossils, setFoundFossils] = useState([]);
  const [fossils, setFossils] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFossils = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/item-category/35'
      );

      const data = await response.json();
      const filteredData = data.items
        .filter(
          (item) =>
            item.name !== 'honey' &&
            !item.name.includes('fossilized') &&
            !item.name.includes('odd')
        )
        .map((fossil) => fossil.url);

      setFossils(filteredData);
    };

    getFossils();
  }, []);

  const findFossil = useCallback(async () => {
    setLoading(true);
    const found = Math.random() <= 0.3;

    if (found) {
      const randomFossil = Math.floor(Math.random() * fossils.length);

      const response = await fetch(fossils[randomFossil]);
      const data = await response.json();

      const name = data.names.find((name) => name.language.name === 'en').name;

      setFoundFossils((prevValues) => [
        ...prevValues,
        {
          id: data.name,
          name,
        },
      ]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [fossils]);

  return (
    <FossilContext.Provider
      value={{ findFossil, fossils, foundFossils, loading }}
    >
      {children}
    </FossilContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFossilContext = () => {
  const context = useContext(FossilContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
};

FossilProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FossilProvider;
