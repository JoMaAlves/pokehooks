import Title from '../pages/Title';
import End from '../pages/End';
import UseStatePage from '../pages/useState';

import { usePokeHooksContext } from '../context/PokeHooksContext';
import { PAGE_LAYOUT } from '../utils/constants';
import UseEffectPage from '../pages/useEffect';

const PageSelector = () => {
  const { page } = usePokeHooksContext();

  switch (PAGE_LAYOUT[page.pageNumber].id) {
    case 'title':
      return <Title />;
    case 'classComponents':
      return <></>;
    case 'useState':
      return <UseStatePage />;
    case 'useEffect':
      return <UseEffectPage />;
    case 'useCallback':
      return <></>;
    case 'useMemo':
      return <></>;
    case 'useRef':
      return <></>;
    case 'useReducer':
      return <></>;
    case 'customHooks':
      return <></>;
    case 'useContext':
      return <></>;
    case 'newHooks':
      return <></>;

    default:
      return <End />;
  }
};

export default PageSelector;
