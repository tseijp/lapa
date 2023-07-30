import { useState } from 'react'
import {
        Avatars,
        Camera,
        Effects,
        Frame,
        Grid,
        Ground,
        Item,
        LightL,
        LightM,
        LightS,
        Model,
        Rig,
} from './components'
import { useGLTF } from '@react-three/drei'
import { padItems, padItem, userItems, userItem } from './events'
import { PadItems, PadItem, UserItems, UserItem } from './types'
import { useGame, useForceUpdate } from './hooks'
import { range } from './utils'

export const Game = () => {
        const gltf = useGLTF('/untitled.gltf') as any
        const _ = useGame()
        return (
                <group ref={_.ref}>
                        <ambientLight />
                        <Camera />
                        <Effects />
                        <Rig>
                                <Pads />
                                {range(_.l).map((k) => (
                                        <LightL key={k} z={2 + k * 2} />
                                ))}
                                <LightM />
                                <LightS />
                                <Avatars gltf={gltf} position-y={-1.36} />
                                <Ground
                                        gltf={gltf}
                                        mirror={1}
                                        position-y={-1.36}
                                />
                                <Model gltf={gltf} position-y={-1.36} />
                        </Rig>
                </group>
        )
}

useGLTF.preload('/untitled.gltf')

export const Pads = (props: Partial<PadItems>) => {
        const _ = useGame()
        const [self] = useState(() => padItems(_, props))
        self.update = useForceUpdate()
        return (
                <Grid self={self} scale={0.04}>
                        {range(_.l ** 2).map((k) => (
                                <Pad key={k} k={k} />
                        ))}
                        <Frame />
                        <Users k={1} />
                        <Users k={2} />
                        <Users k={3} />
                        <Users k={4} />
                </Grid>
        )
}

export const Pad = (props: Partial<PadItem>) => {
        const _ = useGame()
        const [self] = useState(() => padItem(_, props))
        self.update = useForceUpdate()
        return <Item self={self} />
}

export const Users = (props: Partial<UserItems>) => {
        const _ = useGame()
        const [self] = useState(() => userItems(_, props))
        self.update = useForceUpdate()
        return (
                <Grid self={self}>
                        {range(_.m).map((k) => (
                                <User key={k} k={k} pk={self.k} />
                        ))}
                </Grid>
        )
}

export const User = (props: Partial<UserItem>) => {
        const _ = useGame()
        const [self] = useState(() => userItem(_, props))
        self.update = useForceUpdate()
        return <Item self={self} />
}

export default Game
