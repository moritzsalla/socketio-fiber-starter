import React from 'react';
import socketIOClient from 'socket.io-client';
import Scene from './Scene';
const ENDPOINT = 'http://localhost:4001';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      response: false,
    };
  }

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    let self = this;

    socket.on('event', (data) => {
      console.log(data);
      self.setState({ response: data });
    });
  }

  render() {
    const { response } = this.state;

    return <Scene users={response} />;
  }
}

export default App;
