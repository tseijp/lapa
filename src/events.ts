import { event } from 'reev'
import { GameStatus, UserItems, UserItem, PadItems, PadItem } from './types'
import { range } from './utils'

export const gameStatus = (other?: Partial<GameStatus>) => {
        const _ = event({
                ...other,
        }) as GameStatus
        _._w = _.w + 2 * _.gap
        _.size = _._w * _.l
        _._size = _.size + 2 * (_._w + _.padding)
        _.users = range(4).map(() => null)
        console.log({ ..._ })
        return _
}

export const padItems = (_: GameStatus, other?: Partial<PadItems>) => {
        const self = event({
                _type: 'padItems',
                click() {
                        _.update()
                },
                ...other,
        }) as PadItems
        self.items = range(_.l ** 2).map(() => null)
        self.x = self.y = 0
        _.pads = self
        return self
}

export const padItem = (_: GameStatus, other?: Partial<PadItem>) => {
        const self = event({
                ...other,
                _type: 'padItem',
                click() {
                        _.update()
                },
                ref(el: Element) {
                        if (el) self.el = el
                },
        }) as PadItem
        self.i = self.k % _.l
        self.j = Math.floor(self.k / _.l)
        self.x = ((self.i * 2 - _.l + 1) * _._w) / 2
        self.y = ((self.j * 2 - _.l + 1) * _._w) / 2
        _.pads.items[self.k] = self
        return self
}

export const userItems = (_: GameStatus, other?: Partial<UserItems>) => {
        const self = event({
                _type: 'userItems',
                ...other,
        }) as UserItems
        self.items = range(_.n).map(() => null)
        ;[self.i, self.j] = switchItems(self.k)
        ;[self.x, self.y] = [self.i, self.j].map(
                (v) => (v * (_.size + _._w)) / 2
        )
        _.users[self.k] = self
        return self
}

export const userItem = (_: GameStatus, other?: Partial<UserItem>) => {
        const self = event({
                ...other,
                _type: 'userItem',
                click() {
                        _.update()
                },
                ref(el: Element) {
                        if (el) self.el = el
                },
        }) as UserItem
        const [dx, dy] = switchItemDir(self.pk)
        self.i = !dx ? 0 : self.k % _.l
        self.j = !dy ? 0 : self.k % _.l
        self.x = (dx * ((self.i * 2 - _.l + 1) * _._w)) / 2
        self.y = (dy * ((self.j * 2 - _.l + 1) * _._w)) / 2
        _.users[self.pk].items[self.k] = self
        return self
}

function switchItems(k: number) {
        switch (k) {
                case 1:
                        return [0, 1]
                case 2:
                        return [1, 0]
                case 3:
                        return [0, -1]
                case 4:
                        return [-1, 0]
                default:
                        throw 'ERROR'
        }
}

function switchItemDir(k: number) {
        switch (k) {
                case 1:
                        return [1, 0]
                case 2:
                        return [0, -1]
                case 3:
                        return [-1, 0]
                case 4:
                        return [0, 1]
                default:
                        throw 'ERROR'
        }
}
