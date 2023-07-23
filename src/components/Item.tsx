import { gsap } from 'gsap'
// import { Html } from '@react-three/drei'
import type { ReactNode } from 'react'
import type { GameStatus, PadItem, UserItem } from '../types'
import { useGame } from '../hooks'

export interface ItemProps {
        children?: ReactNode
        self: PadItem | UserItem | null
}

export const Item = (props: ItemProps) => {
        const { self } = props
        const { x, y } = self
        const _ = useGame()
        const color =
                self._type === 'userItem'
                        ? switchUserColor(_, self)
                        : switchPadColor(_, self)
        return (
                <mesh
                        position={[x, 0, y]}
                        scale={0.8}
                        ref={self.ref}
                        onClick={self.click}
                        onPointerEnter={() => {
                                gsap.to(self.el.position, { y: -0.2 })
                        }}
                        onPointerLeave={() => {
                                gsap.to(self.el.position, { y: 0 })
                        }}
                >
                        <boxGeometry />
                        <meshBasicMaterial color={color} toneMapped={false} />
                </mesh>
        )
}

const switchColor = (v: number) => {
        switch (v) {
                case 1:
                        return [0, 226 / 255, 226 / 255]
                case 2:
                        return [226 / 255, 0, 226 / 255]
                case 3:
                        return [226 / 255, 226 / 255, 0]
                case 4:
                        return [0, 226 / 255, 0]
                default:
                        return [226 / 255, 226 / 255, 226 / 255]
        }
}

const switchUserColor = (_: GameStatus, self: UserItem) => {
        const { v, pk } = self
        let ret = switchColor(v)
        if ((_.t % 4) + 1 !== pk) ret = changeColor(ret, 0.1)
        if (_.select === self) ret = changeColor(ret, 3)
        return ret
}

const switchPadColor = (_: GameStatus, self: PadItem) => {
        const { v, visible } = self
        let ret = switchColor(v)
        if (!visible) ret = [226 / 255, 226 / 255, 226 / 255]
        if (_.select === self) ret = changeColor(ret, 3)
        return ret
}

const changeColor = (color: number[], rate: number) => {
        return color.map((v) => v * rate)
}
