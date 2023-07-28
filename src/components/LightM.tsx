import { useControls } from 'leva'
import { useMemo } from 'react'
import { changeLuminance } from '../colors'
import type { Color } from '../types'

const { PI } = Math

export const LightM = () => {
        const {
                intensity,
                distance,
                decay,
                x,
                y,
                z,
                size: s,
                scale,
                color,
                luminance,
        } = useControls(
                'LightM',
                {
                        intensity: 512,
                        distance: 12,
                        decay: 3,
                        x: -9.2,
                        y: 0,
                        z: 3.6,
                        size: 1,
                        scale: 1.8,
                        color: [1, 0, 0],
                        luminance: 10,
                },
                { collapsed: true }
        )
        const args = [1 / 40, 1 / 40, s, 8] as any
        const neonColor = useMemo(
                () => changeLuminance(color, luminance),
                [color, luminance]
        )

        return (
                <group
                        position={[x, y - s / 2, z]}
                        rotation-y={PI / 2}
                        scale={scale}
                >
                        <pointLight
                                // @ts-ignore
                                intensity={intensity}
                                distance={distance}
                                decay={decay}
                                color="#ff0000"
                        />
                        <mesh position-x={-s / 2}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        <mesh position-x={s / 2}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        <mesh position-x={s * 0.24} rotation-z={-PI * 0.15}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                        <mesh position-x={-s * 0.24} rotation-z={PI * 0.15}>
                                <cylinderGeometry args={args} />
                                <meshBasicMaterial
                                        color={neonColor}
                                        toneMapped={false}
                                />
                        </mesh>
                </group>
        )
}
