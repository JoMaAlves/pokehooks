import useEffectImg from '../../assets/useExamples/useEffect/useEffect.png';
import TheoryPage from '../../components/TheoryPage';

const useEffectAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'setup',
        description: (
          <>
            The function with your Effect’s logic. This function will run in
            every render. Your setup function may also, optionally, return a{' '}
            <code>cleanup function</code>.
          </>
        ),
      },
      {
        name: 'dependencies',
        description: (
          <>
            <code>Optional Parameter</code> The list of all reactive values
            referenced inside of the setup code. Its purpose is to prevent
            unnecessary re-renders.
            <ul>
              <li>If you leave it empty, it will run indefinitely.</li>
              <li>
                <code>[]</code> If you pass an empty array, it will only run
                once.
              </li>
              <li>
                <code>[var1, var2]</code> If you pass a value, it will run
                whenever that value changes.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: 'Setup Function',
    items: [
      {
        name: 'setupFunction',
        description:
          'When your component is added to the DOM and on every re-render, React will run your setup function.',
      },
      {
        name: 'cleanUpFunction',
        description:
          'After your component is removed from the DOM and before every re-render, React will run your cleanup function.',
      },
    ],
  },
];

const UseEffectTheory = () => (
  <TheoryPage
    accordionContent={useEffectAccordion}
    imageSrc={useEffectImg}
    imageWidth={600}
  />
);

export default UseEffectTheory;
