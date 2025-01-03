import { Button } from 'react-bootstrap';
import { usePokeHooksContext } from '../context/PokeHooksContext';
import redImg from '../assets/red.png';
import leafImg from '../assets/leaf.png';

const ChooseYouCharacter = () => {
  const { dispatchTrainerCardInfo, setNextPage } = usePokeHooksContext();

  const handleChoice = (choice) => {
    dispatchTrainerCardInfo({ type: 'CHARACTER', payload: choice });
    setNextPage();
  };

  return (
    <div>
      <h2 className="mb-5 text-center">Choose your character</h2>

      <div className="align-items-center col-6 d-flex justify-content-center w-100">
        <Button
          className="me-5 p-4 shadow"
          variant="success"
          onClick={() => handleChoice('leaf')}
        >
          <img src={leafImg} alt="leaf" width={150} />
        </Button>

        <Button
          className="p-4 shadow"
          variant="danger"
          onClick={() => handleChoice('red')}
        >
          <img src={redImg} alt="red" width={150} />
        </Button>
      </div>
    </div>
  );
};

export default ChooseYouCharacter;
