import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Particle = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const randScale = () => {
    let r = Math.random() * 3;
    return [r, r, r];
  };

  return (
    <mesh {...props} ref={mesh} scale={randScale()}>
      <sphereBufferGeometry attach="geometry" args={[0.2, 32, 32]} />
      <meshStandardMaterial attach="material" color={`rgb(${props.color})`} />
    </mesh>
  );
};

export default Particle;
