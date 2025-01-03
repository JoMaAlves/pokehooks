import customHooksImg from '../../assets/useExamples/customHooks/customHooksUsage.png';
import TheoryPage from '../../components/TheoryPage';

const customHooksAccordion = [
  {
    title: 'Advantages',
    items: [
      {
        name: 'reusable',
        description:
          'When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. This way, we can just call it in any component we need.',
      },
      {
        name: 'easyMaintenance',
        description:
          "If we need to change the logic, we don't have to change it in multiple places, just in the custom Hook.",
      },
    ],
  },
  {
    title: 'Parameters & Returns',
    items: [
      {
        name: 'whateverYouWant',
        description:
          'You can pass any parameters you want to the custom Hook, and it can return any value you need.',
      },
    ],
  },
  {
    title: 'Rules',
    items: [
      {
        name: 'naming',
        description:
          'Custom Hooks must be named starting with use followed by a capital letter. This is a convention that allows linters to catch bugs, etc.',
      },
      {
        name: 'purity',
        description: (
          <>
            <ul className="mb-0">
              <li>
                It minds its own business. It does not change any objects or
                variables that existed before it was called.
              </li>
              <li>
                Same inputs, same output. Given the same inputs, a pure function
                should always return the same result.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
];

const CustomHooksTheory = () => (
  <TheoryPage
    accordionContent={customHooksAccordion}
    imageSrc={customHooksImg}
    imageWidth={600}
  />
);

export default CustomHooksTheory;
