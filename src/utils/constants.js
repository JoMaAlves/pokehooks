export const PAGE_LAYOUT = [
  { id: 'title', subPages: [] },
  { id: 'classComponents', subPages: [] },
  { id: 'useState', subPages: ['theory', 'usage', 'altUsage'] },
  { id: 'useEffect', subPages: ['theory', 'usage'] },
  { id: 'useCallback', subPages: [] },
  { id: 'useMemo', subPages: [] },
  { id: 'useRef', subPages: [] },
  { id: 'customHooks', subPages: [] },
  { id: 'useReducer', subPages: [] },
  { id: 'useContext', subPages: [] },
  { id: 'newHooks', subPages: [] },
  { id: 'end', subPages: [] },
];

export const isTheory = (page) => page === 'theory';
export const isUsage = (page) => page === 'usage';
export const isAltUsage = (page) => page === 'altUsage';

export const FOSSILS = ['domeFossil', 'helixFossil', 'oldAmber'];
