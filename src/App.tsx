import { Suspense, useState } from 'react'
import { Button, Container } from './components'
import { gameStatus, padItems, padItem, userItems, userItem } from './events'
import { GameStatus, PadItems, PadItem, UserItems, UserItem } from './types'
import { range } from './utils'

export const App = (props: Partial<GameStatus>) => {
        const [_] = useState(() => gameStatus(props))
        return (
                <Suspense>
                        <Pads _={_} items={range(_.l ** 2).map(() => null)} />
                        <Users _={_} items={range(_.n).map(() => null)} />
                        <Users _={_} items={range(_.n).map(() => null)} />
                        <Users _={_} items={range(_.n).map(() => null)} />
                        <Users _={_} items={range(_.n).map(() => null)} />
                </Suspense>
        )
}

export const Pads = (props: Partial<PadItems>) => {
        const [self] = useState(() => padItems(props))
        return (
                <Container self={self}>
                        {range(self._.l ** 2).map((i) => (
                                <Pad key={i} i={i} />
                        ))}
                </Container>
        )
}

export const Pad = (props: Partial<PadItem>) => {
        const [self] = useState(() => padItem(props))
        return <Button self={self} />
}

export const Users = (props: Partial<UserItems>) => {
        const [self] = useState(() => userItems(props))
        return (
                <Container self={self}>
                        {range(self._.m).map((i) => (
                                <User key={i} i={i} />
                        ))}
                </Container>
        )
}

export const User = (props: Partial<UserItem>) => {
        const [self] = useState(() => userItem(props))
        return <Button self={self} />
}
