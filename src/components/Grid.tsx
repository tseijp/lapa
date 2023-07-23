// import { Html } from '@react-three/drei'
import type { ReactNode } from 'react'
import type { PadItems, UserItems } from '../types'

export interface GridProps {
        children?: ReactNode
        self: PadItems | UserItems | null
}

export const Grid = (props: GridProps) => {
        const { self, children, ...other } = props
        const { x, y } = self
        return (
                <group {...other} position={[x, 0, y]}>
                        {children}
                </group>
        )
}
