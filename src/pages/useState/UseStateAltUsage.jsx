import { useState } from 'react';
import { usePokeHooksContext } from '../../context/PokeHooksContext';
import CodeImage from '../../components/CodeImage';
import useStateAltUsage from '../../assets/useExamples/useState/useStateAltUsage.png';
import useStore from './hooks/useStore';
import Store from '../../components/Store';

const UseStateAltUsage = () => {
  const { dispatchTrainerCardInfo, trainerCardInfo } = usePokeHooksContext();

  const [items, setItems] = useState(trainerCardInfo.items);

  const { money, store } = useStore();

  const handleChangeItems = (event) => {
    setItems((prevItems) => ({
      ...prevItems,
      [event.target.name]: +event.target.value,
    }));

    dispatchTrainerCardInfo({
      type: 'ITEMS',
      payload: { [event.target.name]: +event.target.value },
    });
  };

  return (
    <div className="row">
      <div className="align-items-center col d-flex flex-column justify-content-center">
        <Store
          items={[
            { ...store.pokeballs, name: 'pokeballs', total: items.pokeballs },
            { ...store.potions, name: 'potions', total: items.potions },
          ]}
          money={money}
          onChange={handleChangeItems}
        />
      </div>

      <div className="col">
        <CodeImage src={useStateAltUsage} width={500} />
      </div>
    </div>
  );
};

export default UseStateAltUsage;
