/**
 * ref
 * https://codesandbox.io/s/bloom-tbqxdi?file=/src/App.js:0-429
 */
import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useGame } from '../hooks'
import type { Group } from 'three'
export const Rig = ({ children }) => {
        const disabledRef = useRef(false)
        const ref = useRef<Group>()
        const vec = useRef(new THREE.Vector3()).current
        const _ = useGame()
        useEffect(() => {
                const callback = (e: { clientX: number; clientY: number }) => {
                        if (disabledRef.current) return
                        const x = e.clientX / window.innerWidth - 0.5
                        const y = e.clientY / window.innerHeight - 0.5
                        ref.current.position.lerp(vec.set(x * 5, y * 5, 0), 0.1)
                        ref.current.rotation.y = THREE.MathUtils.lerp(
                                -ref.current.rotation.y,
                                (-x * Math.PI) / 20,
                                0.1
                        )
                }
                _({
                        start() {
                                disabledRef.current = true
                                ref.current.position.set(0, 0, 0)
                                ref.current.rotation.set(0, 0, 0)
                        },
                        end() {
                                disabledRef.current = false
                        },
                })
                window.addEventListener('mousemove', callback)
                return () => window.removeEventListener('mousemove', callback)
        }, [_, vec])
        return <group ref={ref}>{children}</group>
}
