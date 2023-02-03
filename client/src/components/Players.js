import React from 'react';
import { useDebounce } from '../hooks/useDebounce';
import Particle from './Particle';

import { getRandomColor, getRandomCoord } from '../utils/scene';

const Players = ({ activePlayers }) => {
  const debouncedPlayers = useDebounce(activePlayers, 300);

  return [...Array(debouncedPlayers)]?.map((_, index) => {
    return (
      <Particle
        key={`player-balloon-${index}`}
        position={getRandomCoord()}
        color={getRandomColor()}
      />
    );
  });
};

export default Players;
