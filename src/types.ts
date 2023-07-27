import { EventState } from 'reev'
import type { Mesh, Group, ThreeEvent } from 'three'

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
        select?: UserItem | PadItem | null
        alert(): void
        update(): void
        next(): void
        ref(el: Group): void
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
        ref(el: Mesh): void
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
        click(e: ThreeEvent<MouseEvent>): void
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
        update(): void
        ref(el: Mesh): void
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
        click(e: ThreeEvent<MouseEvent>): void
        ref(el: Mesh): void
}
