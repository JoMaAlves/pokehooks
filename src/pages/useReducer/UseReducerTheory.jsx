import useReducerImg from '../../assets/useExamples/useReducer/useReducer.png';
import TheoryPage from '../../components/TheoryPage';

const useReducerAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'reducer',
        description: (
          <>
            The reducer function that specifies how the state gets updated. It
            must be pure, should take the <code>state</code> and{' '}
            <code>action</code> as arguments, and should return the next state.
            State and action can be of any types.
          </>
        ),
      },
      {
        name: 'initialArg',
        description: (
          <>
            The value from which the initial state is calculated. It can be a
            value of any type. How the initial state is calculated from it
            depends on the next <code>init</code> argument.
          </>
        ),
      },
      {
        name: 'init',
        description: (
          <>
            <code>Optional</code> The initializer function that should return
            the initial state. If it’s not specified, the initial state is set
            to <code>initialArg</code>. Otherwise, the initial state is set to
            the result of calling <code>init(initialArg)</code>.
          </>
        ),
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        name: 'state',
        description: (
          <>
            During the first render, it’s set to <code>init(initialArg)</code>{' '}
            or <code>initialArg</code> (if there’s no <code>init</code>).
          </>
        ),
      },
      {
        name: 'dispatch',
        description: (
          <>
            Lets you update the state to a different value and trigger a
            re-render.
          </>
        ),
      },
    ],
  },
];

const UseReducerTheory = () => (
  <TheoryPage
    accordionContent={useReducerAccordion}
    imageSrc={useReducerImg}
    imageWidth={600}
  />
);

export default UseReducerTheory;
