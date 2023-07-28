// import { Html } from '@react-three/drei'
import { useGame } from '../hooks'
import type { ReactNode } from 'react'
import type { PadItems, UserItems } from '../types'
import type { GroupProps } from '@react-three/fiber'
export interface GridProps extends GroupProps {
        children?: ReactNode
        self: PadItems | UserItems | null
}

export const Grid = (props: GridProps) => {
        const { self, children, ...other } = props
        const { x, y } = self
        const _ = useGame()
        return (
                <group
                        {...other}
                        ref={self.ref}
                        position={[x, 0, y]}
                        onPointerEnter={() => {
                                _._hovered = _.hovered
                                _.hovered = self
                                if (_.hovered !== _._hovered) _.pads?.update()
                        }}
                        onPointerLeave={() => {
                                _._hovered = _.hovered
                                _.hovered = null
                                if (_.hovered !== _._hovered) _.pads?.update()
                        }}
                >
                        {children}
                </group>
        )
}
