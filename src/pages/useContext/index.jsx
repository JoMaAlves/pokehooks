import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import UseContextTheory from './UseContextTheory';
import UseContextUsage from './UseContextUsage';

const UseContextPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useContext</h1>

      {isTheory(subPage) && <UseContextTheory />}

      {isUsage(subPage) && <UseContextUsage />}
    </>
  );
};

export default UseContextPage;
