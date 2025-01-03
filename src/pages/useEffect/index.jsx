import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import UseEffectTheory from './useEffectTheory';
import UseEffectUsage from './UseEffectUsage';

const UseEffectPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useEffect</h1>

      {isTheory(subPage) && <UseEffectTheory />}

      {isUsage(subPage) && <UseEffectUsage />}
    </>
  );
};

export default UseEffectPage;
