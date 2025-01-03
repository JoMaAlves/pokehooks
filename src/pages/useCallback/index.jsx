import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import UseCallbackTheory from './UseCallbackTheory';
import UseCallbackUsage from './UseCallbackUsage';

const UseCallbackPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useCallback</h1>

      {isTheory(subPage) && <UseCallbackTheory />}

      {isUsage(subPage) && <UseCallbackUsage />}
    </>
  );
};

export default UseCallbackPage;
