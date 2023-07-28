import {
        OrbitControls,
        PerspectiveCamera,
        BakeShadows,
        Effects,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { canvas } from './styles'
import { Game } from './Game'
import { useLocationSearch } from './hooks'
import { useControls as _ } from 'leva'
import type { Color } from './types'

export const App = () => {
        const search = useLocationSearch()
        return (
                <>
                        <Canvas
                                shadows
                                gl={{ antialias: false }}
                                style={canvas}
                        >
                                {/* @ts-ignore */}
                                <color attach="background" args={['#202030']} />
                                <fog attach="fog" args={['#202030', 10, 25]} />
                                <ambientLight />
                                {/* <pointLight position={[25, 25, 25]} /> */}
                                {/* <hemisphereLight
                                {...({ incensity: 0.2 } as any)}
                                color="#eaeaea"
                                groundColor="blue"
                        /> */}
                                <Effects disableGamma>
                                        {/* @ts-ignore */}
                                        <unrealBloomPass
                                                {..._(
                                                        'unrealBloomPass',
                                                        {
                                                                threshold: 1,
                                                                strength: 0.4,
                                                                radius: 0.01,
                                                                exposure: 0.5,
                                                        },
                                                        { collapsed: true }
                                                )}
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
                                <Game
                                        b={0}
                                        l={0 + search.l || 8}
                                        m={0 + search.m || 8}
                                        n={0 + search.n || 4}
                                        t={0}
                                        w={1.05}
                                        bpm={0 + search.bpm || 128}
                                        gap={0.1}
                                        depth={0.5}
                                        padding={0.65}
                                        colors={
                                                [
                                                        [
                                                                255 / 255,
                                                                0 / 255,
                                                                255 / 255,
                                                        ], // 250 hsl(300, 100%, 50%)
                                                        [
                                                                255 / 255,
                                                                213 / 255,
                                                                0 / 255,
                                                        ], // 50 hsl( 50, 100%, 50%)ß
                                                        [
                                                                0 / 255,
                                                                170 / 255,
                                                                255 / 255,
                                                        ], // 100 hsl(200, 100%, 50%) ???
                                                        [
                                                                42 / 255,
                                                                0 / 255,
                                                                255 / 255,
                                                        ], // 250 hsl(250, 100%, 50%)
                                                        [
                                                                0 / 255,
                                                                255 / 255,
                                                                128 / 255,
                                                        ], // 200 hsl(150, 100%, 50%) bad color
                                                        [
                                                                85 / 255,
                                                                255 / 255,
                                                                0 / 255,
                                                        ], // 100 hsl(100, 100%, 50%) bad color
                                                        [
                                                                255 / 255,
                                                                0 / 255,
                                                                0 / 255,
                                                        ], // 0 hsl(  0, 100%, 50%) bad color
                                                        [0, 0, 0],
                                                        [1, 1, 1],
                                                ] as Color[]
                                        }
                                />
                                {/* @ts-ignore */}
                                <PerspectiveCamera
                                        makeDefault
                                        far={100}
                                        near={0.05}
                                        position={[
                                                0,
                                                _({ x: 0.8 }).x, // _({ x: 1.5 }).x,
                                                _({ y: 0.3 }).y, // _({ y: 10 }).y,
                                        ]}
                                />
                                <OrbitControls enableZoom={true} />
                                <BakeShadows />
                        </Canvas>
                </>
        )
}
