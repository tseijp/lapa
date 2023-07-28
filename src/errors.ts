import type { GameStatus, PadItem, UserItem } from './types'
import { getNextItems } from './utils'

/**
 * PadItem
 */

export const isVisiblePadItem = (_: GameStatus, self: PadItem) => {
        if (_._select === self) return false
        if (self.visible) {
                alert('item is visible')
                return true
        } else return false
}

export const isVisibleNextColor = (_: GameStatus, self: PadItem) => {
        const nexts = getNextItems(_, self)
        return nexts.some((item) => item?.visible)
}

export const isPairingPadItem = (_: GameStatus, self: PadItem) => {
        if (self === _._select) return false
        const user =
                _.hovered?._type === 'userItems'
                        ? _.hovered
                        : _.users[(_.t % 4) + 1]
        const items = user?.items
        const nexts = getNextItems(_, self).filter((item) => item?.visible)
        return nexts.some((next) => {
                return items.filter(({ v }) => v === next.v).length >= 3
        })
}

/**
 * UserItem
 */

export const isNotYourTurn = (_: GameStatus, self: UserItem) => {
        if ((_.t % 4) + 1 !== self.pk) {
                alert('not user turn')
                return true
        } else false
}

// export const isSameItemType = (_: GameStatus, self: UserItem | PadItem) => {
//         return _.select?._type === self._type
// }

// export const isSameItem = (_: GameStatus, self: UserItem | PadItem) => {
//         return _.select === self
// }

// export const isInvalidItemType = (_: GameStatus, self: UserItem | PadItem) => {
//         if (
//                 (self._type === 'padItem' && !self.visible) ||
//                 (_.select?._type === 'padItem' && !_.select?.visible)
//         )
//                 return false
//         if (_.select?.v === self.v) {
//                 alert('select item value is not match')
//                 return true
//         } else return false
// }

// export const isInvalidItemValue = (_: GameStatus, self: UserItem | PadItem) => {
//         if (_.select?._type === self._type) {
//                 alert('select item type is not match')
//                 return true
//         } else return false
// }
