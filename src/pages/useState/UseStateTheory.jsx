import useStateImg from '../../assets/useExamples/useState/useState.png';
import TheoryPage from '../../components/TheoryPage';

const useStateAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'initialState',
        description:
          'The value you want the state to be initially. It can be a value of any type, even functions.',
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        name: 'currentState',
        description: (
          <>
            During the first render, it will match the <code>initialState</code>{' '}
            you have passed.
          </>
        ),
      },
      {
        name: 'setFunction()',
        description:
          'Lets you update the state to a different value and trigger a re-render.',
      },
    ],
  },
];

const UseStateTheory = () => (
  <TheoryPage
    accordionContent={useStateAccordion}
    imageSrc={useStateImg}
    imageWidth={600}
  />
);

export default UseStateTheory;
