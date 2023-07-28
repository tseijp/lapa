import { EventState } from 'reev'
import type { Mesh, Group } from 'three'

export type Color = [r: number, g: number, b: number]

export type GameType = 'basic' | 'kalah' | 'oware'

export type Vec3 = [x: number, y: number, z: number]

export interface GameStatus extends EventState<object> {
        pads: PadItems
        users: UserItems[]
        colors: number[][]
        el: Group
        l: number
        m: number
        n: number
        r: number // role size
        t: number
        w: number
        _w: number
        gap: number
        size: number
        _size: number
        depth: number
        padding: number
        // beats
        b: number
        bpm: number
        beat: number
        timeoutId: number
        select?: PadItem | null
        _select?: PadItem | null
        hovered?: PadItems | UserItems | null
        _hovered?: PadItems | UserItems | null
        alert(): void
        update(): void
        current(): void
        next(): void
        ref: any
}

export interface UserItems {
        _: GameStatus
        _type: 'userItems'
        items: UserItem[]
        el: Group
        reach: boolean
        flash: boolean
        win: boolean
        k: number
        i: number
        j: number
        x: number
        y: number
        update(): void
        ref: any
}

export interface UserItem {
        _: GameStatus
        _type: 'userItem'
        visible: boolean
        active: boolean
        flash: boolean
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
        update(): void
        click(e: any): void
        ref(el: Mesh): void
}

export interface PadItems {
        _: GameStatus
        _type: 'padItems'
        items: PadItem[]
        el: Group
        flash: boolean
        x: 0
        y: 0
        k: 0
        update(): void
        ref: any
}

export interface PadItem {
        _: GameStatus
        _type: 'padItem'
        visible: boolean
        flash: boolean
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
        update(): void
        click(e: any): void
        ref: any
}
