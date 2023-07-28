import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { GroupProps } from '@react-three/fiber'

export const Avatars = (props: GroupProps) => {
        const { nodes, materials, animations } = useGLTF(
                '/untitled.gltf'
        ) as any
        const { ref, actions, names } = useAnimations(animations)
        console.log({ ref, actions, names })
        useEffect(() => {
                names.forEach((name) => {
                        actions[name]?.reset().fadeIn(0.5).play()
                })
                return () =>
                        names.forEach((name) => {
                                actions[name]?.fadeOut(0.5)
                        })
        }, [actions, names])

        return (
                // @ts-ignore
                <group {...props} ref={ref}>
                        <group
                                position={[1.989, 0.088, -2.464]}
                                rotation={[3.039, 0.692, 2.994]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_1_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_1_Skin.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_1_Chest_Int.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_07_1003_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_07_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_07_1003_5
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-1.488, 0.004, -1.474]}
                                rotation={[2.989, -0.383, -3.08]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_1} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_1_Legs.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_1_Chest2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_1_Chest_Int2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_1_Hans.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_06_1001_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_06_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_06_1001_5
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[3.642, 0.003, -1.073]}
                                rotation={[3.115, 1.289, 2.903]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_2} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_05_1003.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_05_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_05_1003.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_05_1003_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_05_1003_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_05_1003_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_05_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_05_1003_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_05_1003_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_05_1.Skin.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_05_1003_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_05_1003_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_05_1.Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_05_1003_4
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[0.459, -0.045, -1.358]}
                                rotation={[2.974, 0.053, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_3} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_04_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_04_1_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_04_1_Chest2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_04_1_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_04_1001_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_04_1_Skin.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_04_1001_5
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-1.525, 0.023, -2.488]}
                                rotation={[2.973, -0.356, -3.128]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_4} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_03_1001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_03_1_Chest2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_03_1001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_03_1001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_03_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_03_1001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_03_1001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_03_1001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_03_1001_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_03_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_03_1001_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_03_1001_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_03_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_03_1001_4
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[0.768, -0.006, -1.226]}
                                rotation={[2.929, 0.661, -3.005]}
                                scale={0.019}
                        >
                                <primitive object={nodes.mixamorigHips_5} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_3001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_3_Cloth.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_3001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_3001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_3001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_3001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_3001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_3001_3
                                                        .geometry
                                        }
                                        material={materials['DFS_Phone.001']}
                                        skeleton={
                                                nodes.DFS_Woman_02_3001_3
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-2.627, 0.042, -1.943]}
                                rotation={[2.964, -0.699, -3.127]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_6} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_1_Chest_2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_02_1001_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_02_1_Chest_Int_2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_02_1001_5
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[1.86, 0.024, -2.639]}
                                rotation={[2.972, 0.369, -3.137]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_7} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Chest_int_2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Chest_2.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1001_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1001_5
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[2.841, 0.038, -1.996]}
                                rotation={[2.929, 0.68, -3.039]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_8} />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_1
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Chest_int.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_1
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_2
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_Head.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_2
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_3
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_Hand_Neutral.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_3
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_4
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Pants.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_4
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_5
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_1_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_5
                                                        .skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Woman_01_1003_6
                                                        .geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Woman_01_Hair.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Woman_01_1003_6
                                                        .skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[3.025, 0.019, -2.27]}
                                rotation={[2.973, 0.31, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_9} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_16001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_16_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_16001.skeleton}
                                />
                                // @ts-ignore
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_16001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_16_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_16001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_16001_2.geometry
                                        }
                                        material={materials['DFS_Comp_Cap.001']}
                                        skeleton={
                                                nodes.DFS_Man_16001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_16001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_16_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_16001_3.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[3.385, 0.052, -0.601]}
                                rotation={[2.964, 0.623, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_10} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_13001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_13_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_13001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_13001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_13_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_13001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_13001_2.geometry
                                        }
                                        material={materials['DFS_Comp_Cap.001']}
                                        skeleton={
                                                nodes.DFS_Man_13001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_13001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_13_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_13001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_13001_4.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_13_Hands.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_13001_4.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[2.1, 0.047, -1.323]}
                                rotation={[2.882, 0.86, -2.917]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_11} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_12001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_12_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_12001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_12_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_12_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_12_Hands.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_4.geometry
                                        }
                                        material={
                                                materials['DFS_Man_12_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_4.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_5.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Comp_Sunglasses.002'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_5.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_12001_6.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Comp_Black_Glass.002'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_12001_6.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[0.804, 0.442, -2.702]}
                                rotation={[2.974, 0.053, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_12} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_11001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_11_Pants_3.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_11001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_11001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_11_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_11001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_11001_2.geometry
                                        }
                                        material={materials['DFS_Comp_Cap.001']}
                                        skeleton={
                                                nodes.DFS_Man_11001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_11001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_11_Chest1.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_11001_3.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-0.473, 0.035, -2.095]}
                                rotation={[2.973, 0.211, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_13} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_11002.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_11_Pants_2.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_11002.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_11002_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_11_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_11002_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_11002_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_11_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_11002_2.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-0.531, 0.028, -1.974]}
                                rotation={[2.956, -0.441, 3.056]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_14} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_10001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_10_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_10001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_10001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_10_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_10001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_10001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_10_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_10001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_10001_3.geometry
                                        }
                                        material={
                                                materials['DFS_Man_10_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_10001_3.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-1.489, 0.093, -1.335]}
                                rotation={[2.928, -0.9, 3.111]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_15} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_08001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_08_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_08001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_08001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_08_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_08001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_08001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_08_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_08001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_08001_3.geometry
                                        }
                                        material={
                                                materials['DFS_Man_08_Hand.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_08001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_08001_4.geometry
                                        }
                                        material={
                                                materials['DFS_Man_08_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_08001_4.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-1.416, 0.052, -0.423]}
                                rotation={[2.718, -1.245, 2.875]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_16} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_05001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_05_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_05001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_05_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_Hand_White.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_05_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_4.geometry
                                        }
                                        material={
                                                materials['DFS_Man_05_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_4.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_5.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Comp_Sunglasses.002'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_5.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_05001_6.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Comp_Black_Glass.002'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_05001_6.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-4.081, -0.002, -1.568]}
                                rotation={[2.87, -1.058, 3.041]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_17} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_03001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_03_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_03001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_03001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_03_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_03001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_03001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_Hand_White.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_03001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_03001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_03_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_03001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_03001_4.geometry
                                        }
                                        material={
                                                materials['DFS_Man_03_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_03001_4.skeleton
                                        }
                                />
                        </group>
                        <group
                                position={[-3.162, 0.002, -1.124]}
                                rotation={[2.55, -1.332, 2.701]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_18} />
                                <skinnedMesh // @ts-ignore
                                        geometry={nodes.DFS_Man_02001.geometry}
                                        material={
                                                materials[
                                                        'DFS_Man_02_Pants.001'
                                                ]
                                        }
                                        skeleton={nodes.DFS_Man_02001.skeleton}
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_02001_1.geometry
                                        }
                                        material={
                                                materials['DFS_Man_02_Head.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_02001_1.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_02001_2.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_Hand_Standard.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_02001_2.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_02001_3.geometry
                                        }
                                        material={
                                                materials[
                                                        'DFS_Man_02_Chest.001'
                                                ]
                                        }
                                        skeleton={
                                                nodes.DFS_Man_02001_3.skeleton
                                        }
                                />
                                <skinnedMesh // @ts-ignore
                                        geometry={
                                                nodes.DFS_Man_02001_4.geometry
                                        }
                                        material={
                                                materials['DFS_Man_02_Hair.001']
                                        }
                                        skeleton={
                                                nodes.DFS_Man_02001_4.skeleton
                                        }
                                />
                        </group>
                </group>
        )
}
