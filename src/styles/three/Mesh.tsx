import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SpinningBox() {

  const [speed , setSpeed] = useState(1.5);
 
  const handleClick = () => {
    setSpeed((prev) => prev === 1.5 ? 6 : 1.5);
  }
      const meshRef = useRef<THREE.Mesh>(null);
    
      useFrame((_state , delta) => {
         (meshRef.current as THREE.Mesh).rotation.y  +=  delta * speed;
      });

      return (
        <mesh ref={meshRef} onClick={handleClick}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="hotpink" roughness={0.3} />
        </mesh>
      )
}