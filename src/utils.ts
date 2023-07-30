import type { UserItem, PadItem, GameStatus } from './types'
export const rand = (n: number) => Math.floor(Math.random() * n)

export const range = (n: number) => [...Array(n).keys()]

export const eventLife = (e: any, n: number, key: string, fun: any) => {
        const callback = () => {
                if (n-- <= 0) e({ [key]: callback })
                else fun()
        }
        e({ [key]: callback })
}

export const userItemsij = (k: number) => {
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

export const userItemdxdy = (k: number) => {
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

export const swapItemValue = (a: UserItem | PadItem, b: UserItem | PadItem) => {
        const v = a.v
        a.v = b.v
        b.v = v
}

export const bubbleSortItems = (items: (UserItem | PadItem)[]) => {
        const l = items.length
        for (let i = 0; i < l; i++)
                for (let j = 0; j < l - 1 - i; j++)
                        if (items[j].v > items[j + 1].v)
                                swapItemValue(items[j], items[j + 1])
}

export const checkPair = (...items: (UserItem | PadItem)[]) => {
        const obj = {}
        items.forEach(({ v }) => (obj[v] = obj[v] ? obj[v] + 1 : 1))
        return Object.values(obj).sort()
}

export const checkReach = (items: UserItem[]) => {
        const [a, b, c, d] = checkPair(...items)
        return (
                (a === 2 && b === 3 && c === 3 && !d) ||
                (a === 3 && b === 5 && !c) ||
                (a === 2 && b === 6 && !c) ||
                (a === 8 && !b)
        )
}

export const checkWin = (items: UserItem[], select: PadItem) => {
        const [a, b, c, d] = checkPair(...items, select)
        return (
                (a === 3 && b === 3 && c === 3 && !d) ||
                (a === 3 && b === 6 && !c) ||
                (a === 9 && !b)
        )
}

export const getNextItem = (
        di = 0,
        dj = 0,
        _: GameStatus,
        self: PadItem
): PadItem | null => {
        const items = _.pads.items
        const i = self.i + di
        const j = self.j + dj
        const k = i + j * _.l
        if (i <= -1 || _.l <= i || j <= -1 || _.l <= j) return null
        return items[k]
}

export const getNextItems = (_: GameStatus, self: PadItem) => {
        return [
                getNextItem(0, -1, _, self),
                getNextItem(-1, 0, _, self),
                getNextItem(0, 1, _, self),
                getNextItem(1, 0, _, self),
        ]
}

export const getCenterItems = (_: GameStatus) => {
        const h = Math.floor(_.l / 2)
        const a = _.l * (h - 1) + h - 1
        const b = _.l * (h - 1) + h
        const c = _.l * h + h - 1
        const d = _.l * h + h
        return [a, b, c, d].map((k) => _.pads.items[k])
}

// @TODO FIX
// export const checkPair = (_: GameStatus, self: PadItem | UserItem) => {
//         if (self._type === 'userItem') return false
//         const getPair = (di = 0, dj = 0, ...pair: PadItem[]) => {
//                 const next = getNextItem(di, dj, _, pair[0])
//                 if (!next || pair[0].v !== next.v) return null
//                 if (pair.length >= 2) return [next, ...pair]
//                 return getPair(di, dj, next, ...pair)
//         }
//         const pair =
//                 getPair(0, -1, self) ||
//                 getPair(-1, 0, self) ||
//                 getPair(0, 1, self) ||
//                 getPair(1, 0, self)
//         if (!pair) return false
//         self._.pads.pair.push(...pair) // side effect !!
//         return true
// }
