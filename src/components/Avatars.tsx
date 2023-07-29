import { useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { GroupProps } from '@react-three/fiber'

export interface AvatarsProps extends GroupProps {
        gltf: any
}

export const Avatars = (props: AvatarsProps) => {
        const { nodes, materials, animations } = props.gltf
        const { ref, actions, names } = useAnimations(animations)
        console.log({ ref, actions, names })
        useEffect(() => {
                console.log({ ref, actions, names })
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
                                name="Woman07_"
                                position={[1.989, 0.088, -2.464]}
                                rotation={[3.039, 0.692, 2.994]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips} />
                                <skinnedMesh
                                        name="Woman07"
                                        geometry={nodes.Woman07.geometry}
                                        material={materials.Woman07}
                                        skeleton={nodes.Woman07.skeleton}
                                />
                        </group>
                        <group
                                name="Woman06_"
                                position={[-1.488, 0.004, -1.474]}
                                rotation={[2.989, -0.383, -3.08]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_1} />
                                <skinnedMesh
                                        name="Woman06"
                                        geometry={nodes.Woman06.geometry}
                                        material={materials.Woman06}
                                        skeleton={nodes.Woman06.skeleton}
                                />
                        </group>
                        <group
                                name="Woman05_"
                                position={[3.642, 0.003, -1.073]}
                                rotation={[3.115, 1.289, 2.903]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_2} />
                                <skinnedMesh
                                        name="Woman05"
                                        geometry={nodes.Woman05.geometry}
                                        material={materials.Woman05}
                                        skeleton={nodes.Woman05.skeleton}
                                />
                        </group>
                        <group
                                name="Woman04_"
                                position={[0.459, -0.045, -1.358]}
                                rotation={[2.974, 0.053, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_3} />
                                <skinnedMesh
                                        name="Woman04"
                                        geometry={nodes.Woman04.geometry}
                                        material={materials.Woman04}
                                        skeleton={nodes.Woman04.skeleton}
                                />
                        </group>
                        <group
                                name="Woman03_"
                                position={[-1.525, 0.023, -2.488]}
                                rotation={[2.973, -0.356, -3.128]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_4} />
                                <skinnedMesh
                                        name="Woman03001"
                                        geometry={nodes.Woman03001.geometry}
                                        material={materials.Woman03}
                                        skeleton={nodes.Woman03001.skeleton}
                                />
                        </group>
                        <group
                                name="Woman09_"
                                position={[0.768, -0.006, -1.226]}
                                rotation={[2.929, 0.661, -3.005]}
                                scale={0.019}
                        >
                                <primitive object={nodes.mixamorigHips_5} />
                                <skinnedMesh
                                        name="Woman09"
                                        geometry={nodes.Woman09.geometry}
                                        material={materials.Woman09}
                                        skeleton={nodes.Woman09.skeleton}
                                />
                        </group>
                        <group
                                name="Woman02_"
                                position={[-2.627, 0.042, -1.943]}
                                rotation={[2.964, -0.699, -3.127]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_6} />
                                <skinnedMesh
                                        name="Woman02001"
                                        geometry={nodes.Woman02001.geometry}
                                        material={materials.Woman02}
                                        skeleton={nodes.Woman02001.skeleton}
                                />
                        </group>
                        <group
                                name="Woman01_"
                                position={[1.86, 0.024, -2.639]}
                                rotation={[2.972, 0.369, -3.137]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_7} />
                                <skinnedMesh
                                        name="Woman01001"
                                        geometry={nodes.Woman01001.geometry}
                                        material={materials.Woman01}
                                        skeleton={nodes.Woman01001.skeleton}
                                />
                        </group>
                        <group
                                name="Woman08_"
                                position={[2.841, 0.038, -1.996]}
                                rotation={[2.929, 0.68, -3.039]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_8} />
                                <skinnedMesh
                                        name="Woman08"
                                        geometry={nodes.Woman08.geometry}
                                        material={materials.Woman08}
                                        skeleton={nodes.Woman08.skeleton}
                                />
                        </group>
                        <group
                                name="Man09_"
                                position={[3.025, 0.019, -2.27]}
                                rotation={[2.973, 0.31, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_9} />
                                <skinnedMesh
                                        name="Man09"
                                        geometry={nodes.Man09.geometry}
                                        material={materials.Man09}
                                        skeleton={nodes.Man09.skeleton}
                                />
                        </group>
                        <group
                                name="Man03_"
                                position={[3.385, 0.052, -0.601]}
                                rotation={[2.964, 0.623, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_10} />
                                <skinnedMesh
                                        name="Man03"
                                        geometry={nodes.Man03.geometry}
                                        material={materials.Man03}
                                        skeleton={nodes.Man03.skeleton}
                                />
                        </group>
                        <group
                                name="Man07_"
                                position={[2.1, 0.047, -1.323]}
                                rotation={[2.882, 0.86, -2.917]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_11} />
                                <skinnedMesh
                                        name="Man07"
                                        geometry={nodes.Man07.geometry}
                                        material={materials.Man07}
                                        skeleton={nodes.Man07.skeleton}
                                />
                        </group>
                        <group
                                name="Man06_"
                                position={[0.804, 0.442, -2.702]}
                                rotation={[2.974, 0.053, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_12} />
                                <skinnedMesh
                                        name="Man06"
                                        geometry={nodes.Man06.geometry}
                                        material={materials.Man06}
                                        skeleton={nodes.Man06.skeleton}
                                />
                        </group>
                        <group
                                name="Man04_"
                                position={[-0.473, 0.035, -2.095]}
                                rotation={[2.973, 0.211, -3.138]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_13} />
                                <skinnedMesh
                                        name="Man04"
                                        geometry={nodes.Man04.geometry}
                                        material={materials.Man04}
                                        skeleton={nodes.Man04.skeleton}
                                />
                        </group>
                        <group
                                name="Man01_"
                                position={[-0.531, 0.028, -1.974]}
                                rotation={[2.956, -0.441, 3.056]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_14} />
                                <skinnedMesh
                                        name="Man01"
                                        geometry={nodes.Man01.geometry}
                                        material={materials.Man01}
                                        skeleton={nodes.Man01.skeleton}
                                />
                        </group>
                        <group
                                name="Man08_"
                                position={[-1.489, 0.093, -1.335]}
                                rotation={[2.928, -0.9, 3.111]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_15} />
                                <skinnedMesh
                                        name="Man08"
                                        geometry={nodes.Man08.geometry}
                                        material={materials.Man08}
                                        skeleton={nodes.Man08.skeleton}
                                />
                        </group>
                        <group
                                name="Man05_"
                                position={[-1.416, 0.052, -0.423]}
                                rotation={[2.718, -1.245, 2.875]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_16} />
                                <skinnedMesh
                                        name="Man05"
                                        geometry={nodes.Man05.geometry}
                                        material={materials.Man05}
                                        skeleton={nodes.Man05.skeleton}
                                />
                        </group>
                        <group
                                name="Man02_"
                                position={[-3.162, 0.002, -1.124]}
                                rotation={[2.55, -1.332, 2.701]}
                                scale={0.018}
                        >
                                <primitive object={nodes.mixamorigHips_17} />
                                <skinnedMesh
                                        name="Man02"
                                        geometry={nodes.Man02.geometry}
                                        material={materials.Man02}
                                        skeleton={nodes.Man02.skeleton}
                                />
                        </group>
                </group>
        )
}
