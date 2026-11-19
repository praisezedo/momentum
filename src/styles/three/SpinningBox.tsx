import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SpinningBox() {
      const meshRef = useRef<THREE.Mesh>(null);
    
      useFrame(() => {
         (meshRef.current as THREE.Mesh).rotation.y  +=  0.01 * 1.5;
      });

      return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="hotpink" roughness={0.3} />
        </mesh>
      )
}