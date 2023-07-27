import { MeshProps } from '@react-three/fiber'
import { useControls } from 'leva'
import { changeLuminance } from '../colors'
import { useMemo, useRef, useState } from 'react'
import { useGame } from '../hooks'
import type { Group } from 'three'
import { range } from '../utils'

const { PI } = Math

export interface LightSProps extends MeshProps {
        xxx?: any
}

export const LightS = (props: LightSProps) => {
        const _ = useGame()
        const {
                initIntensity,
                intensity,
                distance,
                decay,
                x,
                y,
                z,
                sx,
                sy,
                sz,
                size: s,
                scale,
                color,
                luminance,
        } = useControls(
                'LightS',
                {
                        initIntensity: 0.01,
                        intensity: 1024,
                        distance: 8,
                        decay: 4,
                        x: 1.25,
                        y: 2.05,
                        z: -7.12,
                        sx: 0.6,
                        sy: 0.4,
                        sz: 0.02,
                        size: 1,
                        scale: 1,
                        color: [1, 0, 0],
                        luminance: 100,
                },
                { collapsed: true }
        )
        const neonColor = useMemo(
                () => changeLuminance(color, luminance),
                [color, luminance]
        )
        const ref = useRef((el: Group) => {
                if (el) {
                        // Strobe effect
                        const sec = 60000 / _.bpm / _.n
                        const strobe = () => {
                                el.intensity = intensity
                                ref.timeoutId = setTimeout(() => {
                                        el.intensity = initIntensity
                                }, sec)
                        }
                        ref.space = () => {
                                range(_.select?.v).forEach((i) => {
                                        setTimeout(strobe, i * sec)
                                })
                        }
                        _({ next: ref.space, b0: ref.space })
                        window.addEventListener('keydown', ref.space)
                } else {
                        window.removeEventListener('keydown', ref.space)
                        clearTimeout(ref.timeoutId)
                }
        }).current as any
        return (
                <mesh
                        position-x={x}
                        position-y={y}
                        position-z={z}
                        scale={[sx, sy, sz]}
                        rotation={[-0.062, -1.055, -1.642]}
                        {...props}
                >
                        <pointLight
                                // @ts-ignore
                                intensity={initIntensity}
                                distance={distance}
                                decay={decay}
                                color={neonColor}
                                ref={ref}
                        />
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={neonColor} />
                </mesh>
        )
}
