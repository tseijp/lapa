import { MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import type { ReflectorProps } from '@react-three/drei'
import type { GameStatus } from '../types'

export interface GroundProps extends Partial<ReflectorProps> {
        _?: GameStatus
}

export const Ground = (props: GroundProps) => {
        const { nodes, materials } = useGLTF('/untitled.gltf') as any

        const other = useControls(
                'Ground',
                {
                        metalness: 0,
                        resolution: 1024,
                        mixBlur: 8,
                        mixStrength: 8,
                        mirror: 0.8,
                        color: [1, 1, 1],
                        blur: [1024, 2048],
                },
                {
                        collapsed: true,
                }
        )
        return (
                // @ts-ignore
                <mesh
                        {...props}
                        geometry={nodes.Object.geometry}
                        rotation={[-Math.PI / 2, 0, 0]}
                >
                        {
                                <MeshReflectorMaterial
                                        {...other}
                                        {...materials._warehouse}
                                />
                        }
                </mesh>
        )
}
