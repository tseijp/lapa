import { useEffect, useRef } from 'react'
import { useControls } from '../hooks'
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
                        x0: 0,
                        y0: 1.5,
                        z0: 15,
                        x1: 0,
                        y1: 0.8,
                        z1: 0.6,
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
