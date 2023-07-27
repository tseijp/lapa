import { gsap } from 'gsap'
// import { Html } from '@react-three/drei'
import {
        switchPadLuminance,
        switchUserLuminance,
        changeLuminance,
} from '../colors'
import { useGame } from '../hooks'
import type { ReactNode } from 'react'
import type { PadItem, UserItem } from '../types'
import type { MeshProps } from '@react-three/fiber'
export interface ItemProps extends MeshProps {
        children?: ReactNode
        self: PadItem | UserItem | null
}

export const Item = (props: ItemProps) => {
        const { self } = props
        const { x, y } = self
        const _ = useGame()
        const baseColor = _.colors[self.visible ? self.v : -1] || [1, 1, 1]
        const luminance =
                self._type === 'padItem'
                        ? switchPadLuminance(_, self)
                        : switchUserLuminance(_, self)
        const color = changeLuminance(baseColor, luminance)
        return (
                <mesh
                        ref={self.ref}
                        position={[x, 0, y]}
                        onClick={self.click}
                        onPointerEnter={() => {
                                gsap.to(self.el.position, { y: -0.2 })
                        }}
                        onPointerLeave={() => {
                                gsap.to(self.el.position, { y: 0 })
                        }}
                >
                        <boxGeometry args={[_.w, _.depth, _.w]} />
                        <meshBasicMaterial color={color} toneMapped={false} />
                </mesh>
        )
}
