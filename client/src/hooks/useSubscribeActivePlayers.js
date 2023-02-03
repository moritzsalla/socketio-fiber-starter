import { useEffect, useState } from 'react';
import { Socket } from '../components/App';

/**
 * @hook useSubscribeActivePlayers
 * @requires SocketInstance
 * @returns {Array<Number>} active players
 */
export const useSubscribeActivePlayers = () => {
  const [activePlayers, setActivePlayers] = useState(0);

  useEffect(() => {
    Socket.on('event', (data) => {
      setActivePlayers(data);
    });

    Socket.on('error', (_err) => {
      const message =
        'An error occurred while trying to fetch the active players.';
      const error = new Error(message, { cause: _err });
      throw error;
    });
  }, []);

  return activePlayers || 0;
};
