import { useState } from 'react'
import {
        Avatars,
        Frame,
        Grid,
        Ground,
        Item,
        LightL,
        LightM,
        LightS,
        Model,
} from './components'
import { Html, useGLTF } from '@react-three/drei'
import { gameStatus, padItems, padItem, userItems, userItem } from './events'
import { GameStatus, PadItems, PadItem, UserItems, UserItem } from './types'
import { GameProvider, useGame, useForceUpdate } from './hooks'
import { range } from './utils'

export const Game = (props: Partial<GameStatus>) => {
        const [_] = useState(() => gameStatus(props))
        const gltf = useGLTF('/untitled.gltf') as any

        _.update = useForceUpdate()
        return (
                <GameProvider value={_}>
                        <Html
                                fullscreen
                                style={{
                                        fontSize: '2rem',
                                        color: 'white',
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                }}
                        >
                                t:{_.t}
                                <br />
                                {_.users?.[1]?.reach && " 1's reach"}
                                <br />
                                {_.users?.[2]?.reach && " 2's reach"}
                                <br />
                                {_.users?.[3]?.reach && " 3's reach"}
                                <br />
                                {_.users?.[4]?.reach && " 4's reach"}
                                <br />
                                {_.users?.[1]?.win && " 1's win"}
                                <br />
                                {_.users?.[2]?.win && " 2's win"}
                                <br />
                                {_.users?.[3]?.win && " 3's win"}
                                <br />
                                {_.users?.[4]?.win && " 4's win"}
                        </Html>
                        <group ref={_.ref}>
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
                        </group>
                </GameProvider>
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
