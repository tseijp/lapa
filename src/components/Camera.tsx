import { useEffect, useRef } from 'react'
import { useControls } from 'leva'
import { PerspectiveCamera } from '@react-three/drei'
import { useGame } from '../hooks'
import { gsap } from 'gsap'
import type { PerspectiveCamera as PerspectiveCameraType } from 'three'

export const Camera = () => {
        const _ = useGame()
        const ref = useRef<PerspectiveCameraType | null>(null)
        const { x0, y0, z0, x1, y1, z1 } = useControls(
                'Camera',
                {
                        x0: { value: 0, min: 0, max: 10 },
                        y0: { value: 1.5, min: 0, max: 10 },
                        z0: { value: 15, min: 0, max: 10 },
                        x1: { value: 0, min: 0, max: 10 },
                        y1: { value: 0.8, min: 0, max: 10 },
                        z1: { value: 0.6, min: 0, max: 10 },
                },
                {
                        collapsed: true,
                }
        )
        const initCam = useRef((cam: PerspectiveCameraType) => {
                _({
                        start() {
                                gsap.to(cam.position, { x: x1, y: y1, z: z1 })
                        },
                        end() {
                                gsap.to(cam.position, { x: x0, y: y0, z: z0 })
                        },
                })
        }).current

        useEffect(() => {
                if (!ref.current) return
                initCam(ref.current)
        }, [_, initCam])
        return (
                <PerspectiveCamera
                        makeDefault
                        far={100}
                        near={0.05}
                        position={[x0, y0, z0]}
                        ref={ref}
                />
        )
}
