import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeDView = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
    <OrbitControls />
  </Canvas>
);

export default ThreeDView;
