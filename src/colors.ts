import { GameStatus, UserItem, PadItem } from './types'
import { isVisibleNextColor, isPairingPadItem } from './errors'
import { Color } from './types'

export const switchUserLuminance = (_: GameStatus, self: UserItem) => {
        const { visible, active, pk } = self
        if (!visible) return 0.1
        if (active) return 5
        if (_.t % _.m !== pk && _.hovered?.k === pk) return 2
        return 1
}

export const switchPadLuminance = (_: GameStatus, self: PadItem) => {
        const { visible } = self
        if (_.select === self) return 5
        if (_._select === self) return 4
        if (visible) return 1
        if (isVisibleNextColor(_, self)) {
                if (isPairingPadItem(_, self)) return 0.1
                else return 1
        }
        return 0.1
}

export const changeLuminance = (rgb: number[], target: number) => {
        const current = (rgb[0] + rgb[1] + rgb[2]) / 3
        const maxVal = Math.max(...rgb)
        const adjustRate = target / current
        return rgb.map((val) =>
                val === maxVal ? val * adjustRate : val
        ) as Color
}

// export const changeLuminance = (rgb: number[], target: number) => {
//         const maxVal = Math.max(...rgb)
//         const adjustRate = target / maxVal
//         return rgb.map((val) => (val === maxVal ? val * adjustRate : val))
// }
