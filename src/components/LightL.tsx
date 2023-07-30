import { useControls } from '../hooks'
import { changeLuminance } from '../colors'
import { useMemo, useRef, useState } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGame } from '../hooks'
import type { Color } from '../types'
import type { Group } from 'three'
import { range } from '../utils'
const { PI } = Math

export interface LightLProps extends GroupProps {
        z?: number
}

export const LightL = (props: LightLProps) => {
        const _ = useGame()
        const [color, set] = useState([1, 1, 1] as Color)
        const {
                x,
                y,
                z,
                a,
                b,
                c,
                d,
                size: s,
                scale,
                luminance,
                intensity,
                distance,
                decay,
        } = useControls(
                'LightL',
                {
                        x: 0,
                        y: 0,
                        z: 0,
                        a: 1.65,
                        b: 0.18,
                        c: 1,
                        d: 1.5,
                        size: 1,
                        scale: 2.5,
                        luminance: 10,
                        intensity: 1, // 1
                        distance: 10, // 0
                        decay: 2, // 2
                },
                {
                        collapsed: true,
                }
        )
        const args = [1 / 40, 1 / 40, s, 8] as any
        const neonColor = useMemo(
                () => changeLuminance(color, luminance),
                [color, luminance]
        )
        const ref = useRef((el: Group) => {
                if (el) {
                        ref.el = el
                        _(
                                range(_.n).reduce((acc, k) => {
                                        acc[`l${k}`] = () =>
                                                set(_.colors[k] as Color)
                                        return acc
                                }, {})
                        )
                }
        }).current as any

        return (
                <group
                        position-x={x}
                        position-y={y}
                        position-z={props.z || z}
                        scale={scale}
                        {...props}
                        ref={ref}
                >
                        <pointLight
                                intensity={intensity}
                                distance={distance}
                                decay={decay}
                                color={color}
                        />
                        {/* Left */}
                        <mesh
                                position-x={-s * 0.75}
                                position-y={s * d}
                                rotation-z={PI / 2}
                        >
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        {/* Right */}
                        <mesh
                                position-x={s * 0.75}
                                position-y={s * d}
                                rotation-z={PI / 2}
                        >
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        {/* Left Top */}
                        <mesh
                                position-x={-s * a}
                                position-y={s * c}
                                rotation-z={-PI * b}
                        >
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        {/* Left Bottom */}
                        <mesh position-x={-s * a} rotation-z={PI * b}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        {/* Right Top */}
                        <mesh
                                position-x={s * a}
                                position-y={s * c}
                                rotation-z={PI * b}
                        >
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        {/* Right Bottom */}
                        <mesh position-x={s * a} rotation-z={-PI * b}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                </group>
        )
}
