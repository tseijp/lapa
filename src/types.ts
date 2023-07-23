import type { Mesh, ThreeEvent } from 'three'

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
        select?: UserItem | PadItem | null
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
        visible: boolean
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
        r: number
        g: number
        b: number
        click(e: ThreeEvent<MouseEvent>): void
        ref(el: Mesh): void
}

export interface PadItems {
        _: GameStatus
        _type: 'padItems'
        items: PadItem[]
        x: 0
        y: 0
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
        r: number
        g: number
        b: number
        click(e: ThreeEvent<MouseEvent>): void
        ref(el: Mesh): void
}
