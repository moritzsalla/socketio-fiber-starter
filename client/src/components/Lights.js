/* eslint-disable react/no-unknown-property */

import { GAME_PRESETS } from '../constants/app';
import React from 'react';

const Lights = () => {
  return (
    <>
      <ambientLight />
      <pointLight
        color={GAME_PRESETS.lights.color}
        intensity={GAME_PRESETS.lights.intensity}
        position={GAME_PRESETS.lights.pointLight}
      />
    </>
  );
};

export default Lights;
