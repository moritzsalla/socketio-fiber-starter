import React, { useEffect } from 'react';
import { Canvas, extend, useThree } from 'react-three-fiber';
import Particle from './Particle';
import styled, { createGlobalStyle } from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
  }

  canvas {
      height: 100vh;
      width: 100vw;
      position: fixed:
      top: 0;
      left: 0;
  }
`;

const HUD = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  margin: 1rem;
  font-family: sans-serif;
  font-size: 3rem;
`;

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

class Scene extends React.Component {
  constructor() {
    super();
    this.state = {
      particles: 0,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ particles: props.users });
  }

  randCoord() {
    let x = Math.random() * 4 - 2;
    let y = Math.random() * 4 - 2;
    let z = Math.random() * 4 - 2;
    return [x, y, z];
  }

  randColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <HUD>{this.state.particles} Active Users</HUD>

        <Canvas
          pixelRatio={window.devicePixelRatio ? window.devicePixelRatio : 1}
        >
          <CameraController />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          {[...Array(this.state.particles)].map((e, i) => (
            <Particle
              key={i}
              position={this.randCoord()}
              color={this.randColor()}
            />
          ))}
        </Canvas>
      </>
    );
  }
}

export default Scene;
