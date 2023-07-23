import { useEffect, useState } from 'react'
import { Frame, Grid, Item } from './components'
import { Html } from '@react-three/drei'
import { gameStatus, padItems, padItem, userItems, userItem } from './events'
import { GameStatus, PadItems, PadItem, UserItems, UserItem } from './types'
import { GameProvider, useGame, useDebugImage, useForceUpdate } from './hooks'
import { bubbleSortItems, range } from './utils'

export const App = (props: Partial<GameStatus>) => {
        const [_] = useState(() => gameStatus(props))
        _.update = useForceUpdate()
        // useDebugImage()
        return (
                <GameProvider value={_}>
                        <Html
                                fullscreen
                                style={{
                                        fontSize: '2rem',
                                        color: 'white',
                                }}
                        >
                                t:{_.t}
                        </Html>
                        <Pads />
                        <Frame />
                        <Users k={1} />
                        <Users k={2} />
                        <Users k={3} />
                        <Users k={4} />
                </GameProvider>
        )
}

export const Pads = (props: Partial<PadItems>) => {
        const _ = useGame()
        const [self] = useState(() => padItems(_, props))
        return (
                <Grid self={self}>
                        {range(_.l ** 2).map((k) => (
                                <Pad key={k} k={k} />
                        ))}
                </Grid>
        )
}

export const Pad = (props: Partial<PadItem>) => {
        const _ = useGame()
        const [self] = useState(() => padItem(_, props))
        return <Item self={self} />
}

export const Users = (props: Partial<UserItems>) => {
        const _ = useGame()
        const [self] = useState(() => userItems(_, props))
        useEffect(() => {
                bubbleSortItems(self.items)
                _.update()
        }, [])
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
        return <Item self={self} />
}
