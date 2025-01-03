import useCallbackImg from '../../assets/useExamples/useCallback/useCallback.png';
import TheoryPage from '../../components/TheoryPage';

const useCallbackAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'function',
        description:
          'The function value that you want to cache. It can take any arguments and return any values. React will return your function back to you during the initial render.',
      },
      {
        name: 'dependencies',
        description: (
          <>
            The list of all reactive values referenced inside of the function
            code. Its purpose is to prevent unnecessary re-renders.
            <ul>
              <li>
                <code>[]</code> If you pass an empty array, it will store the
                first instance of the function.
              </li>
              <li>
                <code>[var1, var2]</code> If you pass values, it will update the
                function whenever those values change.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        name: 'storedFunction',
        description:
          'On the initial render, useCallback returns the function you have passed. During subsequent renders, it will either return an already stored function from the last render (if the dependencies haven’t changed), or return the function you have passed during this render.',
      },
    ],
  },
];

const UseCallbackTheory = () => (
  <TheoryPage
    accordionContent={useCallbackAccordion}
    imageSrc={useCallbackImg}
    imageWidth={600}
  />
);

export default UseCallbackTheory;
