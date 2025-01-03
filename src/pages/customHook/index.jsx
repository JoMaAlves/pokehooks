import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { isTheory, isUsage, PAGE_LAYOUT } from '../../utils/constants';
import CustomHooksTheory from './CustomHooksTheory';
import CustomHooksUsage from './CustomHooksUsage';

const CustomHooksPage = () => {
  const { page } = usePokeHooksContext();

  const subPage = PAGE_LAYOUT[page.pageNumber].subPages[page.subPageNumber];

  return (
    <>
      <h1 className="mb-5 text-center">Custom Hooks</h1>

      {isTheory(subPage) && <CustomHooksTheory />}

      {isUsage(subPage) && <CustomHooksUsage />}
    </>
  );
};

export default CustomHooksPage;
