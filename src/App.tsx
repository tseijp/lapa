import { useState } from 'react'
import { Frame, Grid, Item } from './components'
import { gameStatus, padItems, padItem, userItems, userItem } from './events'
import { GameStatus, PadItems, PadItem, UserItems, UserItem } from './types'
import { GameProvider, useGame, useDebugImage } from './hooks'
import { range } from './utils'
// import { Color, MeshBasicMaterial } from 'three'

// const glowRed = new MeshBasicMaterial({
//         color: new Color(7, 0, 0.5),
//         toneMapped: false,
// })

export const App = (props: Partial<GameStatus>) => {
        const [_] = useState(() => gameStatus(props))
        // useDebugImage()
        return (
                <GameProvider value={_}>
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
