import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { PAGE_LAYOUT } from '../utils/constants';

const dafaultValues = {
  character: 'red',
  items: {
    pokeballs: 0,
    potions: 0,
  },
  money: 2500,
  name: '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ITEMS':
      return {
        ...state,
        items: { ...state.items, ...payload },
      };

    case 'MONEY':
      return {
        ...state,
        money: payload,
      };

    case 'NAME':
      return {
        ...state,
        name: payload,
      };

    case 'CHARACTER':
      return {
        ...state,
        character: payload,
      };

    default:
      return state;
  }
};

const PokeHooksContext = createContext(null);

const PokeHooksProvider = ({ children }) => {
  const [trainerCardInfo, dispatchTrainerCardInfo] = useReducer(
    reducer,
    dafaultValues
  );
  const [page, setPage] = useState({ pageNumber: 0, subPageNumber: 0 });

  const setNextPage = useCallback(() => {
    setPage((prevPage) => ({
      pageNumber: prevPage.pageNumber + 1,
      subPageNumber: 0,
    }));
  }, []);

  const handleSlideFlow = useCallback(
    (event) => {
      if (
        event.key === 'ArrowRight' &&
        page.pageNumber < PAGE_LAYOUT.length - 1
      ) {
        if (
          page.subPageNumber <
          PAGE_LAYOUT[page.pageNumber].subPages.length - 1
        ) {
          return setPage((page) => ({
            ...page,
            subPageNumber: page.subPageNumber + 1,
          }));
        }

        return setPage((page) => ({
          pageNumber: page.pageNumber + 1,
          subPageNumber: 0,
        }));
      }

      if (event.key === 'ArrowLeft' && page.pageNumber >= 0) {
        if (page.subPageNumber > 0) {
          return setPage((page) => ({
            ...page,
            subPageNumber: page.subPageNumber - 1,
          }));
        }

        return setPage((page) => ({
          pageNumber: page.pageNumber ? page.pageNumber - 1 : 0,
          subPageNumber: 0,
        }));
      }
    },
    [page, setPage]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleSlideFlow);

    return () => {
      window.removeEventListener('keydown', handleSlideFlow);
    };
  }, [handleSlideFlow]);

  return (
    <PokeHooksContext.Provider
      value={{
        dispatchTrainerCardInfo,
        handleSlideFlow,
        setNextPage,
        trainerCardInfo,
        page,
      }}
    >
      {children}
    </PokeHooksContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePokeHooksContext = () => {
  const context = useContext(PokeHooksContext);

  if (!context) {
    throw new Error(
      'usePokeHooksContext must be used within a PokeHooksProvider'
    );
  }

  return context;
};

PokeHooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokeHooksProvider;
