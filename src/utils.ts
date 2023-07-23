import type { UserItem, PadItem } from './types'
export const rand = (n: number) => Math.floor(Math.random() * n)

export const range = (n: number) => [...Array(n).keys()]

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
