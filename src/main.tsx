import { createRoot } from 'react-dom/client'
import {
        OrbitControls,
        OrthographicCamera,
        BakeShadows,
        Stage,
        Effects,
} from '@react-three/drei'
import { extend, Canvas } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import { canvas } from './styles'
import { App } from './App'

extend({ UnrealBloomPass })

createRoot(document.getElementById('root') as HTMLElement).render(
        <Canvas shadows gl={{ antialias: false }} style={canvas}>
                <color attach="background" args={['#202030']} />
                <fog attach="fog" args={['#202030', 10, 25]} />
                <ambientLight />
                <hemisphereLight
                        {...({ incensity: 0.2 } as any)}
                        color="#eaeaea"
                        groundColor="blue"
                />
                <Effects disableGamma>
                        {/* @ts-ignore */}
                        <unrealBloomPass
                                threshold={1}
                                strength={1.0}
                                radius={0.5}
                        />
                </Effects>
                <axesHelper scale={2} />
                <directionalLight
                        {...({ castShadow: true } as any)}
                        intensity={0.2}
                        shadow-mapSize={[1024, 1024]}
                        shadow-bias={-0.0001}
                        position={[10, 10, -10]}
                />
                <App
                        l={8}
                        m={8}
                        n={4}
                        t={0}
                        w={1.05}
                        gap={0.1}
                        depth={0.5}
                        padding={0.65}
                />
                {/* @ts-ignore */}
                <OrthographicCamera
                        makeDefault
                        far={100}
                        near={0.05}
                        position={[0, 10, 0]}
                        zoom={50}
                />
                <OrbitControls enableZoom={true} />
                <BakeShadows />
        </Canvas>
)
