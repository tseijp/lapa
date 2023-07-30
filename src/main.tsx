import { createRoot } from 'react-dom/client'
import { Suspense, useState, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Menu, Result } from './components'
import { Leva } from 'leva'
import { gameStatus } from './events'
import { GameProvider, useForceUpdate } from './hooks'
import type { GameStatus, Color } from './types'
import type { CSSProperties } from 'react'

// @ts-ignore
const Game = lazy(() => import('./Game')) as any

const canvasStyle = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
} as CSSProperties

export const App = (props: Partial<GameStatus>) => {
        const [_] = useState(() => gameStatus(props))
        _.update = useForceUpdate()

        return (
                <GameProvider value={_}>
                        <Canvas
                                shadows
                                gl={{ antialias: false }}
                                style={canvasStyle}
                        >
                                <fog attach="fog" args={['#302020', 10, 25]} />
                                <ambientLight />
                                <Suspense>
                                        <Game />
                                </Suspense>
                                <OrbitControls
                                        enablePan={false}
                                        enableZoom={true}
                                        enableRotate={false}
                                />
                                <Result />
                        </Canvas>
                        {/* <Leva flat collapsed /> */}
                        <Menu />
                </GameProvider>
        )
}

const COLORS = [
        [255 / 255, 0 / 255, 255 / 255], // 250 hsl(300, 100%, 50%)
        [255 / 255, 213 / 255, 0 / 255], // 50 hsl( 50, 100%, 50%)
        [255 / 255, 0 / 255, 0 / 255], // 0 hsl(  0, 100%, 50%)
        [42 / 255, 0 / 255, 255 / 255], // 250 hsl(250, 100%, 50%)
        [0 / 255, 170 / 255, 255 / 255], // 100 hsl(200, 100%, 50%)
        [0 / 255, 255 / 255, 128 / 255], // 200 hsl(150, 100%, 50%)
        [85 / 255, 255 / 255, 0 / 255], // 100 hsl(100, 100%, 50%)
        [0, 0, 0],
        [1, 1, 1],
] as Color[]

createRoot(document.getElementById('root') as HTMLElement).render(
        <App
                b={0}
                l={8}
                m={8}
                n={4}
                t={0}
                w={1.05}
                bpm={128}
                gap={0.1}
                depth={0.5}
                padding={0.65}
                colors={COLORS}
        />
)
