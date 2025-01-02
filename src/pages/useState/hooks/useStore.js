import { useEffect, useMemo, useState } from 'react';
import { usePokeHooksContext } from '../../../context/PokeHooksContext';

const useStore = () => {
  const { trainerCardInfo } = usePokeHooksContext();

  const [store, setStore] = useState({});

  const money = useMemo(
    () =>
      trainerCardInfo.money -
      (store.pokeballs?.cost * trainerCardInfo.items.pokeballs +
        store.potions?.cost * trainerCardInfo.items.potions),
    [store, trainerCardInfo.items, trainerCardInfo.money]
  );

  useEffect(() => {
    const getStoreItems = async () => {
      const pokeballResponse = await fetch(
        'https://pokeapi.co/api/v2/item/poke-ball'
      );

      const potionResponse = await fetch(
        'https://pokeapi.co/api/v2/item/super-potion'
      );

      const dataPokeball = await pokeballResponse.json();
      const dataPotion = await potionResponse.json();

      const filteredData = {
        pokeballs: {
          cost: dataPokeball.cost,
          sprite: dataPokeball.sprites.default,
        },
        potions: {
          cost: dataPotion.cost,
          sprite: dataPotion.sprites.default,
        },
      };

      setStore(filteredData);
    };

    getStoreItems();
  }, []);

  return {
    money,
    store,
  };
};

export default useStore;
