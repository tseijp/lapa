import type { ReactNode } from 'react'
import type { PadItem, UserItem } from '../types'
// import { Html } from '@react-three/drei'

export interface ItemProps {
        children?: ReactNode
        self: PadItem | UserItem | null
}

export const Item = (props: ItemProps) => {
        const { self } = props
        const { x, y } = self
        return (
                <mesh position={[x, 0, y]} scale={0.8}>
                        <boxGeometry />
                </mesh>
        )
}
