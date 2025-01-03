import Title from '../pages/Title';
import End from '../pages/End';
import UseStatePage from '../pages/useState';

import { usePokeHooksContext } from '../context/PokeHooksContext';
import { PAGE_LAYOUT } from '../utils/constants';
import UseEffectPage from '../pages/useEffect';
import UseCallbackPage from '../pages/useCallback';
import UseMemoPage from '../pages/useMemo';
import UseRefPage from '../pages/useRef';
import CustomHooksPage from '../pages/customHook';
import UseContextPage from '../pages/useContext';
import UseReducerPage from '../pages/useReducer';
import ChooseYouCharacter from '../pages/ChooseYourCharacter';

const PageSelector = () => {
  const { page } = usePokeHooksContext();

  switch (PAGE_LAYOUT[page.pageNumber].id) {
    case 'title':
      return <Title />;
    case 'chooseYourCharacter':
      return <ChooseYouCharacter />;
    case 'useState':
      return <UseStatePage />;
    case 'useEffect':
      return <UseEffectPage />;
    case 'useCallback':
      return <UseCallbackPage />;
    case 'useMemo':
      return <UseMemoPage />;
    case 'useRef':
      return <UseRefPage />;
    case 'customHooks':
      return <CustomHooksPage />;
    case 'useContext':
      return <UseContextPage />;
    case 'useReducer':
      return <UseReducerPage />;

    default:
      return <End />;
  }
};

export default PageSelector;
