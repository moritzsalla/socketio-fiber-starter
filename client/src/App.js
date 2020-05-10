import React from 'react';
import socketIOClient from 'socket.io-client';
import Scene from './Scene';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4001',
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;

    const socket = socketIOClient(endpoint);

    socket.on('event', (data) => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;

    return <Scene users={response} />;
  }
}

export default App;
