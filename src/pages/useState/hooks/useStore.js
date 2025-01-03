import { useMemo } from 'react';
import { usePokeHooksContext } from '../../../context/PokeHooksContext';
import useFetch from '../../../hooks/useFetch';

const useStore = () => {
  const { trainerCardInfo } = usePokeHooksContext();

  const { data: storePokeballs } = useFetch(
    'https://pokeapi.co/api/v2/item/poke-ball'
  );

  const { data: storePotions } = useFetch(
    'https://pokeapi.co/api/v2/item/super-potion'
  );

  const money = useMemo(() => {
    const pokeballsCost =
      storePokeballs?.cost * trainerCardInfo.items.pokeballs;
    const potionsCost = storePotions?.cost * trainerCardInfo.items.potions;
    return trainerCardInfo.money - (pokeballsCost + potionsCost);
  }, [
    storePokeballs?.cost,
    storePotions?.cost,
    trainerCardInfo.items,
    trainerCardInfo.money,
  ]);

  return {
    money,
    store: {
      pokeballs: {
        cost: storePokeballs?.cost,
        sprite: storePokeballs?.sprites?.default,
      },
      potions: {
        cost: storePotions?.cost,
        sprite: storePotions?.sprites?.default,
      },
    },
  };
};

export default useStore;
