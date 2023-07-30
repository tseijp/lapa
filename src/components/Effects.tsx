/**
 * ref https://codesandbox.io/s/r3f-instanced-colors-w3lwy
 */
import { useRef, useEffect } from 'react'
import { extend, useThree } from '@react-three/fiber'
import { Effects as EffectsImpl } from '@react-three/drei'
import { useControls } from '../hooks'
import {
        AfterimagePass,
        EffectComposer,
        ShaderPass,
        FXAAShader,
        UnrealBloomPass,
} from 'three-stdlib'

extend({
        AfterimagePass,
        EffectComposer,
        ShaderPass,
        UnrealBloomPass,
})

// <Effects disableGamma>
// </Effects>

export const Effects = () => {
        const afterimagePass = useRef<any>()
        const { scene, size, camera } = useThree()
        const { damp } = useControls(
                'AfterImatePass',
                { damp: 0.6 },
                { collapsed: true }
        )

        useEffect(() => {
                if (!afterimagePass.current) return
                afterimagePass.current.uniforms.damp.value = damp
        }, [damp])

        return (
                <EffectsImpl disableGamma>
                        {/* @ts-ignore */}
                        <unrealBloomPass
                                {...useControls(
                                        'UnrealBloomPass',
                                        {
                                                threshold: 1,
                                                strength: 0.4,
                                                radius: 0.01,
                                                exposure: 0.5,
                                        },
                                        { collapsed: true }
                                )}
                        />
                        {/* @ts-ignore */}
                        <afterimagePass ref={afterimagePass} />
                        <shaderPass
                                // @ts-ignore
                                attachArray="passes"
                                args={[FXAAShader]}
                                material-uniforms-resolution-value={[
                                        1 / size.width,
                                        1 / size.height,
                                ]}
                                renderToScreen
                        />
                        {/* @ts-ignore */}
                        {/* <bokehPass
                                attachArray="passes"
                                args={[scene, camera, params]}
                                {...ctrl('BokehP', {
                                        focus: 10,
                                        aperture: 5,
                                        maxblur: 0.01,
                                })}
                        /> */}
                </EffectsImpl>
        )
}
