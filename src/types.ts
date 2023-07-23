import type { Mesh } from 'three'

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
        k: number
        i: number
        j: number
        x: number
        y: number
        items: UserItem[]
}

export interface UserItem {
        _: GameStatus
        _type: 'userItem'
        index: number
        pk: number
        el: Mesh
        v: number
        i: number
        j: number
        k: number
        c: number
        x: number
        y: number
        ref(el: Mesh): void
}

export interface PadItems {
        _: GameStatus
        _type: 'padItems'
        items: PadItem[]
        x: 0
        y: 0
        click(e: Event): void
}

export interface PadItem {
        _: GameStatus
        _type: 'padItem'
        visible: boolean
        el: Mesh
        v: number
        i: number
        j: number
        k: number
        x: number
        y: number
        click(e: Event): void
        ref(el: Mesh): void
}
