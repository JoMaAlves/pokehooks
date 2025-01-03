import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import UseReducerTheory from './UseReducerTheory';
import UseReducerUsage from './UseReducerUsage';

const UseReducerPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useReducer</h1>

      {isTheory(subPage) && <UseReducerTheory />}

      {isUsage(subPage) && <UseReducerUsage />}
    </>
  );
};

export default UseReducerPage;
