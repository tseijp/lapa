import { event } from 'reev'
import { GameStatus, UserItems, UserItem, PadItems, PadItem } from './types'
import {
        rand,
        range,
        userItemsij,
        userItemdxdy,
        swapItemValue,
        bubbleSortItems,
        checkReach,
        checkWin,
        getCenterItems,
} from './utils'
import {
        isNotYourTurn,
        isVisibleNextColor,
        isVisiblePadItem,
        isPairingPadItem,
} from './errors'
import type { Group, Mesh } from 'three'

export const gameStatus = (other?: Partial<GameStatus>) => {
        const _ = event({
                ref(el: Group) {
                        const loop = () => {
                                _.timeoutId = setTimeout(() => {
                                        _[`b${_.b}`]?.()
                                        _.b = (_.b + 1) % _.beat
                                        loop()
                                }, 60000 / _.bpm)
                        }
                        if (el) {
                                _.el = el
                                loop()
                        } else clearTimeout(_.timeoutId)
                },
                current() {
                        const user = _.users[(_.t % 4) + 1]
                        if (!user.reach) return
                        user.win = checkWin(user.items, _.select)
                },
                next() {
                        const user = _.users[(_.t % 4) + 1]
                        bubbleSortItems(user.items)
                        user.reach = checkReach(user.items)
                        _.select = null
                        _.t++
                },
                ...other,
        }) as unknown as GameStatus
        _.beat = _.m
        _._w = _.w + 2 * _.gap
        _.size = _._w * _.l
        _._size = _.size + 2 * (_._w + _.padding)
        _.users = range(4).map(() => null)
        return _
}

export const padItems = (_: GameStatus, other?: Partial<PadItems>) => {
        const self = event({
                _type: 'padItems',
                ref(el: Group) {
                        if (!el) return
                        self.el = el
                        getCenterItems(_).forEach((item, i) => {
                                item.visible = true
                                item.v = i % _.n
                        })
                        self.update()
                },
                ...other,
        }) as PadItems
        self.items = range(_.l ** 2).map(() => null)
        self.x = self.y = 0
        _.pads = self
        return self
}

export const userItems = (_: GameStatus, other?: Partial<UserItems>) => {
        const self = event({
                _type: 'userItems',
                ref(el: Group) {
                        if (!el) return
                        self.el = el
                        bubbleSortItems(self.items)
                        if (checkReach(self.items)) self.reach = true
                        _.update()
                },
                ...other,
        }) as UserItems
        self.items = range(_.n).map(() => null)
        ;[self.i, self.j] = userItemsij(self.k)
        ;[self.x, self.y] = [self.i, self.j].map(
                (v) => (v * (_.size + _._w)) / 2
        )
        _.users[self.k] = self
        return self
}

export const padItem = (_: GameStatus, other?: Partial<PadItem>) => {
        const self = event({
                ...other,
                _type: 'padItem',
                click() {
                        if (_.select) return
                        if (!isVisibleNextColor(_, self)) return
                        if (isPairingPadItem(_, self)) return
                        if (isVisiblePadItem(_, self)) return
                        _.select = self
                        _.select.visible = true
                        _.current()
                        _.update()
                },
                ref(el: Mesh) {
                        if (el) self.el = el
                },
        }) as PadItem
        self.i = self.k % _.l
        self.j = Math.floor(self.k / _.l)
        self.v = rand(_.n)
        self.x = ((self.i * 2 - _.l + 1) * _._w) / 2
        self.y = ((self.j * 2 - _.l + 1) * _._w) / 2
        _.pads.items[self.k] = self
        return self
}

export const userItem = (_: GameStatus, other?: Partial<UserItem>) => {
        const self = event({
                ...other,
                _type: 'userItem',
                click() {
                        if (!_.select) return
                        if (isNotYourTurn(_, self)) return
                        swapItemValue(_.select, self)
                        _._select = _.select
                        _.select = null
                        _.next()
                        _.update()
                },
                ref(el: Mesh) {
                        const i = self.i || self.j
                        const fun = () => {
                                self.active = _.b === i
                                if ((_.t % 4) + 1 !== self.pk)
                                        self.active = false
                                else if (self.active) _[`l${self.v}`]?.()
                                self.update()
                                _({ [`b${(i + 1) % _.beat}`]: fun })
                        }
                        if (el) {
                                self.el = el
                                _({ [`b${i % _.beat}`]: fun })
                        }
                },
        }) as UserItem
        const [dx, dy] = userItemdxdy(self.pk)
        self.i = !dx ? 0 : self.k % _.l
        self.j = !dy ? 0 : self.k % _.l
        self.v = rand(_.n)
        self.x = (dx * ((self.i * 2 - _.l + 1) * _._w)) / 2
        self.y = (dy * ((self.j * 2 - _.l + 1) * _._w)) / 2
        self.visible = true
        _.users[self.pk].items[self.k] = self
        return self
}
