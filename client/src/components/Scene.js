import React, { useEffect } from 'react';

import { Canvas, extend, useThree } from 'react-three-fiber';
import styled, { createGlobalStyle } from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GAME_PRESETS } from '../constants/app';
import { PIXEL_RATIO } from '../constants/env';

import { useSubscribeActivePlayers } from '../hooks/useSubscribeActivePlayers';
import Players from './Players';
import Lights from './Lights';

extend({ OrbitControls });

const GlobalStyles = createGlobalStyle`
  html, body {
    background: black;
    color: white;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
  }

  canvas {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
  }
`;

const StyledHUD = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  margin: 1rem;
  font-family: sans-serif;
  font-size: 3rem;
`;

const Scene = () => {
  const activePlayers = useSubscribeActivePlayers();

  useCameraController();

  return (
    <>
      <GlobalStyles />

      <StyledHUD>{activePlayers} Active Users</StyledHUD>

      <Canvas pixelRatio={PIXEL_RATIO}>
        <Lights />
        <Players />
      </Canvas>
    </>
  );
};

const useCameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = GAME_PRESETS.controls.minDistance;
    controls.maxDistance = GAME_PRESETS.controls.maxDistance;

    // Cleanup the orbit controls when
    // our component unmounts.
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
};

export default Scene;
