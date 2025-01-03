import { useState } from 'react';
import { usePokeHooksContext } from '../../context/PokeHooksContext';
import { Form } from 'react-bootstrap';
import CodeImage from '../../components/CodeImage';
import useStateUsage from '../../assets/useExamples/useState/useStateUsage.png';

const UseStateUsage = () => {
  const { dispatchTrainerCardInfo, trainerCardInfo } = usePokeHooksContext();

  // NEVER DO THIS IN A REAL PROJECT.
  // This is causing duplicity, but for learning purposes, we will keep it here.
  // The state initializes with the context name, initially: ''.
  const [name, setName] = useState(trainerCardInfo.name);

  // Updates the name state with the new value.
  const handleChangeName = (event) => {
    setName(event.target.value);

    // The context name is also updated with the new name for future use.
    // Things will be clearer in the next hooks.
    dispatchTrainerCardInfo({ type: 'NAME', payload: event.target.value });
  };

  return (
    <div className="row">
      <div className="col">
        <CodeImage src={useStateUsage} width={600} />
      </div>

      <div className="align-items-center col d-flex flex-column justify-content-center">
        {name && (
          <div
            className="d-flex flex-column align-items-center"
            style={{ height: '300px' }}
          >
            <h2 className="text-center">Hey, {name}! Let&apos;s battle!</h2>
            <img
              className="rounded"
              src="https://i.pinimg.com/originals/be/65/c6/be65c69c0895736e030b471857ea60ee.gif"
              width={300}
            />
          </div>
        )}

        <Form.Control
          className="w-50"
          onChange={handleChangeName}
          placeholder="What is your trainer's name?"
          type="text"
          value={name}
        />
      </div>
    </div>
  );
};

export default UseStateUsage;
