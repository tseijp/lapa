export type GameType = 'basic' | 'kalah' | 'oware'

export type Vec3 = [x: number, y: number, z: number]

export interface GameStatus {
        pads: PadItems
        users: UserItems
        colors: string[]
        l: number
        m: number
        n: number
        t: number
        alert(): void
        update(): void
}

export interface UserItems {
        _: GameStatus
        name: 'userItems'
        items: UserItem[]
}

export interface UserItem {
        _: GameStatus
        name: 'userItem'
        parent: UserItems
        index: number
        v: number
        i: number
        c: number
        x: number
        y: number
}

export interface PadItems {
        _: GameStatus
        name: 'padItems'
        items: PadItem[]
        click(e: Event): void
}

export interface PadItem {
        _: GameStatus
        name: 'padItem'
        parent: PadItems
        visible: boolean
        v: number
        i: number
        x: number
        y: number
        click(e: Event): void
}
