import useContextImg from '../../assets/useExamples/useContext/useContext.png';
import TheoryPage from '../../components/TheoryPage';

const useContextAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'SomeContext',
        description: (
          <>
            The context that you’ve previously created with{' '}
            <code>createContext</code>. The context itself does not hold the
            information, it only represents the kind of information you can
            provide or read from components.
          </>
        ),
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        name: 'value',
        description: (
          <>
            Returns the context value for the calling component. It is
            determined as the <code>value</code> passed to the closest
            <code>SomeContext.Provider</code> above the calling component in the
            tree.
          </>
        ),
      },
    ],
  },
];

const UseContextTheory = () => (
  <TheoryPage
    accordionContent={useContextAccordion}
    imageSrc={useContextImg}
    imageWidth={600}
  />
);

export default UseContextTheory;
