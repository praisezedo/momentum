import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Mesh from './Mesh'


export default function Three() {

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0f172a' }}>
      <Canvas camera={{ position: [0 , 2 , 5] }} dpr={[1, 1]}>

        {/* 1. Light so we can see */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5 , 5 , 5]} intensity={2} />
        < Mesh />
        {/* 3. Mouse controls to look around */}
        <OrbitControls />

      </Canvas>
    </div>
  )
}