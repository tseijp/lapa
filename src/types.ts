export type GameType = 'basic' | 'kalah' | 'oware'

export type Vec3 = [x: number, y: number, z: number]

export interface GameStatus {
        pads: PadItems
        users: UserItems[]
        colors: string[]
        el: Element
        l: number
        m: number
        n: number
        t: number
        w: number
        _w: number
        gap: number
        size: number
        _size: number
        depth: number
        padding: number
        alert(): void
        update(): void
}

export interface UserItems {
        _: GameStatus
        _type: 'userItems'
        el: Element
        k: number
        i: number
        j: number
        x: number
        y: number
        items: UserItem[]
        ref(el: Element): void
}

export interface UserItem {
        _: GameStatus
        _type: 'userItem'
        index: number
        pk: number
        el: Element
        v: number
        i: number
        j: number
        k: number
        c: number
        x: number
        y: number
        ref(el: Element): void
}

export interface PadItems {
        _: GameStatus
        _type: 'padItems'
        items: PadItem[]
        el: Element
        x: 0
        y: 0
        click(e: Event): void
        ref(el: Element): void
}

export interface PadItem {
        _: GameStatus
        _type: 'padItem'
        visible: boolean
        el: Element
        v: number
        i: number
        j: number
        k: number
        x: number
        y: number
        click(e: Event): void
        ref(el: Element): void
}
