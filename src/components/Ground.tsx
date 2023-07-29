import { MeshReflectorMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import type { ReflectorProps } from '@react-three/drei'

export interface GroundProps extends Partial<ReflectorProps> {
        gltf: any
}

export const Ground = (props: GroundProps) => {
        const { nodes, materials } = props.gltf

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
