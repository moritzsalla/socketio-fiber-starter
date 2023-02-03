import React from 'react';
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../constants/env';
import Scene from './Scene';

export const Socket = socketIOClient(ENDPOINT);

const App = () => {
  return <Scene />;
};

export default App;
