import { gsap } from 'gsap'
// import { Html } from '@react-three/drei'
import type { ReactNode } from 'react'
import type { PadItem, UserItem } from '../types'

export interface ItemProps {
        children?: ReactNode
        self: PadItem | UserItem | null
}

export const Item = (props: ItemProps) => {
        const { self } = props
        const { x, y } = self
        return (
                <mesh
                        position={[x, 0, y]}
                        scale={0.8}
                        ref={self.ref}
                        onPointerEnter={() => {
                                gsap.to(self.el.position, { y: -0.2 })
                        }}
                        onPointerLeave={() => {
                                gsap.to(self.el.position, { y: 0 })
                        }}
                >
                        <boxGeometry />
                </mesh>
        )
}
