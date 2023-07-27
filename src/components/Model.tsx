import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export interface ModelProps extends GroupProps {
        _?: any
}

export function Model(props: ModelProps) {
        const { nodes, materials } = useGLTF('/untitled.gltf') as any

        return (
                <group {...props} dispose={null}>
                        <mesh // @ts-ignore
                                geometry={nodes.Table.geometry}
                                material={materials._table}
                                position={[-1, 0.641, -0.5]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[-0.025, -0.638, -0.017]}
                        />
                        {/* Speaker 1 */}
                        <mesh // @ts-ignore
                                geometry={nodes.Speaker.geometry}
                                material={materials._speaker}
                                position={[2.853, 2.429, 0]}
                                rotation={[Math.PI, 0, Math.PI]}
                                scale={[0.349, 0.447, 0.349]}
                        />
                        <mesh // @ts-ignore
                                geometry={nodes.Tripod.geometry}
                                material={materials._speaker}
                                position={[2.878, 1.988, -0.01]}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={[0.069, 0.01, 0.039]}
                        />
                        {/* Speaker 2 */}
                        <mesh // @ts-ignore
                                geometry={nodes.Speaker.geometry}
                                material={materials._speaker}
                                position={[-2.853, 2.429, 0]}
                                rotation={[Math.PI, 0, 0]}
                                scale={[0.349, 0.447, 0.349]}
                        />
                        <mesh // @ts-ignore
                                geometry={nodes.Tripod.geometry}
                                material={materials._speaker}
                                position={[-2.878, 1.988, -0.01]}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={[0.069, 0.01, 0.039]}
                        />
                        {/* Lighting */}
                        <mesh // @ts-ignore
                                geometry={nodes.Light.geometry}
                                material={materials._speaker}
                                position={[1.514, 3.398, -7.271]}
                                rotation={[-0.062, -1.055, -1.642]}
                                scale={[0.045, 0.005, 0.025]}
                        />
                        <mesh // @ts-ignore
                                geometry={nodes.Tripod.geometry}
                                material={materials._speaker}
                                position={[1.514, 3.398, -7.271]}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={[0.069, 0.01, 0.039]}
                        />
                </group>
        )
}

useGLTF.preload('/untitled.gltf')
