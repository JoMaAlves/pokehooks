import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, PAGE_LAYOUT } from '../../utils/constants';
import UseRefTheory from './UseRefTheory';

const UseRefPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useRef</h1>

      {isTheory(subPage) && <UseRefTheory />}
    </>
  );
};

export default UseRefPage;
