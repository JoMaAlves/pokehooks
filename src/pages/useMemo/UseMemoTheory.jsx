import useMemoImg from '../../assets/useExamples/useMemo/useMemo.png';
import TheoryPage from '../../components/TheoryPage';

const useMemoAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'calculateValue',
        description:
          'The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call this function and store the result for future renders, changing it only if the dependencies change.',
      },
      {
        name: 'dependencies',
        description: (
          <>
            The list of all reactive values referenced inside of the{' '}
            <code>calculateValue</code> code. Its purpose is to prevent
            unnecessary re-renders.
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
        name: 'storedValue',
        description: (
          <>
            On the initial render, <code>useMemo</code> returns the result of
            calling <code>calculateValue</code> with no arguments. During next
            renders, it will either return an already stored value from the last
            render (if the dependencies haven’t changed), or call{' '}
            <code>calculateValue</code> again, and return the result that{' '}
            <code>calculateValue</code> has returned.
          </>
        ),
      },
    ],
  },
];

const UseMemoTheory = () => (
  <TheoryPage
    accordionContent={useMemoAccordion}
    imageSrc={useMemoImg}
    imageWidth={600}
  />
);

export default UseMemoTheory;
