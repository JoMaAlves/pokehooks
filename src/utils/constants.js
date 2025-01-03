export const PAGE_LAYOUT = [
  { id: 'title', subPages: [] },
  { id: 'chooseYourCharacter', subPages: [] },
  { id: 'useState', subPages: ['theory', 'usage', 'altUsage'] },
  { id: 'useEffect', subPages: ['theory', 'usage'] },
  { id: 'useCallback', subPages: ['theory', 'usage'] },
  { id: 'useMemo', subPages: ['theory', 'usage'] },
  { id: 'useRef', subPages: ['theory'] },
  { id: 'customHooks', subPages: ['theory', 'usage'] },
  { id: 'useContext', subPages: ['theory', 'usage'] },
  { id: 'useReducer', subPages: ['theory', 'usage'] },
  { id: 'end', subPages: [] },
];

export const isTheory = (page) => page === 'theory';
export const isUsage = (page) => page === 'usage';
export const isAltUsage = (page) => page === 'altUsage';

export const FOSSILS = ['domeFossil', 'helixFossil', 'oldAmber'];
