/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { getFormattedRGBColor, getRandomScale } from '../utils/scene';

const ROTATION_FACTOR = 0.01;

const Particle = (props) => {
  const { color } = props ?? {};

  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Every balloon has a different scale
  // for demonstration purposes
  const randomScale = useMemo(() => {
    return getRandomScale();
  }, []);

  // Rotate mesh every frame
  useFrame(() => {
    if (!meshRef?.current) return;
    meshRef.current.rotation.x = meshRef.current.rotation.y += ROTATION_FACTOR;
  });

  return (
    <mesh {...props} ref={meshRef} scale={randomScale}>
      <sphereBufferGeometry attach='geometry' args={[0.2, 32, 32]} />
      <meshStandardMaterial
        attach='material'
        color={getFormattedRGBColor(color)}
      />
    </mesh>
  );
};

export default Particle;
