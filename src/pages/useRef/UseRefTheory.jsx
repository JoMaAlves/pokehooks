import useRefImg from '../../assets/useExamples/useRef/useRef.png';
import TheoryPage from '../../components/TheoryPage';

const useRefAccordion = [
  {
    title: 'Parameters',
    items: [
      {
        name: 'initialValue',
        description: (
          <>
            The value you want the ref object’s <code>current</code> property to
            be initially. It can be a value of any type. This argument is
            ignored after the initial render.
          </>
        ),
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        name: 'object.current',
        description: (
          <>
            <code>useRef</code> returns an object with a single property:
            <ul>
              <li>
                <code>current</code>: Initially, it’s set to the{' '}
                <code>initialValue</code> you have passed. You can later set it
                to something else. If you pass the ref object to React as a{' '}
                <code>ref</code>
                attribute to a JSX node, React will set its <code>
                  current
                </code>{' '}
                property.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
];

const UseRefTheory = () => (
  <TheoryPage
    accordionContent={useRefAccordion}
    imageSrc={useRefImg}
    imageWidth={600}
  />
);

export default UseRefTheory;
