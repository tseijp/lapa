import { event } from 'reev'
import { GameStatus, UserItems, UserItem, PadItems, PadItem } from './types'

export const gameStatus = (props?: Partial<GameStatus>) => {
        const self = event({
                ...props,
        }) as GameStatus
        return self
}

export const padItems = (props?: Partial<PadItems>) => {
        const self = event({
                name: 'padItems',
                click() {
                        self._.update()
                },
                ...props,
        }) as PadItems
        self._.pads = self
        return self
}

export const padItem = (props?: Partial<PadItem>) => {
        const self = event({
                name: 'padItem',
                click() {
                        self._.update()
                },
                ...props,
        }) as PadItem
        self.parent.items[self.i] = self
        return self
}

export const userItems = (props?: Partial<UserItems>) => {
        const self = event({
                name: 'userItems',
                ...props,
        }) as UserItems
        self._.users = self
        return self
}

export const userItem = (props?: Partial<UserItem>) => {
        const self = event({
                name: 'userItem',
                ...props,
                click() {
                        self._.update()
                },
        }) as UserItem
        self.parent.items[self.index] = self
        return self
}
