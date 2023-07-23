import type { GameStatus, PadItem, UserItem } from './types'

export const isBothPadItem = (_: GameStatus, self: PadItem) => {
        return self._type === 'padItem' && _.select?._type === 'padItem'
}

export const isBothMineItem = (_: GameStatus, self: UserItem) => {
        if (_.select?._type !== 'userItem') return false
        return _.select?.pk === self.pk
}

export const isBothSameItem = (_: GameStatus, self: UserItem | PadItem) => {
        return _.select === self
}

export const isVisibleItem = (_: GameStatus, self: UserItem | PadItem) => {
        if (self.visible || _.select?.visible) {
                alert('item is visible')
                return true
        } else return false
}

export const isNotYourTurn = (_: GameStatus, self: UserItem) => {
        if ((_.t % 4) + 1 !== self.pk) {
                alert('not user turn')
                return true
        } else false
}

export const isInvalidItemType = (_: GameStatus, self: UserItem | PadItem) => {
        if (_.select?.v === self.v) {
                alert('select item value is not match')
                return true
        } else return false
}

export const isInvalidItemValue = (_: GameStatus, self: UserItem | PadItem) => {
        if (_.select?._type === self._type) {
                alert('select item type is not match')
                return true
        } else return false
}
