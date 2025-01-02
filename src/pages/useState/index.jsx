import { usePokeHooksContext } from '../../context/PokeHooksContext';
import {
  isAltUsage,
  isTheory,
  isUsage,
  PAGE_LAYOUT,
} from '../../utils/constants';
import UseStateAltUsage from './UseStateAltUsage';
import UseStateTheory from './useStateTheory';
import UseStateUsage from './useStateUsage';

const UseStatePage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">useState</h1>

      {isTheory(subPage) && <UseStateTheory />}

      {isUsage(subPage) && <UseStateUsage />}

      {isAltUsage(subPage) && <UseStateAltUsage />}
    </>
  );
};

export default UseStatePage;
