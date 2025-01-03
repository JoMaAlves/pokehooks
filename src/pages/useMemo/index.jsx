import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import UseMemoTheory from './UseMemoTheory';
import UseMemoUsage from './UseMemoUsage';

const UseMemoPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useMemo</h1>

      {isTheory(subPage) && <UseMemoTheory />}

      {isUsage(subPage) && <UseMemoUsage />}
    </>
  );
};

export default UseMemoPage;
