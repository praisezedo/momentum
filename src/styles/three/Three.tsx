import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Mesh from './Mesh'


export default function Three() {

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0f172a' }}>
      <Canvas camera={{ position: [0 , 2 , 5] }} dpr={[1, 1]}>
       
        {/* 1. Light so we can see */}
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <ambientLight intensity={1} />
        < Mesh />
        {/* 3. Mouse controls to look around */}
        <OrbitControls />

      </Canvas>
    </div>
  )
}